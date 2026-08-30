import React from "react"

export default function Setting(){

  function handleLogin(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }



  function handleSignup(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  return(
  <>
  <div style={{display:"flex",  alignItems:"center", justifyContent:"space-between", gap:"2rem",  width:"100%"}}> 

    <form onSubmit={handleLogin}>
      <h3>Login User</h3>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br/>
      <button type="submit">Login</button>
    </form>
    <form onSubmit={handleSignup}>
    <h3>Add User</h3>
    <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br/>
      <label htmlFor="dob">DOB:</label>
      <input type="date" id="dob" name="dob" />
      <br/>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" />
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br/>
      <button type="submit">Add User </button>
    </form>
  </div>
  </>
  )
}