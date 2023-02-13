import { useState } from 'react'

const Login = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    return (
        <section className='section'>
            <form className='form'>
                <h3>Login</h3>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input 
                        type='text'
                        className='form-input'
                        value={name}
                        onChange={() => {}}
                    />
                </div>
            </form>
        </section>
    )
}

export default Login;