import axios from 'axios';

let loginService = {
    loginRequest(email,password){
        return axios.post('http://localhost:5000/authenticateUser',{
            email,
            password
        })
    }
}