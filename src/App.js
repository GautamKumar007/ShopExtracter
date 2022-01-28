import { useState } from 'react';
import './App.css';
import DataForm from './components/DataForm/DataForm';
// import ImageRangeSelector from './components/ImageRangeSelector/ImageRangeSelector';
import TopBar from './components/TopBar/TopBar';


function App() {

  return (
    <div className="App">
      <TopBar />
      <DataForm />
    </div>
  );
}

export default App;
