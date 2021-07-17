import React, { useState } from "react";

import ChErrorMessage from "./ChErrorMessage";

export default function CheckerLogin() {
  const initialValues = {
    uname: "",
    pass: "",
  };
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
    <div >
      <h1>Checker Login</h1>
      <form onSubmit={handleDoSubmit} noValidate>
        
          <input
            type="text"
            name="uname"
            maxLength="20"
            placeholder="Enter first name"
            value={formValues.uname}
            onChange={handleOnChange}
          />
          <ChErrorMessage message={formErrors.uname} />
          
          <input
            type="password"
            name="pass"
            placeholder="Enter password"
            value={formValues.pass}
            onChange={handleOnChange}
          />
          <ChErrorMessage message={formErrors.pass} />
          
        <button class="btn block-cube block-cube-hover" type="submit" >LOGIN</button>
          
          {Object.entries(formErrors).length === 0 && submitted && (
            <div>
              <h3>SUBMITTED SUCCESSFULLY</h3>
            </div>
          )}
      
      </form>
    </div>
  );
}

