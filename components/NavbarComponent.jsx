import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { axiosAdminRoutes } from '@/config/axios'
import { getReqCookie } from '@/middleware'

export default function NavbarComponent() {

    const handleLogut = async () => {
        try {
            let response = await axiosAdminRoutes.post('/logout')
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className='bg-teal-800 flex justify-between items-center px-10 h-[60px]
                    text-2xl text-white '>
            <h2>CalHome Program</h2>
            <ul className='flex justify-center items-center gap-5'>
                <li><Link href='/' >Home</Link></li>
                <li><Link href='/admin-login'>Login</Link></li>
                <li><Link href='/admin-profile'>Profile</Link></li>
                <li><button onClick={handleLogut}>Log out</button></li>
            </ul>
        </nav>
    )
}