import React from 'react';
import NoteState from './components/context/NoteState';
import AppWrapper from './AppWrapper';

const App = () => {
  return (
    <NoteState>
      <AppWrapper />
    </NoteState>
  )
}

export default App
