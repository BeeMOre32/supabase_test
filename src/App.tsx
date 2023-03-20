import React from 'react';
import AllPosts from './components/AllPosts';
import './style/app.scss';

function App() {
  return (
    <div className="App">
      <h1 className="title">Write EveryThing</h1>
      {/*<PostAddForm />*/}
      <AllPosts />
    </div>
  );
}

export default App;
