import React from 'react'
import { useState } from 'react'
import '../index.css'
import { Button } from "@/components/ui/button";

export default function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.toUpperCase(), password)
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <div className='box'>
                <label htmlFor='username'>Username</label>
                <input className='border rounded-sm' name='username' type="text" value={username.toUpperCase()} onChange={(e) => setUsername(e.target.value.toUpperCase())} />
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input className='border rounded-sm' name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value) } />
            </div>    

            <Button 
                type='submit'
            >
                Kirim
            </Button>
        </form>
    )
}

