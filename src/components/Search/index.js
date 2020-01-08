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
        <div className="container">
        <div className="row">
          <div className="col s10">
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Add ingredients or name of the recipe you want..."
                  id="first_name"
                  type="text"
                  value={string}
                  className="validate"
                  onChange={event => setString(event.target.value)}
                />
                <label htmlFor="first_name">Search for Recipe here</label>
              </div>
            </div>
          </div>
          <div className="col s2">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={e => onSubmit(e)}
              style={{marginTop:20}}
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
          </div>
        </div>
         
          
        </form>
      </div>
    </div>
  );
};
