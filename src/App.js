import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";



function Home() {
  return <h2>Home</h2>;
}

function About() {
  
  return <h2>About</h2>;

}

function Users() {
  return <h2>Users</h2>;
}




export default function App() {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/users" element={<Users />}>
          </Route>
          <Route path="/" element={  <Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
