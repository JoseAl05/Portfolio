import React,{lazy,Suspense} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import '@fontsource/roboto/400.css';
import './App.css';
import CustomContentLoader from "./components/ContentLoader/CustomContentLoader";
const Mainpage = lazy(() => import('./components/Mainpage/Mainpage'));

const App = () => (
    <>
        <Router>
            <Suspense fallback={<CustomContentLoader/>}>
                <Mainpage/>
            </Suspense>
        </Router>
    </>
);

export default App;
