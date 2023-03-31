import React from "react";

export default function Header() {
    const [order,setorder] = React.useState("Company");
    return (
    <div className="header">
        <h1>NITP Placements 2023</h1>
        <select defaultValue={"Company"} onChange={(event)=> setorder(event.target.value)}>
            <option value="Company">Company</option>
            <option value="Branch">Branch</option>
            <option value="Year">Year</option>
        </select>
    </div>
    );
}
