import React,{ Component } from 'react'
import './../Style/login.css'

class Login extends Component {
    render(){
        return(
            <div className='flex-container'>
                UserName: <input type='text'/>
                Password: <input type='text'/>
                <button>Login</button>
            </div>
        )
    }
}

export default Login