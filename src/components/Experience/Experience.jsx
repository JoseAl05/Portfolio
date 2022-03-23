import React from 'react';
import {Grid} from "@mui/material";
import yumbelMuni from '../../images/yumbelMuni.png';
import sonda from '../../images/sonda.png';
import "./Experience.css";



const Experience = () => {

    return(
        <>
            <section>
                <h1 className="title">Experiencia</h1>
                <Grid container>
                    <div className="content">
                        <p className="job-period">
                            Enero 2019 –Marzo 2019 – Ingeniero Informático, Ilustre Municipalidad de Yumbel – Yumbel, Región del Bio Bio.
                        </p>
                        <br/>
                        <img className="yumbel-muni-image" src={yumbelMuni} alt="yumbelMuni"/>
                        <p className="job-description">
                            Toma de requerimientos y desarrollo de sitio web para el Centro de Salud
                            Familiar y el Departamento de Salud de la Municipalidad de Yumbel,
                            cuyo objetivo es administrar y controlar las solicitudes de compra que
                            emiten los funcionarios de éste establecimiento al Departamento.
                            La aplicación web fue desarrollada con el framework Laravel basado
                            en las funciones básicas CRUD.
                        </p>
                        <h3 className="achievements-header">Logros:</h3>
                        <ul className="achievements-list">
                            <li>
                                <p>
                                    Implementar el sitio web para optimizar las solicitudes de
                                    compra de instrumentos de medicina, necesarias para el Centro de Salud
                                    Familiar.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Comunicar directamente y de manera segura al Departamento
                                    de Salud y el Centro de Salud Familiar, reemplazando a aplicación de
                                    mensajería.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Desarrollar el sitio web de manera escalable y trazable, para
                                    abarcar las distintas Postas que dependen del Centro de Salud Familiar y
                                    de la Municipalidad.
                                </p>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <br/>
                <br/>
                <br/>
                <Grid container>
                    <div className="content">
                        <p className="job-period">
                            Marzo 2021 – Agosto 2021 - Desarrollador, SONDA – Santiago, Región Metropolitana
                        </p>
                        <br/>
                        <img className="sonda-muni-image" src={sonda} alt="sonda"/>
                        <p className="job-description">
                            A cargo de proyecto de productividad de técnicos de clientes.
                            Inventariado de tickets en Excel, análisis y maquetación de datos con
                            herramienta Power Bi y optimización de procesos.
                            Mantenimiento de aplicaciones web desarrolladas con framework ASP
                            .NET MVC.
                            Participación en proyecto de migración de base de datos para cliente de
                            SONDA. Migración de procedimientos almacenados desde SQL Server
                            2008 a SQL Server 2018, optimización, mejoras y adaptación de estos a
                            la versión más reciente del motor de base de datos.
                        </p>
                        <h3 className="achievements-header">Logros:</h3>
                        <ul className="achievements-list">
                            <li>
                                <p>
                                    Optimizar la carga de datos en la base de datos de tickets de
                                    técnicos. Se implementaron Macros en base de datos Excel para
                                    automatizar la carga de información.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Solicitar información de todos los técnicos vigentes y no
                                    vigentes a todos los Jefes de Servicio, para la reestructuración de su
                                    información.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Finalizar sitio web en desarrollo para cliente, implementado
                                    con ASP .NET MVC
                                </p>
                            </li>
                            <li>
                                <p>
                                    Crear API para extraer información de base de datos para
                                    cargarlas en Power Bi.
                                </p>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </section>
        </>
    )
}

export default Experience;