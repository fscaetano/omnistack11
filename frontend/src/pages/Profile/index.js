import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api'
// styles
import './styles.css';

// images
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ngoName = localStorage.getItem('ngoName');
    const ngoId = localStorage.getItem('ngoId');

    useEffect(() => {
        api.get('profile', { 
            headers: {
                Authorization: ngoId,
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ngoId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, { 
                headers: {
                    Authorization: ngoId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id))
        }
        catch (err) {
            alert('Failed to delete incident.');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome, {ngoName}</span>

                <Link className="button" to="/incidents/new">Add new case</Link>
                <button type="button">
                    <FiLogOut size={18} color="#E02041"></FiLogOut>

                </button>
            </header>

            <h1>Cases:</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Case:</strong>
                        <p>{incident.title}</p>
                        
                        <strong>Description:</strong>
                        <p>{incident.description}</p>
                        
                        <strong>Value:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                        
                        <button onClick={() => {handleDeleteIncident(incident.id)}} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>                    
                    </li>
                ))}
            </ul>
        </div>
    );
}