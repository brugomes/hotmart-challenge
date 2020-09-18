import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Timeline from '../timeline/timeline';

import './app.scss';

function App() {

  return (
    <div className="app">
      <div>
        <Header />
        <Timeline />
      </div>

      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
