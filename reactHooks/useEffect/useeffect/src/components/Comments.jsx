import React,{useState, useEffect} from "react";

const Comments = ()=>{
    const [resourceType, setResourceType] = useState('posts');
    console.log('render');
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
    },[resourceType]);

    return(
        <>
        <div>
            <button onClick={()=>{setResourceType('posts')}}><h1>Posts</h1></button>
            <button onClick={()=>{setResourceType('users')}}><h1>Users</h1></button>
            <button onClick={()=>{setResourceType('comments')}}><h1>Comments</h1></button>
        </div>
        <h1>{resourceType}</h1>
        </>
        
    )

}


export default Comments;