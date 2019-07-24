import React, { useState } from 'react';

function Form() {
    const [teamMember, setTeamMember] = useState({name:'', email:'', role:''})

    function handleChange(event){
        const updatedTeamMember = { ...teamMember, [event.target.name]: event.target.value }
        
        setTeamMember(updatedTeamMember);
    }

    return(
        <div>
            <p>HI</p>
        </div>
    )
}

export default Form