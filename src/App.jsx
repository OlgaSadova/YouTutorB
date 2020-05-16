import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Post from './pages/Post';
import NewStudentPost from './pages/NewStudentPost';
import NewTeacherPost from './pages/NewTeacherPost';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
    <div className="container is-fluid">
      <div className="notification">
      <Navbar/>
      <Switch>
      <Route exact path="/">
         <HomePage/>
      </Route>

      <Route exact path="/signup">
         <SignUp/>
      </Route>

      <Route exact path="/profile">
         <Profile/>
      </Route>
      
      <Route exact path="/post">
         <Post/>
      </Route>

      <Route exact path="/newpost">
         <NewStudentPost/>
      </Route>

      <Route exact path="/newTeacherPost">
         <NewTeacherPost/>
      </Route>

      </Switch>
    
    </div>
    </div>
    </Router>
    
  );
}

export default App;
