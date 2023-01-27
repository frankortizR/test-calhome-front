import React from 'react'
import NavbarComponent from './NavbarComponent'


//    ----    LAYOUT WITHOUT USEEFFECT HOOK TO REFRESH TOKEN

export default function Layout({ children }) {
    return (
        <div>
            <NavbarComponent />
            <main>
                {children}
            </main>
        </div>
    )
}