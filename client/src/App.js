import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";
// import Login from "./pages/Login"

const Wrapper = props => (
  <div style={{ maxWidth: 400, padding: 16, margin: "auto" }} {...props} />
);

const App = () => {
  return (
    
    <Router>
      <div className="App">
      <NavTabs/>
      <Wrapper>
        <Home />
      </Wrapper>
      <Wrapper>
        <Profile />
      </Wrapper>
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </div>

    </Router>
  
  )
}

export default App;
