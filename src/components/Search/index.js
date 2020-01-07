import React, { useState } from "react";

export default ({ setSearchTerm }) => {
  const [string, setString] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    setSearchTerm(string);
  };
  return (
    <div>
      <div className="row">
        <form className="col s12" onSubmit={e => onSubmit(e)}>
          <div className="col s10">
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  value={string}
                  className="validate"
                  onChange={event => setString(event.target.value)}
                />
                <label for="first_name">First Name</label>
              </div>
            </div>
          </div>
          <div className="col s2">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={e => onSubmit(e)}
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
