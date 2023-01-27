import React, { useRef, useEffect } from 'react'
import Link from 'next/link'

export default function NavbarComponent() {

    return (
        <nav className='bg-cyan-700 flex justify-between items-center px-10 h-[60px]
                    text-2xl text-white '>
            <h2>City Pet App</h2>
            <ul className='flex justify-center items-center gap-5'>
                <li><Link href='/' >Home</Link></li>
                <li><Link href='/register' >Register</Link></li>
                <li><Link href='/login'>Login</Link></li>
                <li><Link href='/pet-license-registration'>Register-Pet</Link></li>
                <li><Link href='/register-veterinarian'>Register-Vet</Link></li>
                <li><Link href='/profile' >Profile</Link></li>
                <li><Link href='/vet-list' >Vets</Link></li>
            </ul>
        </nav>
    )
}