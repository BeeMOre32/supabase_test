import React from 'react';
import AllPosts from './components/board/AllPosts';
import './style/app.scss';
import Navigator from './components/Navigator';
function App() {
  return (
    <div className="App">
      <h1 className="title">Write EveryThing</h1>
      <AllPosts />
      <Navigator />
    </div>
  );
}

export default App;
