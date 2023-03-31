import React ,{useEffect} from "react";
import "./style.css";
import Card from "./Card";
// import data from "./data";
// import NewWindow from "react-new-window";
import {Link} from "react-router-dom";
// import RealData from "./Realdata";
import {ref, onValue } from "firebase/database";
import {db} from "./firebase";



// const datalist = data.map((item) => {
//     return (
//         <Card
//             dp={item.photo}
//             name={item.name}
//             roll={item.roll}
//             branch={item.branch}
//             batch={item.batch}
//             company={item.company}
//         />
//     );
// });
// console.log(RealData);
export default function Home() {
    const [data,setrealdata] = React.useState([]);
    useEffect(()=>{
        onValue(ref(db),(snapshot)=>{
            setrealdata([]);
            const data = snapshot.val();
            if(data!==null){
                Object.values(data).map((item)=>{
                    setrealdata((prev)=>[...prev,item]);
                });
            };
        });
    },[]);
    const datalist = data.map((item) => {
        return (
            <Card
                dp={item.photo}
                name={item.name}
                roll={item.roll}
                branch={item.branch}
                batch={item.batch}
                company={item.company}
            />
        );
    });
    const [order,setorder] = React.useState("company");
    const mappedData = [];
    const boolmap = [];
    for(let i=0;i<data.length;i++){
        mappedData[data[i][order]]=mappedData[data[i][order]] || [];
        mappedData[data[i][order]].push(data[i]);
        boolmap[data[i][order]]=false;
    }

    let mappedDatalist = [];
    for(const key in mappedData){
        const list = mappedData[key].map((item) => {
            return (
                <Card
                    dp={item.photo}
                    name={item.name}
                    roll={item.roll}
                    branch={item.branch}
                    batch={item.batch}
                    company={item.company}
                />
            );
        });
        mappedDatalist[key] = list;
    };

    const [boolmapstate,setboolmapstate] = React.useState(boolmap);
    const handleclick = (key)=>{
        boolmapstate[key]=!boolmapstate[key];
        const arr =[];
        for(const key in boolmapstate){
            arr[key]=boolmapstate[key];
        }
        setboolmapstate(arr);
    }
    const companyList = Object.entries(mappedDatalist).map(([key,value])=>{
        return (
            <>
                <h1 onClick={handleclick.bind(null,key)} className="order-tag">{key}</h1>
                {   boolmapstate[key] 
                        && 
                    <div className="Card-list">
                        {value}
                    </div>  }
            </>
        )
    }); 
    return (
        <section className="whole">
            <div className="header">
                <h1>NITP Placements 2023</h1>
                <Link to="/formfill" target="_blank">Add Details</Link>
                <select defaultValue={"company"} onChange={(event)=> setorder(event.target.value)}>
                    <option value="company">Company</option>
                    <option value="branch">Branch</option>
                    <option value="roll">Roll</option>
                    <option value="batch">Year</option>
                </select>
            </div>
            {companyList}
            <h1>All</h1>
            <div className="Card-list">
                {datalist}
            </div>
        </section>
    );
}