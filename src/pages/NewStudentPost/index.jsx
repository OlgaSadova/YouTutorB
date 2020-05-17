import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";



export default function NewStudentPost() {
    
        const [userState, setUserState] = useState({
            level: "",
            post: ""
            
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
          API.createStudentPost(userState).then(newUser => {
              console.log(newUser)
              setUserState({
                level: "",
                post: ""
              })
              
              history.push("/profile");
          })
        
        }
        
        
            return (
                <div className = "UserForm">
                    <label className="label is-large">Post your Add as a Student:</label>
                <div className="field">
          <label className="label">Skill Level</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="level" value={userState.level} placeholder="1 to 10"/>
          </div>
        </div>
        
        <div className="field">
          <label className="label">Post</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="post" value={userState.post} placeholder="Javascript"/>
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
