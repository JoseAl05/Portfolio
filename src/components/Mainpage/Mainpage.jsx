import React,{lazy,Suspense} from 'react';
import "../../App.css";
import CustomContentLoader from '../ContentLoader/CustomContentLoader';
const Footer = lazy(() => import('../Footer/Footer'));
const Presentation = lazy(() => import('../Presentation/Presentation'));
const AboutMe = lazy(() => import('../AboutMe/AboutMe'));
const Projects = lazy(() => import('../Projects/Projects'));
const Tools = lazy(() => import('../Tools/Tools'));
const Experience = lazy(() => import('../Experience/Experience'));

const Mainpage = () =>{

    return(
        <>
            <Suspense fallback={<CustomContentLoader/>}>
                <Presentation/>
                <AboutMe/>
                <br/>
                <br/>
                <Tools/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Projects/>
                <br/>
                <br/>
                <Experience/>
                <Footer/>
            </Suspense>
        </>
    )
}

export default Mainpage;