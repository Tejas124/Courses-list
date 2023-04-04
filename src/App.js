import React, { useEffect } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./Components/Navbar";
import Filter  from "./Components/Filter";
import Cards from "./Components/Cards"
import { useState } from "react";
import {toast} from "react-toastify";
import Spinner from "./Components/Spinner";



function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try{
      
      let res = await fetch(apiUrl);
      let output = await res.json();
      
      setCourses(output.data);
      
    }
    catch(error){
      toast.error("Network Error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  



  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
      <Navbar />
      </div>
      
      <div className="bg-bgDark2">
        <div>
        <Filter filterData={filterData}
                category={category}
                setCategory={setCategory}
        />
        </div>
        
        <div className="w-11/12 max-w-[1000px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/> )
          }
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
