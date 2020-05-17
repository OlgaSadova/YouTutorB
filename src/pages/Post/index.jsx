import React from 'react'

export default function Post() {
    return (
        <div className = "UserForm">
        <label className="label is-large">Write your Post:</label>
    <div className="field">
<label className="label">Level</label>
<div className="control">
<input className="input" type="text" placeholder="John"/>
</div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>



<div className="field is-grouped">
<div className="control">
<button className="button is-link">Submit</button>
</div>
<div className="control">
<button className="button is-link is-light">Cancel</button>
</div>
</div>
</div>


    )
}
