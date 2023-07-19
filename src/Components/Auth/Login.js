import React, { useState } from 'react'
import './Login.css'
function Login() {
  let [name, setname] = useState('')
  let [lastname, setLastname] = useState('')
  let [showsignup, setshowsignup] = useState(true)
  let [username, setusername] = useState('')
  let [password, setpassword] = useState('')
  let [email, setemail] = useState('')
  let [address, setAddress] = useState('')
  const [dob, setDOB] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const Userdetails = () => {
    setname('')
    setLastname('')
    setusername('')
    setemail('')
    setpassword('')
    setDOB('')
    setPhoneNumber('')
    setAddress('')
  }


  

  const handleUsernameChange = (e) => {
    let userInput = e.target.value
    const regex = /^[A-Za-z]+$/ // Regular expression to allow only alphabetic characters

    if (regex.test(userInput) || userInput === '') {
      setusername(userInput)
    } else {
      alert('Can not number or symbols in Username')
    }
  }

  const handleNameChange = (e) => {
    setname(e.target.value)
  }

  const handleLastnameChange = (e) => {
    setLastname(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleDOBChange = (e) => {
    setDOB(e.target.value)
  }
  const handlePhoneNumberChange = (e) => {
    let userInput = e.target.value
  const regex = /^\d+$/;

  if (regex.test(userInput) || userInput === '') {
    setPhoneNumber(userInput)
  } else {
    alert('Only Numbers are allowed')
  }

    
  }

  return (
    <>
      <div className="auth-Container">
        <div className="heading">
          <h2>Welcome to Param Shopping mall...</h2>
        </div>
        <div className="authform">
          <div className="userinfo">
          {showsignup &&
            <><div>
            <input
              type="text"
              className="Name"
              placeholder="Name"
              pattern="[A-Za-z]+"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div>
            <input
              type="text"
              className="lastname"
              placeholder="Lastname"
              pattern="[A-Za-z]+"
              value={lastname}
              onChange={handleLastnameChange}
            />
          </div>
            </>          }  
            <div>
              <input
                type="text"
                id="username"
                className="username"
                placeholder="Username"
                pattern="[A-Za-z]+"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <input
                type="password"
                className="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />{' '}
            </div>
            {showsignup && (
              <>
                <div>
                  <input
                    className="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    className="address"
                    type="text"
                    id="address"
                    placeholder="Address (include postal code)"
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
                <div>
                  <input
                    className="dob"
                    type="date"
                    placeholder="Date of Birth"
                    
                    value={dob}
                    onChange={handleDOBChange}
                  />
                </div>
                <div>
                  <input
                    className="telephone"
                    type="telephone"
                    placeholder="Phone Number"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
              </>
            )}
          </div>
          <div className="button" type="button" onClick={Userdetails}>
            {' '}
            {showsignup ? 'SignUp' : 'Login'}
          </div>
          <div
       
            className="userchack"
            onClick={(e) => setshowsignup(!showsignup)}
          >
            <h6>
              {showsignup
                ? 'Already have an Account? Login'
                : 'Dont have Account?SignUp'}
            </h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
