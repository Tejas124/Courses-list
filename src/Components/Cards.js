import React from 'react'
import Card from './Card'
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    let allCourses = [];
    // console.log(courses);

    const [likedCourses, setLikedCourses] = useState([]); // initially all courses are not liked

    
        //returns you a list of all courses received from api response
        function getCourses() {
            if(category == "All"){
                Object.values(courses).forEach( (array) => {
                    array.forEach( (course) => {
                        allCourses.push(course);
                    })
                })
                return allCourses;
            } 
            else{
                return courses[category];
            }
        }
    
    
    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {   
        getCourses().map((course) => (
            
                <Card key={course.id} 
                    course={course} 
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses}/>
            
            
         ) )
    }
        
    </div>
  )
}

export default Cards;
