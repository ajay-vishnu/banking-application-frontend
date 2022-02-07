import React, { useState } from 'react'

const Signup = ({ Signup, CurPage, error }) => {
  const [details, setDetails] = useState({name: "", username: "", email: "", password: "", confirmpassword: ""});

  const submitHandler = e =>  {
    e.preventDefault();
    Signup(details);
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Signup</h2>
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password: </label>
          <input type="confirm-password" name="confirm-password" id="confirm-password" onChange={e => setDetails({...details, confirmpassword: e.target.value})} value={details.confirmpassword} />
        </div>
        <input type="submit" value="Sign Up" />
        <button onClick={() => CurPage("login")}>Login</button>
      </div>
    </form>
  )
}

export default Signup
