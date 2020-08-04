import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import "./styles.css";


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Matéria</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/24925816?s=460&u=df080e98a2d7cfcc6d3013bcedcba40b74e036be&v=4" alt="Lucas Carrias"/>
                        <div>
                            <strong>Lucas Carrias</strong>
                            <span>Python</span>
                        </div>
                    </header>

                    <p>
                        Aluno de Análise e Desenvolvimento de Sistemas.abs
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
            </main>
        </div>  
    )
}

export default TeacherList;