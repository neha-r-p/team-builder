import React, { useState } from "react";

function Form() {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  function handleChange(event) {
    const updatedTeamMember = {
      ...teamMember,
      [event.target.name]: event.target.value
    };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedTeamMember
    );

    setTeamMember(updatedTeamMember);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("team member state", teamMember);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Team Member Sign-up</legend>
        <div>
          <label for="name">
            Name
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
        <div>
          <label for="email">
            E-mail
            <div>
              <input
                type="text"
                name="email"
                placeholder="yourEmail@example.com"
                value={teamMember.email}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div>
          <label for="role">
            Team Role
            <div>
              <input
                type="text"
                name="role"
                placeholder="E.g. frontend engineer"
                value={teamMember.role}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Form;
