import { useState } from 'react'

const Login = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    return (
        <div>Log In</div>
    )
}

export default Login;