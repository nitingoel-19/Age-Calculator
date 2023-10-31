
import './App.css';
import './index.css';
import React,{useState} from 'react';

function App() {
  const[selectedDate,setSelectedDate] = useState('');
  const[resultAge,setResultAge] = useState('');
  
  let helper = (event) =>{
    event.preventDefault();
    let enteredDate = new Date(selectedDate);
    let month_diff = Date.now() - enteredDate.getTime();  
      
    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);   
      
    //extract year from date      
    let year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    let age = Math.abs(year - 1970); 
    setResultAge(age); 
  }

  const reset = () =>{
    setResultAge('');
    setSelectedDate('');
  }
  return (
    <div className="App">
      <div className='center'>
        <b>Age Calculator</b>
      </div>
      <div>
        <h3>This will show your current age.</h3>
      </div>
      <form>
        <div>
          <label>Date of Birth : </label>
          <input type="date" value={selectedDate} onChange={e =>setSelectedDate(e.target.value)}></input>
        </div>
        <div>
          <button className="btn" type="submit" onClick={helper}>Calculate Age</button>
          <button className="btn btn-recheck" type="submit">Reset</button>
        </div>
      </form>
      <div>
        <h3>Your Age : {resultAge > 0 ? `${resultAge}` : ''}</h3>
      </div>
    </div>
  );
}

export default App;
