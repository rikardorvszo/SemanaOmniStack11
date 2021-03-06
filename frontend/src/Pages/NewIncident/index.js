import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImg from "../../assets/logo.svg" 

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch(err){
            alert('Errrrrrouuuuuuuuu')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva detalhadamente seu caso para que um herói possa te ajudar</p>

                
                <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041"/>
                   Voltar para início
                </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <imput 
                    placeholder="Título do caso" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />

                    <imput 
                    placeholder="Descrição" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />

                    <imput 
                    placeholder="Valor (R$)" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>

    );
}