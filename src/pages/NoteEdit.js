import React from 'react';
import axiosInstance from '../AxiosInstance';
import { MdNoteAlt } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import { Get, Put } from '../util/axios';

function NoteEdit() {
  let params = useParams();
  let slug = params.slug;
  let navigate = useNavigate();

  let [noteData, setNoteData] = React.useState({
    title: '',
    content: ''
  });

  React.useEffect(() => {
    let getNote = async () => {
      try {
        let response = await Get('notes/' + slug + '/');
        setNoteData((prev) => {
          return {
            ...prev,
            title: response.data.title,
            content: response.data.content
          };
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    getNote();
  }, [slug]);

  let handleChange = (event) => {
    let { name, value } = event.target;
    setNoteData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (
        noteData.title.trim().length > 0 &&
        noteData.content.trim().length > 0
      ) {
        Put('notes/' + slug + '/', {
          title: noteData.title,
          content: noteData.content
        });
        navigate('/note/' + slug + '/');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='form'>
      <MdNoteAlt className='user-icon' />
      <h2>Edit Note</h2>
      <form>
        <div className='mb-3 mt-3 row'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            name='title'
            value={noteData.title}
            onChange={handleChange}
            className='form-control col-10'
            id='title'
            placeholder='Title'
          />
        </div>
        <div className='mb-3 row'>
          <label htmlFor='content' className='form-label'>
            Content
          </label>
          <textarea
            name='content'
            rows='7'
            value={noteData.content}
            onChange={handleChange}
            className='form-control col-10'
            id='content'
            placeholder='Content'
          />
        </div>

        <div className='mb-3 row'>
          <button
            id='submit'
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteEdit;
