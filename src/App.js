import React from "react";
import Home from "./Components/Home";
import { BrowserRouter,Routes,Route,HashRouter} from "react-router-dom";
import Form from "./Components/Form";



export default function App(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/formfill" element={<Form/>}/>
                <Route path="/*" element={<h1>Error Page Not Found</h1>}/>
            </Routes>
        </HashRouter>
    )
};