import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';


function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/24925816?s=460&u=df080e98a2d7cfcc6d3013bcedcba40b74e036be&v=4" alt="Lucas Carrias"/>
                        <div>
                            <strong>Lucas Carrias</strong>
                            <span>Python</span>
                        </div>
                    </header>

                    <p>
                        Aluno de Análise e Desenvolvimento de Sistemas.
                        <br/><br/>
                        Apaixonado por invertar coisas aleatórias e tentar automatizar tudo (que é chato) na vida. Meu foco é em web scrapping, hacking e desenvolvimento web;

                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 40.00</strong>
                        </p>

                        <button type="button">
                        <img src={whatsappIcon} alt="WhatsApp"/>
                        Entrar em contato
                    </button>
                    </footer>                    

                </article>
    );
}

export default TeacherItem;