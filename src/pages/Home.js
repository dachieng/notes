import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenuBook } from 'react-icons/md';

import axiosInstance from '../AxiosInstance';
import AddButton from '../components/AddButton';
import Search from '../components/Search';
import { Get } from '../util/axios';

const Home = () => {
  let [notes, setNotes] = useState([]);
  let [searchText, setSearchText] = useState('');

  useEffect(() => {
    let getNotes = async () => {
      let response = await Get('notes/');
      setNotes(response.data);
    };
    getNotes();
  }, []);

  let handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText)
  );

  return (
    <>
      <div className='notes-list container'>
        <h2 className='note-title'>
          <MdOutlineMenuBook /> My Notes
        </h2>
        <Search handleSearch={handleSearchChange} />
        {notes.length <= 0 ? (
          <div className='container text-center mt-5'>
            <h1>No notes available</h1>
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div key={note.id}>
              <Link className='text-secondary' to={'note/' + note.slug}>
                <h4>{note.title}</h4>
              </Link>
              <p>{note.content.substr(0, 60)} ...</p>
              <hr />
            </div>
          ))
        )}
        <AddButton />
      </div>
    </>
  );
};

export default Home;
