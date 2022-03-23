import React,{useState,lazy,Suspense} from "react";
import { useTransition,animated } from "react-spring";
import {FaArrowDown,FaArrowRight} from 'react-icons/fa';
import {Grid} from "@mui/material";
import f1Project from "../../images/f1_info.png";
import djangoProject from "../../images/project_django.png";
import iraceProject from "../../images/cranLogo.png";
import iraceDoc from "../../documents/IraceDoc.pdf";
import ingSoftDoc from "../../documents/IngSoftDoc.pdf";
import "./Projects.css";
import CustomContentLoader from "../ContentLoader/CustomContentLoader";

const Card = lazy(() => import("@mui/material/Card"));
const CardHeader = lazy(() => import("@mui/material/CardHeader"));
const CardMedia = lazy(() => import("@mui/material/CardMedia"));
const CardContent = lazy(() => import("@mui/material/CardContent"));


const Projects = () =>{

    const [isVisibleProjects,setIsVisibleProjects] = useState(false);

    const transitionProjects = useTransition(isVisibleProjects,{
        from:{x: 0, y: 100, opacity: 0},
        enter:{x: 0, y: -10, opacity: 1},
        leave:{x: 0, y: 100, opacity: 0},
    })


    return(
        <>
            <section className="projects">
                <Grid container>
                    <Grid item xs={12}>
                            <button onClick={() => {
                                setIsVisibleProjects(v => !v);
                            }}>
                                <span className="projects-header">{isVisibleProjects ? 'Ocultar' : 'Proyectos'}&nbsp;&nbsp;<button className={isVisibleProjects ? 'rotate-arrow-up':'rotate-arrow-down'}><FaArrowDown className="arrow-icon" color="#000000" size={50}/></button></span>
                            </button>
                                {transitionProjects((style,item) =>
                                    item ?
                                    <animated.div style={style}>
                                        <div className="projects-grid">
                                            <Suspense fallback={<CustomContentLoader/>}>
                                                <Card sx={{ maxWidth: 300,maxHeight:700,overflowY: 'auto'}}>
                                                    <CardHeader
                                                        title="Proyecto F1 Info"
                                                        sx={{background:'#e10600',color:'#ffff'}}
                                                    />
                                                    <CardMedia
                                                        component="img"
                                                        image={f1Project}
                                                        alt="f1Project"
                                                        sx={{height:300,objectFit:"scale-down"}}
                                                    />
                                                    <CardContent>
                                                        <p>
                                                            Este proyecto está desarrollado como parte del autoaprendizaje de la libreria ReactJS.
                                                            Está desarrollado con <b>React, Create React App, Css</b> como parte del FrontEnd y
                                                            <b> NodeJs, Express, Sequelize y MySQL</b> en el BackEnd.
                                                            Para el testing de las request se utilizo <b>Postman.</b>
                                                        </p>
                                                        <p>
                                                            La informacion que se muestra en el sistema es facilitada por
                                                            <b><a href="http://ergast.com/mrd/" className="reference" target="_blank" rel="noreferrer"> Ergast Developer Api</a></b>, una Api no oficial con informacion
                                                            tanto historica como datos individuales de cada carrera a lo largo de los años.
                                                        </p>
                                                        <br/>
                                                        <a href="https://github.com/JoseAl05/F1-Info-Project" className="redirect" target="_blank" rel="noreferrer"><FaArrowRight/>&nbsp;&nbsp;Ir al Repositorio</a>
                                                    </CardContent>
                                                </Card>
                                            </Suspense>
                                            <Suspense fallback={<CustomContentLoader/>}>
                                                <Card sx={{ maxWidth: 300,maxHeight:700,overflowY: 'auto'}}>
                                                    <CardHeader
                                                        title="Proyecto con Django. Carrito de Compras"
                                                        sx={{background:'#37517e',color:'#ffff'}}
                                                    />
                                                    <CardMedia
                                                        component="img"
                                                        image={djangoProject}
                                                        alt="djangoProject"
                                                        sx={{height:300,objectFit:"scale-down"}}
                                                    />
                                                    <CardContent>
                                                        <p>
                                                            Este proyecto esta desarrollado de manera netamente didactica, con el objectivo de adentrarme en el lenguaje de programacion
                                                            Python y su framework Django.
                                                            Las herramientas utilizadas fueron <b>HTML,Css y JavaScript</b> como FrontEnd y <b>Django, Python y PostgreSQL como BackEnd.</b>
                                                            Para el testing de los request se utilizo <b>Postman.</b>
                                                        </p>
                                                        <br/>
                                                        <a href="https://github.com/JoseAl05/Projecto-Django/tree/master" className="redirect" target="_blank" rel="noreferrer"><FaArrowRight/>&nbsp;&nbsp;Ir al Repositorio</a>
                                                    </CardContent>
                                                </Card>
                                            </Suspense>
                                            <Suspense fallback={<CustomContentLoader/>}>
                                                <Card sx={{ maxWidth: 300,maxHeight:700,overflowY: 'auto'}}>
                                                    <CardHeader
                                                        title="Proyecto Interfaz IRACE (Proyecto de Titulo)"
                                                        sx={{background:'#5ea9ff',color:'#ffff'}}
                                                    />
                                                    <CardMedia
                                                        component="img"
                                                        image={iraceProject}
                                                        alt="iraceProject"
                                                        sx={{height:300,objectFit:"scale-down"}}
                                                    />
                                                    <CardContent>
                                                        <p>
                                                            Interfaz gráfica para toda la fase de ejecución del algoritmo <b><a className="reference" href="https://iridia.ulb.ac.be/irace/" target="_blank" rel="noreferrer">IRACE</a></b>, que contempla: Set-up de escenarios, Control de ejecución y Generación de reportes.
                                                            Este proyecto, se enfocó específicamente en la fase de Control de ejecución. Se desarrolló una interfaz que permite al usuario visualizar todo lo que está ocurriendo durante la ejecución de <b>IRACE</b>.
                                                            El desarrollo se realizo con <b><a className="reference" href="https://shiny.rstudio.com/" target="_blank" rel="noreferrer">Shiny</a></b>, un paquete del lenguaje <b>R</b> que permite la creacion de aplicaciones web interactivas directamente desde <b>R</b> .
                                                        </p>
                                                        <br/>
                                                        <a href="https://github.com/xSeeek/IRACE-GUI/tree/master" className="redirect" target="_blank" rel="noreferrer"><FaArrowRight/>&nbsp;&nbsp;Ir al Repositorio</a>
                                                        <br/>
                                                        <a href={iraceDoc} className="redirect" target="_blank" download rel="noreferrer"><FaArrowRight/>&nbsp;&nbsp;Documentacion</a>
                                                    </CardContent>
                                                </Card>
                                            </Suspense>
                                            <Suspense fallback={<CustomContentLoader/>}>
                                                <Card sx={{ maxWidth: 300,maxHeight:700,overflowY: 'auto'}}>
                                                    <CardHeader
                                                        title="Proyecto Ingenieria de Software Plataforma Empresarial Centrada en la Gestion y Comunicacion del Capital Humano"
                                                        sx={{background:'#ae4a2d',color:'#ffff'}}
                                                    />
                                                    <CardContent>
                                                        <p>
                                                            Intranet para empresa con el objetivo de unificar el concepto de red social con la gestion del negocio. El proyecto fue desarrollado con el framework <b>Angular</b> en el front-end y <b>NodeJS</b>, <b>Express</b>,
                                                            <b>Sequelize</b> en el backend y <b>PostgreSQL</b> como motor de base de datos. Para el test de las requests se utilizo <b>Postman</b>
                                                        </p>
                                                        <br/>
                                                        <a href="https://github.com/xSeeek/ProyectoSoftware" className="redirect" target="_blank" rel="noreferrer"><FaArrowRight/>&nbsp;&nbsp;Ir al Repositorio</a>
                                                        <br/>
                                                        <a href={ingSoftDoc} className="redirect" target="_blank" download rel="noreferrer"><FaArrowRight/>&nbsp;&nbsp;Documentacion</a>
                                                    </CardContent>
                                                </Card>
                                            </Suspense>
                                        </div>
                                    </animated.div> : ''
                                )}
                    </Grid>
                </Grid>
            </section>
        </>
    )
};

export default Projects;