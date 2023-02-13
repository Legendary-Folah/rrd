import { useState } from 'react'

const Login = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    return (
        <section className='section'>
            <form className='form'>
                <h3>Login</h3>
            </form>
        </section>
    )
}

export default Login;