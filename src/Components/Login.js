import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')  

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email);
        if (!name || !email) return;
        setUser({ name:name, email:email });
        navigate('/dashboard');
    }

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
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
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
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
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