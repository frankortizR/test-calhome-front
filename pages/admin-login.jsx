import React, {useState} from 'react'
import Layout from '@/components/layout'
import { useRouter } from 'next/router'
import { axiosAdminRoutes } from '@/config/axios.js'
import { useDispatch, useSelector } from 'react-redux'
import { setAccessToken } from '@/slices/authSlices'

export default function AdminLogin() {


  let loggedState = useSelector(state => state.auth.value)

  const authDispatch = useDispatch()

    let router = useRouter()
    const [credentials, setCredentials] = useState({
        email: 'admintest3@gmail.com',
        password: 'zxcasd'
    })


    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(credentials)
        let accessToken = ''
        let response = ''
        try {
            response = await axiosAdminRoutes.post('/login-admin', credentials)
            console.log(response)
            console.log(response.data.token)
            accessToken = response.data.token

            // SAVING ACCESSTOKEN AT STORE WITH REDUX TOOLKIT
            authDispatch(setAccessToken(accessToken))

            // SETTING LOGGED STAET FROM REDUX TOOLKIT
            // authDispatch(setLoggedStateTrue())

            //   ---- REDIRECTING TO PROFILE
            //        PROVISIONAL SYSTEM TO RELOAD AND MIDDLEWARE TO DETECT COOKIES

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <Layout>
            <div className='bg-black flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-white py-4'>LoginPage</h1>
                <form onSubmit={handleSubmit} className='text-white p-4 flex flex-col justify-center items-center gap-4'>
                    <input className='text-black' name='email' type="text" placeholder='email' onChange={handleChange} />
                    <input className='text-black' name='password' type="password" placeholder='password' onChange={handleChange} />
                    <button className='bg-green-500 min-w-[200px] rounded-md'>Login</button>
                </form>
            </div>
        </Layout>
    )
}
