import { useState } from 'react';
import './App.css';
import RSSgrid from './components/RSSgrid';

function App() {
  return (
    <>
      <h1>Podcast Player</h1>
      <RSSgrid
        height="500px"
        width="100%"
        rssfeed="https://media.rss.com/horrorstorypodcast/feed.xml"
      />
    </>
  );
}

export default App;
