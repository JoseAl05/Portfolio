import React,{useState} from "react";
import Grid from '@mui/material/Grid';
import { useTransition,useSpringRef,useChain,useSpring,config,animated } from "react-spring";
import express from "../../images/express.png";
import {FaReact,FaNodeJs,FaAngular,FaArrowUp,FaArrowDown} from 'react-icons/fa';
import {SiJavascript,SiMysql,SiPostgresql,SiSequelize,SiMicrosoftsqlserver} from 'react-icons/si';
import "./Tools.css";


const Tools = () =>{

    const [isVisibleTools,setIsVisibleTools] = useState(false);

    // const transitionTools = useTransition(isVisibleTools,{
    //     from:{x: 0, y: 100, opacity: 0},
    //     enter:{x: 0, y: -10, opacity: 1},
    //     leave:{x: 0, y: 100, opacity: 0},
    // })
    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
      ref: springApi,
      config: config.stiff,
      from: { size: '20%'},
      to: {
        size: isVisibleTools ? '100%' : '20%',
      },
    })

    const transApi = useSpringRef();
    const transitionIcons = useTransition(isVisibleTools, {
      ref: transApi,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0.5 },
    })

    useChain(isVisibleTools ? [springApi, transApi] : [transApi, springApi], [
        0,
        // isVisibleTools ? 0.1 : 0.2,
    ])

    return(
        <>
            <section className="tools">
                <Grid container>
                    <Grid item xs={12}>
                        <button onClick={() => {
                            setIsVisibleTools(isVisibleTools => !isVisibleTools);
                        }}>
                            <span className="tools-header">{isVisibleTools ? 'Ocultar' : 'Herramientas'}<br/><button className={isVisibleTools ? 'rotate-arrow-up':'rotate-arrow-down'}><FaArrowDown className="arrow-icon" color="#000000" size={50}/></button></span>
                        </button>
                        <div className={isVisibleTools ? "tools-background" : "tools-background-items-invisible"}>
                            {transitionIcons((style,item) =>
                                item ?
                                    <div className="tools-icons">
                                        <animated.span style={{...style}} className="icon-name"><FaReact color="#61dafb" className="icon" size={60}/><br/>ReactJs</animated.span>
                                        <animated.span style={{...style}} className="icon-name"><FaAngular color="#DD0031" className="icon" size={60}/><br/>Angular</animated.span>
                                        <animated.span style={{...style}} className="icon-name"><SiJavascript color="yellow" className="icon" size={60}/><br/>JavaScript</animated.span>
                                        <animated.span style={{...style}} className="icon-name"><FaNodeJs color="#84ba64" className="icon" size={60}/><br/>NodeJS</animated.span>
                                        <animated.span style={{...style}} className="icon-name"><img src={express} className="icon" alt="express"/><br/>ExpressJS</animated.span>
                                        <animated.span style={{...style}} className="icon-name"><SiSequelize color="#399af3" className="icon" size={60}/><br/>Sequelize</animated.span>
                                        <animated.span style={{...style}} className="icon-name"><SiMysql color="#3E6E93" className="icon" size={60}/><br/>MySQL</animated.span>
                                        <animated.span style={{...style}} className="icon-name"><SiPostgresql color="#336791" className="icon" size={60}/><br/>PostgreSql</animated.span>
                                        <animated.span style={{...style}} className="icon-name"><SiMicrosoftsqlserver className="icon" color="red" size={60}/><br/>SQL Server</animated.span>
                                    </div> : ''
                            )}
                        </div>
                    </Grid>
                </Grid>
            </section>
        </>
    )
};

export default Tools;