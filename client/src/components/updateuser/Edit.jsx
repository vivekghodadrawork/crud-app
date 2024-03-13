import React, { useEffect, useState } from 'react'
import './edit.css'
import axios from 'axios'
import { Link, useParams ,useNavigate, Navigate} from 'react-router-dom'
import toast from 'react-hot-toast'


const Edit = () => {

  const users = {
    fname: "",
    lname: "",
    email: ""}


  const {id} = useParams();
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const {name,value} = e.target;
   // console.log("-caalll---"+name + "-pppppppppppp-"+e.target.value);
    setUser({...user, [e.target.name]: e.target.value});
   // console.log("-pppppppppppppp---"+name + "--"+value);
  }



  useEffect(() => {
    console.log("----"+'http://localhost:2060/api/getone/'+id);
    axios.get('http://localhost:2060/api/getone/'+id).
    then((response) =>
     { 
      
     // console.log("responsee-effect--" +response.data);
      setUser(response.data) }).
    catch((error) =>
     console.log(error.data));
    // console.log("responsee-errir--" );
  }, [id])


  const submitForm = async(e) =>
  {
    e.preventDefault();
    await axios.put('http://localhost:2060/api/update/'+id,user).
    then((response) => {
      console.log("-----");
      console.log(response.data);
      toast.success("updatek sucess" , {position:"top-right"})
      navigate("/");
    //  Navigate("/");
    }

    ).catch(error =>console.log(error.response.data))
  }


  return (
    <div className='addUSer'>
      <Link to={"/"}>Back</Link>
      <h3 className='h'>Edit User </h3>
      <form className='adduserform' onSubmit={submitForm}>
        <div className="inputGroup">
          <label >Fname </label>
          <input type="text"  value={user.fname}  name= "fname" id="fname" onChange={inputChangeHandler} placeholder='eneter your name' />
        </div>

        <div className="inputGroup">
          <label >Lname</label>
          <input type="text" id="lname"  name= "lname"  value ={user.lname} onChange={inputChangeHandler} placeholder='eneter your lastname' />
        </div>

        <div className="inputGroup">
          <label >Email</label>
          <input type="text" id="email" name= "email" value={user.email} onChange={inputChangeHandler} placeholder='eneter your mail' />
        </div>

        {/* <div className="inputGroup">
          <label >Password</label>
          <input type="password" id="pass" value={user.passworf} onChange={inputChangeHandle} placeholder='eneter your password' />
        </div> */}

        <div className="inputGroup">

          <button type="submit"> Edit User </button>
        </div>
      </form>

    </div>
  )
}

export default Edit
