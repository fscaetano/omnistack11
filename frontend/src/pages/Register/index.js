import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

// styles
import './styles.css';

// images
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = { name, email, phone, city, state };

        try
        {
            const response = await api.post('ngos', data);

            alert(`Your access ID is ${response.data.id}`);
            history.push('/');
        }
        catch(err) {
            alert(`Something went wrong: ${err}`);
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Form</h1>
                    <p>Fill the form, enter the platform and help people to find the cases of your NGO.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Back to Home.
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="NGO's name" 
                        value={name} 
                        onChange={e => setName(e.target.value) } 
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={e => setEmail(e.target.value) } 
                    />
                    <input 
                        placeholder="Phone" 
                        value={phone} 
                        onChange={e => setPhone(e.target.value) } 
                    />

                    <div className="input-group">
                        <input 
                            placeholder="City" 
                            value={city} 
                            onChange={e => setCity(e.target.value) } 
                        />
                        <input 
                            placeholder="State/Province" 
                            style={{ width: 80 }} 
                            value={state} 
                            onChange={e => setState(e.target.value) } 
                        />
                    </div>
                    
                    <button className="button" type="submit">Send</button>

                </form>
            </div>
        </div>
    );
}