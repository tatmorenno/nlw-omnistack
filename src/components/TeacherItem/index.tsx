import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/23190643?s=460&u=7ee8575090545bf843fe138ef2f37ad0fb277697&v=4" alt="Tatiana Moreno"/>
        <div>
            <strong>Tatiana Moreno</strong>
            <span>Programação</span>
        </div>
        </header>
        <p>
        Sou apaixonada por ensinar!
        <br/><br/>
        Quebro a maldição do "Hello World" com apenas uma linha de código. Se você não aprender comigo, aprenderá com mais ninguém.
        </p>
        <footer>
            <p>
            Preço/hora
              <strong>R$ 80,00</strong>  
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;