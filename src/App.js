import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Navbar from "./Navbar";
import Contact from "./Contact";
import './App.css'
import About from "./About"
import { Routes, Route  } from "react-router-dom";
const url = "http://localhost:2019/tours";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>hello new redings
          </h2>
          <button className="btn" onClick={() => fetchTours()}>
           check on it
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
       <Navbar />
     <Routes>
     <Route exact path="/" element={ <Tours tours={tours} removeTour={removeTour} />} />


     <Route exact path="/about" element={<About/>} />
     
     
     <Route exact path="/contact" element={<Contact/>} />
    

     </Routes>
    
    </main>
  );
}

export default App;
