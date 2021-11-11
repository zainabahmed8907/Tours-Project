import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(true);
  const [tours,setTours]=useState([]);

  const fetchTours=async()=>{
    setLoading(true);


    try{
      const response=await fetch(url);
      const tours=await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);

    }
    catch(e)
    {

      setLoading(false);
      console.log(e);


    }


  }
const removeTours=(id)=>{
const newTour=tours.filter((tour)=>tour.id!==id);
setTours(newTour);

}
  useEffect(()=>{
    fetchTours();

  },[])
  if(loading)
  {
    return(
      <div>
        <Loading/>
      </div>
    )
  }
  if(tours.length==0)
  {
    return(
      <article>
        <div className='title'>
          <h2>No Tours</h2>
          <button onClick={fetchTours} className='btn'>Refresh</button>

        </div>
      </article>
    )
  }
  else{
    return(
      <div>
        <Tours tours={tours} removeTours={removeTours}/>

      </div>
    )
  }
}

export default App;
