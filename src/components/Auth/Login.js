import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Login.css';

export default function Login ({ setToken }) {
    const [secret, setSecret] = useState();
    const navigate = useNavigate();
    
    const handleSubmit = e => {
        e.preventDefault();
        const token = secret;
        setToken(token).then(() => {
            navigate("/");
        })
    }

    return(
      <div className="login-wrapper">
        <img src="../../../public/sus.png" alt=""></img>
        <h1>Gimme y'er secret, pal!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Secret</p>
            <input type="secret" onChange={e => setSecret(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}