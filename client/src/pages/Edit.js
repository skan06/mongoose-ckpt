import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editContact, getOne } from '../redux/actions/contact';

const Edit = () => {
  const dispatch=useDispatch();
  const params=useParams();
  const navigate=useNavigate();
  const [contact, setContact] = useState({name:"",email:"",age:""});
  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  }
  useEffect(() => {
    dispatch(getOne(params.id))
  }, [dispatch,params.id])
  const load=useSelector(state=>state.contactReducer.load);
  const contactToGet=useSelector(state=>state.contactReducer.contactToGet)
  const handleEdit=()=>{
    dispatch(editContact(params.id,contact))
    navigate("/")
  }
  return (
    <div>
      <h3>Profil</h3>
      {load?<p>loaaaading</p>
      : <div>
        <h4>name:{contactToGet.name}</h4>
        <h4>email:{contactToGet.email}</h4>
        <h4>age:{contactToGet.age}</h4>
        </div>}
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder={`${contactToGet.name}`} onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder={`${contactToGet.email}`} onChange={handleChange}/>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" placeholder={`${contactToGet.age}`} onChange={handleChange}/>
        <button onClick={handleEdit}>Edit</button>
      </form>
    </div>
  )
}

export default Edit