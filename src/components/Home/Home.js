import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PostCollection from '../PostCollection/PostCollection';

const Home = () => {
    const [post , setPost] = useState([])
   useEffect( () =>{
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json())
   .then(data =>setPost(data))
   
   },[])
    return (
        <div>
           {
                post.map(post =><PostCollection post ={post}></PostCollection>)
            } 
        </div>
    );
};

export default Home;