import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy logic for now. You can validate against backend later.
        if (email === 'user@example.com' && password === '1234') {
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="ui middle aligned center aligned grid" style={{ maxWidth: '300px', margin: 'auto', marginTop: '100px' }}>
            <h2>Login</h2>
            <form className="ui large form" onSubmit={handleLogin}>
                <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /></div>
                <br /><br />
                <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /></div>
                <br /><br />
                <button className='ui fluid large blue submit button' type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
