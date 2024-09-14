import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Filter from './Components/Navbar/Filters/Filter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faShare, faTimeline } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="spacer"></div>
      <Filter />
      <div className="lining-2"></div>
      
      <div className="secondary-wrapper">
        <div className="random-title">About 150 Trademarks found for "nike"</div>
        <div className="export-wrapper">
          {/* Filter Button */}
          <button className="filter">
            <div><FontAwesomeIcon icon={faFilter} /></div>
            <span>Filter</span>
          </button>
          
          {/* Share Button */}
          <button className="share">
            <div><FontAwesomeIcon icon={faShare} /></div>
            <span></span>
          </button>

          {/* Timeline Button */}
          <button className="timeline">
            <div><FontAwesomeIcon icon={faTimeline} /></div>
            <span></span>
          </button>
        </div>
      </div>

      <div className="lining-2"></div>
    </>
  );
}

export default App;
