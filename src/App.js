import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import StockRow from './components/StockRow'



function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="col-md-5 mt-5">
          <div className="card">
              <ul className="list-group list-group-flush">
                <StockRow ticker="AAPL"/>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
