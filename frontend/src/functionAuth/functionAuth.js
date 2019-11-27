// @github_bosheca
import axios  from "axios"
// Build connection function between frontend and backend
// Register
export const register = (newuser)=>{
    return axios.post('http://localhost:5100/users/register' ,newuser )
    .then(res => {
        // console.log(res.data);
        if(res.data.confirmed){
            console.log("registerd ! ")
            return true
        }
        return false
        
    })
    .catch(err => console.log(err))
}
// login 
export const login = (user)=>{
    return axios.post('http://localhost:5100/users/login' , user)
    .then(token =>{
            console.log(token)
        localStorage.setItem('usertoken' , token.data) // localStorage in the browser
    })
    .catch(err=>console.log(err))
}
// logout
export const logout = (user)=>{
    return axios.post('http://localhost:5100/users/logout' , user)
    .then(token =>{
            console.log(token)
        localStorage.removeItem('usertoken') // localStorage in the browser
    })
    .catch(err=>console.log(err))
}