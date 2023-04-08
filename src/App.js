import React from "react";
import Home from "./Components/Home";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Form from "./Components/Form";



export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/nitp-placements" element={<Home/>} />
                <Route path="/formfill" element={<Form/>}/>
                <Route path="*" element={<h1>Error Page Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}