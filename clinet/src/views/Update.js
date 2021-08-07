import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

import AuthorForm from '../components/AuthorForm';
import { Link } from '@reach/router';
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
 const {id}=props
    const[name,setName]=useState("")
   
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/"+id)
    
            .then(res =>{
                setName( res.data.name)
               
    
                console.log("#############",res.data.name,name)
            });
            
    }, [name])


    const update = (name) => {
        
        console.log(name)
        axios.put('http://localhost:8000/api/authors/'+id, name)
            .then(res => navigate("/")) // If successful, do something with the response. 
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                if (errorArr.length >0) {
                    
                }
                else {
                    console.log(errorArr.length)
                    ;
                }
              
                // Set Errors
                setErrors(errorArr);
            })
        console.log("#######", errors)

    }
    return (
        <>
            <Link to={"/"}>
                Home
            </Link>
            <AuthorForm initialName={name} onSubmitProp={update} errors={errors} text="update" />


        </>

    )
}
