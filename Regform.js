import React,{useState} from "react";
function RegistrationForm(){
    const[firstname,setFirstname]=useState(" ")
    const[lastname,setLastName]=useState(" ")
    const[email,setEmail]=useState(" ")
    const[password,setPassword]=useState(" ")
    const[mobilenumber,setMobileNumber]=useState(" ")
    const[confirmpassword,setConfirmPassword]=useState(" ")
    const[passwordError,setPasswordError]=useState(false);
    const[dob,setDob]=useState(" ")
    const[gender,setSelectedOption]=useState(" ");
    const[selectstate,setSelectState]=useState(" ")
    const[selectcourse,setSelectCourse]=useState(" ")
    const[deliverymode,setSelectedDelivery]=useState(" ")
    const[comments,setComments]=useState(" ")
    const handleOptionChange=(event)=>{
        setSelectedOption(event.target.value);
    };
    const handleOption=(event)=>{
        setSelectedDelivery(event.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password!==confirmpassword){
            setPasswordError(true);
        }
        else{
            setPasswordError(false);
            console.log("Firstname:", firstname);
            console.log("Lastname:",lastname );
            console.log("Mobilenumber:", mobilenumber);
            console.log("Email:", email);
            console.log("password:", password);
            console.log("Confirmpassword:", confirmpassword);
            console.log("Dob:",dob );
            console.log("Gender:", gender);
            console.log("SelectState:", selectstate);
            console.log("SelectCourse:",selectcourse);
            console.log("DeliveryMode:", deliverymode);
            console.log("Comments:", comments);
            alert('your response updated successfully:'+firstname);
        }
    };
    return(
        <>
        <form className="registration-form" onSubmit={handleSubmit}>
            <fieldset>
    <legend>Personal Information</legend>
        <div className="form-group">
            <label htmlFor="firstname">Firstname:</label>
            <input placeholder="Enter your first name"
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            required/>
        </div>
        <div className="form-group">
            <label htmlFor="lastname">Lastname:</label>
            <input placeholder="Enter your last name"
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e)=>setLastName(e.target.value)}
            required/>
        </div>
        <div className="form-group">
            <label htmlFor="mobilenumber">Mobilenumber:</label>
            <input placeholder="Enter mobile number" maxlength={"10"}
            type="text"
            id="mobilenumber"
            value={mobilenumber}
            onChange={(e)=>setMobileNumber(e.target.value)}
            required/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input placeholder="Enter your emailid"
            type="text"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input placeholder="Enter password" 
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required/>
        </div>
        <div className="form-group">
            <label htmlFor="confirmpassword">ConfirmPassword:</label>
            <input placeholder="Enter password" maxlength={"10"}
            type="confirmpassword"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required/>
        </div>
        <div className="form-group">
            <label htmlFor="dob">DOB:</label>
            <input placeholder="Enter your first name"
            type="date"
            id="dob"
            value={dob}
            onChange={(e)=>setDob(e.target.value)}
            required/>
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <input className="gender"
            type="radio"
            value="Male"
            checked={gender==="Male"}
            onChange={handleOptionChange}/>
            <label>Male</label>
            <input className="gender"
            type="radio"
            value="Female"
            checked={gender==="Female"}
            onChange={handleOptionChange}/>
            <label>Female</label>
            <input className="gender"
            type="radio"
            value="Others"
            checked={gender==="Others"}
            onChange={handleOptionChange}/>
            <label>Others</label>
        </div>
        <div className="form-group">
            <label htmlFor="selectstate">SelectState:</label>
            <select id="selectstate"
            value={selectstate}
            onChange={(e)=>setSelectState(e.target.value)}
            required>
            <option></option>
            <option>Maharastra</option>
            <option>karnataka</option>
            <option>kolkotta</option>
            <option>gujarat</option>
            <option>kerala</option>
            <option>ap</option>
            <option>Mp</option>
            <option>tamilnadu</option></select>
        </div>
            </fieldset>
    <fieldset>
    <legend>Course Information</legend>
            <div className="form-group">
            <label htmlFor="selectcourse">SelectCourse:</label>
            <select id="selectcourse"
            value={selectcourse}
            onChange={(e)=>setSelectCourse(e.target.value)}
            required>
                <option></option>
                <option>JavaFullstack</option>
                <option>PythonFullstack</option>
                <option>SoftwareTesting</option>
                <option>Python datascience</option>
               </select> 
        </div>
            <div className="form-group1">
            <label htmlFor="deliverymode">Delivery mode:</label>
            <input className="delivery"
            type="radio"
            value="online"
            checked={deliverymode==="online"}
            onChange={handleOption}/>
            <label>Online</label>
            <input className="delivery"
            type="radio"
            value="offline"
            checked={deliverymode==="offline"}
            onChange={handleOption}/>
            <label>Offline</label>
        </div>
        <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <input placeholder="enter comments"
            type="text"
            id="comments"
            value={comments}
            onChange={(e)=>setComments(e.target.value)}
            required></input>
        </div>
            </fieldset><br></br>
            {passwordError&&<p className="warnings">*password do not match*</p>}
            <button type="submit">Register</button>
        </form>
        </>
    )   
}
export default RegistrationForm;