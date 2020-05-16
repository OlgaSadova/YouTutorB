import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";



export default function NewTeacherPost() {
    
        const [userState, setUserState] = useState({
        skills: "",
        levels: "",
        about: "",
        picture: ""

            
        });
        const history = useHistory();
        
        const handleInputChange = event => {
          const { name, value } = event.target;
          setUserState({
              ...userState,
              [name]: value
          })
        };
        
        
        const handleFormSubmit = event => {
          event.preventDefault();
          API.createTeacherPost(userState).then(newUser => {
              console.log(newUser)
              setUserState({
                  skills: "",
                  levels: "",
                  about: "",
                  picture: ""
              })
              
              history.push("/profile");
          })
        
        }
        
        
            return (
                <div className = "UserForm">
                    <label className="label is-large">Post your Add as a Teacher:</label>
                <div className="field">
          <label className="label">Skills</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="skills" value={userState.skills} placeholder="1 to 10"/>
          </div>
        </div>
        
        <div className="field">
          <label className="label">Levels</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="levels" value={userState.levels} placeholder="Javascript"/>
          </div>
        </div>

        <div className="field">
          <label className="label">About</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="about" value={userState.about} placeholder="Javascript"/>
          </div>
        </div>

        <div className="field">
          <label className="label">picture</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="picture" value={userState.picture} placeholder="Javascript"/>
          </div>
        </div>
        
        
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light"><Link to ='/profile'>Cancel</Link></button>
          </div>
        </div>
        
        </div>
    )
}
