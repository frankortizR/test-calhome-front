import axios from 'axios'
axios.defaults.withCredentials = true

const baseURL = "https://calhome-api-v1.vercel.app/api/v1/admins"
// const baseURL = "http://localhost:3300/api/v1/admins"

const axiosAdminRoutes = axios.create({
    baseURL: baseURL,
    withCredentials: true,
 
})




export  {axiosAdminRoutes}