import React from 'react'
import LoginForm from '../components/auth/LoginForm'

function Login() {
  return (
    <div className="h-screen dark:bg-dark_bg_1 felx items-center justify-center py-[19px] overflow-hidden">
      {/*Container */}
      <div className="flex w-[1600px] mx-auto h-full">
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login