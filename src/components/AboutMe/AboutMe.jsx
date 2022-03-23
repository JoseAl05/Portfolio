import React from "react";
import {Grid} from "@mui/material";
import './AboutMe.css';



const AboutMe = () =>{
    return(
        <>
            <section className="about-me">
                <Grid container>
                    <p> Ingeniero Informático con
                        capacidad para desarrollar páginas
                        web con distintas herramientas
                        front-end y backend.
                        Conocimientos en base de datos
                        relacionales, MySQL, SQL Server
                        y PostgreSQL. Conocimientos en
                        Ingeniería de Software,
                        metodologías, modelado y
                        captura, especificación y
                        validación de requerimientos.
                        Manejo de GitHub como plataforma de
                        control de versiones.
                    </p>
                </Grid>
            </section>
        </>
    )
}

export default AboutMe;