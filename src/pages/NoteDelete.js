import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../AxiosInstance';
import { MdNoteAlt } from 'react-icons/md';
import { Delete } from '../util/axios';

function NoteDelete() {
  let params = useParams();
  let slug = params.slug;
  let navigate = useNavigate();

  let handleDelete = async (event) => {
    try {
      event.preventDefault();
      Delete('notes/' + slug + '/');
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };

  return (
    <div>
      <div className='form container'>
        <MdNoteAlt className='user-icon' />
        <h2>Edit Note</h2>
        <form>
          <h6>Are you sure you want to delete this note?</h6>
          <div className='mb-3 mt-3 row'>
            <button
              id='submit'
              type='submit'
              onClick={handleDelete}
              className='btn btn-primary'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NoteDelete;
