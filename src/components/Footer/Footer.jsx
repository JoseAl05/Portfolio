import React from "react";
import title from "../../documents/Title.pdf";
import cv from "../../documents/CV.pdf";
import {FaGithub,FaLinkedin,FaStackOverflow,FaPhone} from 'react-icons/fa';
import {SiGmail} from "react-icons/si";
import "./Footer.css";


const Footer = () =>{

    return(
        <>
            <section>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-row">
                            <div className="footer-col">
                                <h4>Sobre Mi</h4>
                                <ul>
                                    <li><a href={cv} target="_blank" rel="noreferrer">Curriculum Vitae</a></li>
                                    <li><a href={title} target="_blank" rel="noreferrer">Certificado de Titulo</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Redes y Contacto</h4>
                                <div className="social-links">
                                    <p> (569) 62141439</p>
                                    <a href="#" className="phone-number"><FaPhone/></a>
                                    <a href="mailto: jparancibialinker@gmail.com" target='_blank' rel="noreferrer"><SiGmail/></a>
                                    <a href="https://www.linkedin.com/in/jos%C3%A9-pablo-arancibia-linker-340704177/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
                                    <a href="https://github.com/JoseAl05" target='_blank' rel="noreferrer"><FaGithub/></a>
                                    <a href="https://stackoverflow.com/users/11086537/jose-pablo-arancibia-linker" target='_blank' rel="noreferrer"><FaStackOverflow/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
};

export default Footer;