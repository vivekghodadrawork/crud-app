import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './user.css'
import toast from "react-hot-toast";
import axios from "axios";

const User = () => {


    const [users , setUsers] = useState([]);

    useEffect(() => {
const fetchData = async() =>  {
         const response =   await axios.get("http://localhost:2060/api/getall");

        // console.log("dhara---"+ response + "---"+ response.data);
         setUsers(response.data);
        }
fetchData();
    },[])



    const deleteUser = async(userId) =>
    {



        console.log('chek------'+userId +";;;;"+'http://localhost:2060/api/delete/${userId}'
        )
        await axios.delete('http://localhost:2060/api/delete/'+userId)
        .then((response) => {
console.log(response);

setUsers((preUser) => preUser.filter((user) => user._id !== userId))
toast.success("delete,.....",{position:'top-right'});

        }).catch( (error)=>
        {
            console.log(error.response.data);
        })
    }

return (

   <div className="userTable">
    
    <Link to = {"/add"} className="addbutton">Add Userk</Link>

    <table border={1} cellPadding={85} cellSpacing={5}>
<thead>


    <tr>
        <th> sr.no        </th>
        <th> Name        </th>
        <th> Email        </th>
        <th> Action     </th>
    </tr>
    </thead>
    <tbody>
        {
            users.map((user,index) =>{
               return(
  
               <tr key={user._id}>
                <td>
                    {index + 1}
                </td>
                <td>
                    {user.fname} {user.lname}
                </td>
                <td>{user.email}</td>
                <td className="actionbutton" >
                    <button onClick={() => deleteUser(user._id)} className="fa fa-trash" aria-hidden="true"></button>
                    <Link to = {'/edit/'+user._id}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                </td>
                {/* <td className="actionbutton"></td> */}
                    </tr>
               ) 
            })
        }
  
  {/* <tr>
<td>
    1.
</td>
<td>
    dhara
</td>
<td>dhara</td>

    <button  className="fa fa-trash" aria-hidden="true"></button>
    <Link to = {'/edit'}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
</td>

    </tr> */}
    </tbody>
    </table>


    
    </div> 
)

}

export default User