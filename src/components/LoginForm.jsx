import React from 'react'

export default function LoginForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.elements.password.value, event.target.elements.username.value);
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </div>

        <button type='submit'>Kirim</button>
    </form>
  )
}

