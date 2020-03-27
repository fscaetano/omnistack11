import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
// styles
import './styles.css';

// images
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ngoId = localStorage.getItem('ngoId');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, { 
                headers: {
                    Authorization: ngoId,
                }
            });

            history.push('/profile');
        }
        catch (err) {
            alert('Failed to create incident.');
        }

    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Post a new case</h1>
                    <p>Describe the new case as detailed as possible to find a hero to resolve.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Back to Home.
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Case title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                    <input 
                        placeholder="Value"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                    
                    <button className="button" type="submit">Send</button>

                </form>
            </div>
        </div>
    );
}