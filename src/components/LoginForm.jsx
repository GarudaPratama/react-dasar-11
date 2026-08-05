import React from 'react'
import { useState } from 'react'

export default function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.toUpperCase(), password)
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input name='username' type="text" value={username.toUpperCase()} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>    

            <button 
                style={{display:' block'}}
                type='submit'
            >
                Kirim
            </button>
        </form>
    )
}

