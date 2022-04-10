import React, { useEffect, useState } from "react";
import "./App.css";
import { AuthProvider} from "./authcontext"
import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "./firebase"
import './App.css'
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  
  const [viewOtpForm, setViewOtpForm] = useState(false);
  
  
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);

 
 
  async function loginSubmit(e){
    e.preventDefault();

    let phone_number = "+91" + e.target.phone.value;
    
    const appVerifier = window.recaptchaVerifier;
    
    await auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
      
  };
  
  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/dashboard", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.open("/", "_self");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Router>
      <div style={{ background: "#cbebe9" }}>
        <div id="recaptcha-container"></div>
      <AuthProvider>
        <NavigationBar/>
        
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard signOut={signOut}   />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin" exact>
            <SignIn
              loginSubmit={loginSubmit}
              otpSubmit={otpSubmit}
              viewOtpForm={viewOtpForm}
            />
          </Route>
        </Switch>
      </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
