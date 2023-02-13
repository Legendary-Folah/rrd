import { useState } from 'react'

const Login = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    return (
        <section className='section'>
            <form className='form' onSubmit={handleSubmit}>
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
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input 
                        type='email'
                        className='form-input'
                        value={email}
                        onChange={() => {}}
                    />
                </div>
                <button type='submit' className='btn btn-block'>
                    Login
                </button>
            </form>
        </section>
    )
}

export default Login;