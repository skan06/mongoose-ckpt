import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addContact } from '../redux/actions/contact';

const Add = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [contact, setContact] = useState({name:"",email:"",age:""});
  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  }
  const handleAdd=()=>{
    dispatch(addContact(contact));
    navigate("/")
  }
  return (
    <div className='ad'>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="write your name" onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="text" email="lastname" placeholder="Write your email" onChange={handleChange}/>
        <label htmlFor="age">Age</label>
        <input type="text" id="lname" age="age" placeholder="Write your age" onChange={handleChange}/>
        <button type="submit" value="Submit" onClick={handleAdd}>Add</button>
      </form>
    </div>
  )
}

export default Add