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
            
        </form>

        <div>
            <p>HI</p>
        </div>
    )
}

export default Form