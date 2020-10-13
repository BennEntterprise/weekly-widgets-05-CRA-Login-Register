import React, {useEffect} from 'react'
import axios from 'axios'


function Dashboard() {
    useEffect(()=>{
        axios.get('/api/dashboard').then(res => console.log(res.data))
      },[])
    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard