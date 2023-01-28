import { NextResponse } from "next/server";
import { axiosAdminRoutes } from "./config/axios";

export async function middleware(request, response) {

    // if (request.nextUrl.pathname.includes('/profile')) {
    console.log('validating')

    let refreshTokenCookie = request.cookies.get('refreshToken')
    request.cookies.delete('refreshToken')

    // console.log(refreshTokenCookie)
    console.log(request.cookies)
    const url = "https://calhome-api-v1.vercel.app/api/v1/admins/refresh"
    // try {
    //     const url = "https://calhome-api-v1.vercel.app/api/v1/admins/refresh"
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         credentials: "include",

    //     })
    //     console.log(response)
    //     let resj = await response.json()
    //     console.log(resj)
    // } catch (error) {
    //     console.log(error)
    // }

    fetch(url, {credentials: 'include', method: 'GET', mode: 'cors'})
        .then((response) => response.json())
        .then((data) => console.log(data));

   


    // console.log(request.cookies)

    // // ----- VALIDATING IF IS LOG OR REGISTER AND TOKEN SETTED TO SEND BACK TO HOME
    // if (request.nextUrl.pathname.includes('/login') && refreshTokenCookie != undefined) return NextResponse.redirect(new URL('/', request.url))
    // if (request.nextUrl.pathname.includes('/register') && refreshTokenCookie != undefined) return NextResponse.redirect(new URL('/', request.url))

    // // ------VALIDATING IF IS LOG OR REGISTER AND NO TOKEN TO LET GO THROUGH
    // if (request.nextUrl.pathname.includes('/login') && refreshTokenCookie == undefined) return NextResponse.next()
    // if (request.nextUrl.pathname.includes('/register') && refreshTokenCookie == undefined) return NextResponse.next()

    // // ------VALIDATING IF IS AL THE OTHER ROUTES AND NO TOKEN TO SEND TO ERROR PAGE
    // if (refreshTokenCookie == undefined) return NextResponse.redirect(new URL('/err', request.url))


    // console.log('refres token: ' + refreshTokenCookie.value)

    // try {
    //     let url = 'https://city-pet.fly.dev/api/v1/auth/refresh'

    //     // AWAIT SYSTEM -------- REMEMBER ASYNC

    //     // const response = await fetch(url, {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     //     body: JSON.stringify({
    //     //         refreshToken: refreshTokenCookie.value
    //     //     }),
    //     // })
    //     // let resj = await response.json()
    //     // console.log('from middleware response: ' + resj.data.refreshToken)
    //     // cookie.set('refreshToken', resj.data.refreshToken)
    //     // cookie.set('asshole', 'assada')
    //     // refreshTokenCookie = await cookie.get('refreshToken')
    //     // console.log('refresh token 2: ' + refreshTokenCookie.value)
    //     // NextResponse.next()
    // } catch (error) {
    //     console.log("error: " + error)
    // }
    // }  //   End of if for individual route

    return NextResponse.next()
}


export const config = {
    matcher: ['/admin-profile', '/login', '/register', '/pet-license-registration', '/admin/:path*']
}