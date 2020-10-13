import React, {useEffect} from 'react'
import axios from 'axios'

function Login() {
    useEffect(()=>{
        axios.get('/api/login').then(res => console.log(res.data))
      },[])

      
    return (
        <div>
            Login
        </div>
    )
}

export default Login
