import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'

import api from "../../services/api" 

import './styles.css';

import heroesImg from '../../assets/heroes.png'; 
import logoImg from "../../assets/logo.svg"

export default function Logon (){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin (e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        }catch(err){
            alert('Falha no login, tente novamente');

    }

    return(
    <div className = "logo-container">
        <section className = "form">
        <img src={logoImg} alt="Be the Hero"/>
        <form onSubmit={handleLogin}>
            <h1>Faça o seu logon</h1>

            <input 
            placeholder="Sua ID" 
            value={id}
            onChange={e => setId(e.target.value)}
            />
            
            <button className = "button" type="submit">Entrar</button>

            <FiLogIn size={16} color="#E02041"/>
            <Link to="/register">
                Não tenho cadastro
            </Link>
            </form>
        </section>
        
        <img src={heroesImg} alt="Heroes in Action"/>
    </div>
    );
}