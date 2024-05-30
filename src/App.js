import React, { useState } from 'react';
import data from './data';
import List from './List';
import './index.css';
function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <div className='container'>
          <h2>{people.length} birthday today</h2>
          <List people={people} setPeople={setPeople} />
          <button
            className='btn'
            onClick={
              people.length === 0
                ? () => {
                    window.location.reload(true);
                  }
                : () => setPeople([])
            }
          >
            {people.length === 0 ? 'Reload' : 'Clear All'}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

