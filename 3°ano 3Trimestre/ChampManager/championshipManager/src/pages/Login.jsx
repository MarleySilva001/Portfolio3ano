import React from 'react';
import styles from '../styles/login.module.css'
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className={styles.body}>
                
                <div className={styles.container}>
                    <p className={styles.titulo}>Login</p>
                    <LoginForm />
                    <p className={styles.temCadastro}>Não tem uma conta? <Link to={'/cadastro'}>Cadastre-se</Link></p>
                </div>
            </div>
        </>
    )
}
export default Login;