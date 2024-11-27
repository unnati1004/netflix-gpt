import React from 'react'
import Header from './Header'

 const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg' />
      </div>
      <form className='relative' >
        <input type='text' placeholder='Email Address' className='p-2 m-2' />
        <input type='Password' placeholder='Password' className='p-2 m-2' />
        <button className='p-4'>SignIn</button>
      </form>
    </div>
  )
}

export default Login;