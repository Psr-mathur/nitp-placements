import React from "react";
import Home from "./Components/Home";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Form from "./Components/Form";



export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/nitp-placements" element={<Home/>} />
                <Route path="/nitp-placements/formfill" element={<Form/>}/>
                <Route path="/nitp-placements/error" element={<h1>Error Page Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}