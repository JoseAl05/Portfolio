import React from "react";
import "./Presentation.css";
import imageOfMe from "../../images/yo.png";
import pucv from "../../images/pucv.PNG";
import '@fontsource/roboto/400.css';
import Grid from '@mui/material/Grid';
import LazyImage from "../LazyImages/LazyImages";

const Presentation = () =>{

    return(
        <>
            <section className="presentation">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="me-profile">
                            <figure className="profile-image">
                                <LazyImage
                                    key="0"
                                    src={imageOfMe}
                                />
                                {/* <img src={imageOfMe} alt="jose"/> */}
                                <figcaption className="my-name">Jose Pablo Arancibia Linker</figcaption>
                                <figcaption className="my-name">24 Años</figcaption>
                                <figcaption className="my-name">Ingeniero de Ejecución en Informática</figcaption>
                            </figure>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="pucv-studies">
                            <figure className="pucv-image">
                                <LazyImage
                                    key="1"
                                    src={pucv}
                                />
                                {/* <img src={pucv} alt="pucv"/> */}
                                <figcaption className="my-study">Egresado en Pontificia Universidad Católica de Valparaíso</figcaption>
                                <figcaption className="my-study">2016 - 2020</figcaption>
                            </figure>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}

export default Presentation;