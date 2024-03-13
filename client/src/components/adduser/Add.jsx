import React, { useState } from 'react'
import './add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


const Add = () => {

  const users = {
    fname :"",
    lname : "",
    email : "",
    password : ""
  }

  const [user , setUser] = useState();
  const navigate = useNavigate();
  

  const inputHandler = (e) =>{
    const {name,value} = e.target;
     setUser({...user,[name]:value});
   //console.log(name);
    }



    const submitForm = async(e) =>
    {
      e.preventDefault();
      await axios.post("http://localhost:2060/api/create",user).
      then((response) => {
        console.log("-----");
        console.log(response);
        toast.success("insert sucess" , {position:"top-right"})
        navigate("/");
      }

      ).catch(error =>console.log(error.response.data))
    }

  return (

    <div className='addUSer'>
        <Link to={"/"}>Back</Link>
        <h3 className='h'>Add User </h3>
        <form className='adduserform' onSubmit={submitForm}>
            <div className="inputGroup">
            <label >Fname</label>
            <input type="text" id="fname"  name="fname" onChange={inputHandler} placeholder='eneter your name'/>
            </div>

            <div className="inputGroup">
            <label >Lname</label>
            <input type="text" id="lname" name='lname' onChange={inputHandler} placeholder='eneter your lastname'/>
            </div>

            <div className="inputGroup">
            <label >Email</label>
            <input type="text" id="email" name="email" onChange={inputHandler} placeholder='eneter your mail'/>
            </div>

            <div className="inputGroup">
            <label >Password</label>
            <input type="password" id="password" name="password" onChange={inputHandler} placeholder='eneter your password'/>
            </div>

            <div className="inputGroup">
           
            <button type="submit"> Add User </button>
            </div>
        </form>
      
    </div>
  )
}

export default Add
