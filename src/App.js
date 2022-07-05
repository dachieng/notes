import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import CreateNote from './pages/CreateNote';
import Layout from './components/Layout';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Note from './pages/Note';
import NoteDelete from './pages/NoteDelete';
import NoteEdit from './pages/NoteEdit';
import Home from './pages/Home';
import Register from './pages/Register';
import { themeContext, setThemeContext } from './util/themeContext';

function App() {
  let [darkMode, setDarkMode] = React.useState(
    localStorage.getItem('darkMode')
  );

  useEffect(() => {
    localStorage.setItem('darkMode', false);
  }, []);

  let handleToggle = () => {
    setDarkMode((prev) => !prev);
    console.log(darkMode);
  };

  return (
    <themeContext.Provider value={darkMode}>
      <setThemeContext.Provider value={handleToggle}>
        <Layout>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/logout'
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
            />

            <Route
              path='/'
              exact
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path='/notes/new'
              element={
                <ProtectedRoute>
                  <CreateNote />
                </ProtectedRoute>
              }
            />
            <Route
              path='/note/:slug'
              element={
                <ProtectedRoute>
                  <Note />
                </ProtectedRoute>
              }
            />
            <Route
              path='/note/edit/:slug'
              element={
                <ProtectedRoute>
                  <NoteEdit />
                </ProtectedRoute>
              }
            />
            <Route
              path='/note/delete/:slug'
              element={
                <ProtectedRoute>
                  <NoteDelete />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </setThemeContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
