import React from "react";
import {db} from "./firebase";
import { set,ref } from "firebase/database";
import {uid} from "uid";
import {Link} from "react-router-dom";

export default function Form() {
	const inputs ={
		name : "",
		roll : 999999,
		branch : "",
		batch : "2K19",
		company : "",
		phone : 9876543210,
		dob : 1999,
		photo : "https://loremflickr.com/320/240/paris,girl/all"
	};
  	// write 
	const writetoDB = () => {
		const key = inputs.roll;
		set(ref(db, `${key}`),inputs);
	};
	// read : i'm reading the data in Realdata.js file and then will export it.

	const handlesubmit = (event) => {
		event.preventDefault();
		inputs.name = event.target[1].value;
		inputs.roll = parseInt(event.target[2].value);
		inputs.branch = event.target[3].value;
		inputs.year = (event.target[4].value);
		inputs.company = event.target[5].value;
		inputs.phone = parseInt(event.target[6].value);
		inputs.dob = parseInt(event.target[7].value);
		// console.log(inputs);
		
		writetoDB();
		window.prompt("Details Submitted");
	};
	return (
    <form onSubmit={handlesubmit} >
      	<fieldset>
        	<legend>Details Submission</legend>
        		<p>
					<label htmlFor="Full Name">Name : </label>
					<input
						type="text"
						name="name"
						id="Full Name"
						placeholder="Prakash Mathur"
						autoComplete="on"
						required
					/>
        		</p>
        		<p>
					<label htmlFor="Roll No">Roll No : </label>
					<input
						type="text"
						name="roll"
						id="Roll No"
						placeholder="1902000"
						autoComplete="on"
						required
					/>
        		</p>
        		<p>
					<label htmlFor="Branch">Branch : </label>
					<input
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
				</p>
				<p>
					<label htmlFor="Batch">Batch : </label>
					<input
						type="text"
						name="batch"
						id="Batch"
						placeholder="2K19"
						pattern="2K[1-9]{2}"
						autoComplete="on"
						// required
					/>
				</p>
				<p>
					<label htmlFor="Company">Company : </label>
					<input
						type="text"
						name="company"
						id="Company"
						placeholder="CGI"
						autoComplete="on"
						// required
					/>
        		</p>
        		<p>
					<label htmlFor="Phone">Mobile No.</label>
					<input
						type="tel"
						name="phone"
						id="Phone"
						placeholder="9012345678"
						autoComplete="off"
						pattern="[0-9]{10}"
						// required
					/>
				</p>
				<p>
					<label  htmlFor="BirthYear">Birth Year : </label>
					<input
						type="number"
						name="dob"
						id="by"
						min="1980"
						max="2025"
						step="1"
						// onChange={handler}
					/>
				</p>
		</fieldset>
		<br />
		<button type="submit">submit</button>
      	<button type="reset">Reset</button>
    </form>
  	);
}
