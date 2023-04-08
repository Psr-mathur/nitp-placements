import React from "react";
import Home from "./Components/Home";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Form from "./Components/Form";



export default function App(){
    return (
        <BrowserRouter basename="/nitp-placements">
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/formfill" element={<Form/>}/>
                <Route path="*" element={<h1>Error Page Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}