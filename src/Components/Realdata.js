import React, { useEffect } from "react";
import {db} from "./firebase";
// import {uid} from "uid";
import { set,ref, onValue } from "firebase/database";

const data =[];
export default function Readdata(){
    const [realdata,setrealdata] = React.useState([]);
    useEffect(()=>{
        onValue(ref(db),(snapshot)=>{
            const data = snapshot.val();
            if(data!==null){
                Object.values(data).map((item)=>{
                    setrealdata((prev)=>[...prev,item]);
                });
            };
        });
    },[]);
    data =[...realdata];
    console.log("hi");
    console.log(data);
    console.log(realdata);
    return realdata;
}
// export default data;