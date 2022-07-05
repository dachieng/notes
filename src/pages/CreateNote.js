import React from 'react';
import axiosInstance from '../AxiosInstance';
import { MdNoteAlt } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../util/axios';

function CreateNote() {
  let navigate = useNavigate();

  let [noteData, setNoteData] = React.useState({
    title: '',
    content: ''
  });

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
        const response = await Post('notes/', {
          title: noteData.title,
          content: noteData.content
        });
        navigate('/');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='form'>
      <MdNoteAlt className='user-icon' />
      <h2>Create Note</h2>
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

export default CreateNote;
