import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
  useEffect(() => {
    axios.get('/api/home').then((res) => console.log(res.data))
  }, [])
  return (
    <div>
      You should get our awesome product. Either{' '}
      <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link> if
      you already have an account.
    </div>
  )
}

export default Home
