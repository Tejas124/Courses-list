import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';
 

function Card(props){
    let course = props.course;  
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setlikedCourses;
    

    function clickHandler(){
        //logic for adding toast -> check whether course is liked or not
        
        if(likedCourses.includes(course.id)){
            //Course is already liked 
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else{
            //course is not liked initially 
            //insert the course id in likedcourses
            if(likedCourses === 0) {
                setLikedCourses([course.id]);
            }
            else{
                //non-empty pehle se
                setLikedCourses( (prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
        <div className='relative '>
            <img src={course.image.url}></img>

            <div className='w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-0 
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ?
                        (<FcLike fontSize = "1.75rem"/>):
                        (<FcLikePlaceholder fontSize = "1.75rem"/>)
                    }
                </button>
            </div>
        </div>

        

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>
            {
                course.description.length > 100 ? (`${course.description.substr(0,100)}...`) : (course.description)
            }
            </p>
        </div>


    </div>
  )
}

export default Card
