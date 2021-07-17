import React, { useState } from "react";
import { useHistory } from "react-router";
import AdErrorMessage from "./AdErrorMessage";

export default function AdminLogin() {
  const initialValues = {
    uname: "",
    pass: "",
  };
  

    // const history = useHistory();
    // const[user,setUser] = useState({
    //   username:'',
    //   password:''
    // })
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  //onformsubmit
  const handleDoSubmit = (e1) => {
    e1.preventDefault();
    setformErrors(validate(formValues));

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
    // console.log("Form has been Submitted sucessfully ");
  };
  //onchangeevent
  const handleOnChange = (e2) => {
    const isInternalExternal = e2.target.type === "checkbox";

    const { name, value } = e2.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: isInternalExternal ? e2.target.checked : value,
      };
    });
  };
  // 
//   const handleClick=()=> {
//     if(user.uname =="latha" && user.pass == "pass")
//     {
//      history.push("/AdminDashboard");
//     }
//     else{
//       alert("Invalid Password");
//     }
     
//  }
  //form validation

  const validate = (values) => {
    
    let errors = {};
    console.log(values);
    const onlystr = /^[a-zA-Z]+$/;

    if (!values.uname) {
      errors.uname = "*User Name cannot be empty";
     
    } else if (!onlystr.test(values.uname)) {
      errors.uname = "*Only alphabets are Permitted";
    }
    if (!values.pass) {
      errors.pass = "Required";
    }
    
    return errors;
  };
  return (
    <div className="adminloginbody">
      <h1>adminpage</h1>
      <form class="loginform" onSubmit={handleDoSubmit} noValidate>
        <div class="ad-control">
          <h1 className="ad-h1">LOGIN</h1>
        </div>
        <div class="ad-control block-cube block-input">
          <input
            type="text"
            name="uname"
            maxLength="20"
            placeholder="Enter first name"
            value={formValues.uname}
            onChange={handleOnChange}
          />
          <AdErrorMessage message={formErrors.uname} />
          <div class="adbg-top">
            <div class="bg-inner"></div>
          </div>
          <div class="bg-right">
            <div class="bg-inner"></div>
          </div>
          <div class="bg">
            <div class="bg-inner"></div>
          </div>
        </div>
        <div class="control block-cube block-input">
          <input
            type="password"
            name="pass"
            placeholder="Enter password"
            value={formValues.pass}
            onChange={handleOnChange}
          />
          <AdErrorMessage message={formErrors.pass} />
          <div class="bg-top">
            <div class="bg-inner"></div>
          </div>
          <div class="bg-right">
            <div class="bg-inner"></div>
          </div>
          <div class="bg">
            <div class="bg-inner"></div>
          </div>
        </div>
        <button class="btn block-cube block-cube-hover" type="submit"  >
          <div class="bg-top">
            <div class="bg-inner"></div>
          </div>
          <div class="bg-right">
            <div class="bg-inner"></div>
          </div>
          <div class="bg">
            <div class="bg-inner"></div>
          </div>
          <div class="text">Log In</div>
        </button>
        <div>
          {Object.entries(formErrors).length === 0 && submitted && (
            <div>
              <h3>SUBMITTED SUCCESSFULLY</h3>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
