import React, {useEffect} from 'react'
import axios from 'axios'
function Register() {
    useEffect(()=>{
        axios.get('/api/register').then(res => console.log(res.data))
      },[])
    return (
        <div>
            Register
        </div>
    )
}

export default Register
