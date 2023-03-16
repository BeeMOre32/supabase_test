import React from 'react';
import PostAddForm from './components/PostAddForm';
import AllPosts from './components/AllPosts';

function App() {
  return (
    <div className="App">
      <h1>Supabase React</h1>
      <PostAddForm />
      <AllPosts />
    </div>
  );
}

export default App;
