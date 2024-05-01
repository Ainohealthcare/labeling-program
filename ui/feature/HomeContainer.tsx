'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { userStore } from '../utility/userStore'

export const HomeContainer = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = userStore()
    const router = useRouter()

    const onClick = () => {
        if (id === 'admin' && password === 'TKv9EF4iEhZ5xgg') {
            setUser({
                id: id,
                password: password,
            })

            router.push('/images/1')
        }
    }

    return (
        <>
            <input
                type='text'
                placeholder='Enter Id'
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type='submit'
                onClick={onClick}
            >
        Login
            </button>
        </>
    )
}
