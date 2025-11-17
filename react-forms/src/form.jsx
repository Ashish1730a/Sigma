import { useState } from "react";

export default function Form() {
    // let [fullname, setFullName] = useState("");
    // let [username, setUserName] = useState("");


    let [formData, setFormData] = useState({
        fullname: "", username: "", password: ""
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let handleUsername = (event) => {
    //     setUserName(event.target.value);
    // }
    
    let handelInputChange = (event) => { 
        setFormData( (currData) => {
            return {...currData, [event.target.name]: event.target.value};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
        fullname: "", username: "", password: ""
    })
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" placeholder="Enter full name" value={formData.fullname}  id="fullname" name="fullname" onChange={handelInputChange}/>
        <br /><br />
            <label htmlFor="username">user Name</label>
            <input type="text" placeholder="Enter full name" value={formData.username}  id="username" name="username" onChange={handelInputChange}/>
        <br /><br />
        <label htmlFor="password">password</label>
            <input type="password" placeholder="Enter password" value={formData.password}  id="password" name="password" onChange={handelInputChange}/>
            <button>Submit</button>
        </form>
    )
}