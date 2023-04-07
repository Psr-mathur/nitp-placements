import React from "react";
import { db } from "./firebase";
import { set, ref } from "firebase/database";

export default function Form() {
	const inputs = {
		name: "",
		roll: 999999,
		branch: "",
		batch: "2K19",
		company: "",
		phone: 9876543210,
		dob: 1999,
		photo: "https://loremflickr.com/320/240/paris,girl/all"
	};
	// write 
	const writetoDB = () => {
		// console.log(inputs);
		const key = inputs.roll;
		set(ref(db, `${key}`), inputs);
	};
	// read : i'm reading the data in Realdata.js file and then will export it.

	const handlesubmit = (event) => {
		event.preventDefault();
		console.log(event);
		for(let i=0;i<=6;i++){
			console.log(event.target[i].name);
			if(event.target[i].name==='roll' || event.target[i].name==='phone'|| event.target[i].name==='dob'){
				// console.log("inside");
				if(event.target[i].value)
					inputs[event.target[i].name]=parseInt(event.target[i].value);
			}
			else{
				inputs[event.target[i].name]=event.target[i].value;
			}
		}

		// console.log(inputs);

		writetoDB();
		setissubitted((chk)=>!chk);
	};
	const [issubmitted, setissubitted]=React.useState(false);
	return (
			<form className="container col-8 col-sm-5 col-md-4 navbg" onSubmit={handlesubmit}>
				<div className="h1 row mb-1">Details Submission</div>
				<div className="row mb-1">
					<label htmlFor="Full Name">Name : </label>
					<input
						className=""
						type="text"
						name="name"
						id="Full Name"
						placeholder="Prakash Mathur"
						autoComplete="on"
						required
					/>
				</div>
				<div className="row mb-1">
					<label htmlFor="Roll No">Roll No : </label>
					<input
						className=""
						type="text"
						name="roll"
						id="Roll No"
						placeholder="1902000"
						autoComplete="on"
						required
					/>
				</div>
				<div className="row mb-1">
					<label htmlFor="Branch">Branch : </label>
					<input
						className=""
						type="text"
						name="branch"
						id="Branch"
						list="Branch-list"
						placeholder="Electrical Engineering"
					// autofocus
					/>
					<datalist id="Branch-list">
						<option value="Electrical Engineering"></option>
						<option value="Civil Engineeing"></option>
						<option value="Electronics & Commn Engineering"></option>
						<option value="Computer Science Engineering"></option>
						<option value="Mechanical Engineering"></option>
					</datalist>
				</div>
				<div className="row mb-1">
					<label htmlFor="Batch">Batch : </label>
					<input
						className=""
						type="text"
						name="batch"
						id="Batch"
						placeholder="2K19"
						pattern="2K[1-9]{2}"
						autoComplete="on"
					// required
					/>
				</div>
				<div className="row mb-1">
					<label htmlFor="Company">Company : </label>
					<input
						className=""
						type="text"
						name="company"
						id="Company"
						placeholder="CGI"
						autoComplete="on"
					// required
					/>
				</div>
				<div className="row mb-1">
					<label htmlFor="Phone">Mobile No.</label>
					<input
						className=""
						type="tel"
						name="phone"
						id="Phone"
						placeholder="9012345678"
						autoComplete="off"
						pattern="[0-9]{10}"
					// required
					/>
				</div>
				<div className="row mb-4">
					<label htmlFor="BirthYear">Birth Year : </label>
					<input
						className=""
						type="number"
						name="dob"
						id="by"
						min="1980"
						max="2025"
						step="1"
					// onChange={handler}
					/>
				</div>
				{issubmitted===false 
						?
					<div className="row">
						<button className="col-5 m-1 btn btn-outline-primary" type="submit">submit</button>
						<button className="col-5 m-1 btn btn-outline-warning" type="reset">Reset</button>
					</div>
						:
					<div className="row">
						<button className="col-5 m-1 btn btn-outline-success" disabled>Submitted</button>
					</div>
				}
			</form>
	);
}
