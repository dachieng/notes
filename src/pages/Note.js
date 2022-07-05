import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Get } from '../util/axios';

function Note() {
  let [note, setNote] = React.useState({ data: [] });

  let params = useParams();

  let slug = params.slug;

  React.useEffect(() => {
    let getNote = async () => {
      try {
        let response = await Get('notes/' + slug + '/');
        setNote({ data: response.data });
      } catch (err) {
        console.log(err.message);
      }
    };

    getNote();
  }, [slug]);

  return (
    <div className='note-detail'>
      <div className='note-content'>
        <hr />
        <h4>{note.data.title}</h4>
        <p>{note.data.content}</p>
        <hr />
        <div className='note-actions'>
          <Link to={'/note/edit/' + slug + '/'}>
            <MdModeEdit className='icon' />
          </Link>
          <Link to={'/note/delete/' + slug + '/'}>
            <MdDeleteForever className='icon' />
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Note;
