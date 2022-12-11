import React, { useState } from "react";
import { submitPost } from "../api/auth";

const cohort = '2211-ftb-et-web-ft';


const PostForm = (token, posts, setPosts) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [deliver, setDeliver] = useState(false);
    
    const handleSubmit = (event) => {
      event.preventDefault(); //Stop it from disappearing immediately
      submitPost(
        title,
        desc,
        price,
        location,
        deliver,
        token);
      console.log(
        "title: " + title, 
        "description: " + desc, 
        "price: " + price, 
        "location: " + location, 
        "delivery: " + deliver); //Show me what was typed
      setTitle(''); //clear the username after it's submitted
      setDesc(''); //clear password after submission (Note: if no value assigned below then password stays)
      setPrice('');
      setLocation('');
      setDeliver(false);
    };

    return (
      <div id='submit-form-container'>
        <form className="submitForm" onSubmit={handleSubmit}>
          <label className="postLabel" htmlFor='title'>Item Name:</label>
          <input className="input" type='text' name='title' value={title} onChange={(event) => setTitle(event.target.value)} />
          <br/>
          {/* We are aware that <br/> is bad practice but due to time constraints this is the most convenient option. */}
          <label className="postLabel" htmlFor='desc'>Description:</label>
          <input className="input" type='text' name='description' value={desc} onChange={(event) => setDesc(event.target.value)}/>
          <br/>
          <label className="postLabel" htmlFor='price'>Price:</label>
          <br/>
          <input className="input" type='text' name='price' value={price} onChange={(event) => setPrice(event.target.value)}/>
          <br/>
          <label className="postLabel" htmlFor='price'>Location (Optional):</label>
          <input className="input" type='text' name='location' value={location} onChange={(event) => setLocation(event.target.value)}/>
          <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }



  export default PostForm