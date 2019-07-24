import React, { useState } from 'react';

function Form() {
    const [teamMember, setTeamMember] = useState({name:'', email:'', role:''})

    function handleChange(event){
        const updatedTeamMember = { ...teamMember, [event.target.name]: event.target.value }

        setTeamMember(updatedTeamMember);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("team member state", teamMember)
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Team Member Sign-up</legend>
                <div>
                    <label for="name">Name
                    <div>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Your name here"
                            value={teamMember.name}
                            onChange={handleChange}
                        />
                    </div>
                    </label>
                </div>
            </fieldset>
        </form>
    )
}

export default Form