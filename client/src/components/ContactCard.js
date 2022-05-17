import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteContact} from '../redux/actions/contact'
import {Link} from 'react-router-dom'

const ContactCard = ({list}) => {
    let dispatch=useDispatch()
  return (
    <div>
        <div className="cardd">
  
  <div className="container">
    <h4><b>Name:{list.name}</b></h4>
    <h5>Age:{list.age}</h5>
    <p>Email:{list.email}</p>
    <button className='btn' onClick={()=>dispatch(deleteContact(list._id))}>Delete</button>
    <Link to={`/edit/${list._id}`}><button className='btnn'>Edit</button></Link>
  </div>
</div>
    </div>
  )
}

export default ContactCard