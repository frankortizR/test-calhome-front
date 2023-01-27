import axios from 'axios'

// axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.get('accessToken')}`;

const axiosAdminRoutes = axios.create({
    baseURL: 'https://calhome-api-v1.vercel.app/api/v1/admins',
    headers: {
        // 'Content-Type': 'applicaiton/json',
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZGE5ZDVkNy05ZjgwLTRiYzQtOTA0OS02ZGViZGI5NDE5MzYiLCJpYXQiOjE2Njk4MzM1NDksImV4cCI6MTY2OTg0MDc0OX0.ptyIbarL-XIWOYRP1guHV09M9b57FiXFghJVJjuMrUI'
    }
})




export  {axiosAdminRoutes}