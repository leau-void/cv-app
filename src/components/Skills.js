import React, { Component } from "react";

class Skills extends Component {
  render() {
    const {
      state: { current, saved },
      handlers,
    } = this.props;
    const zone = "skills";
    return (
      <div className="skills">
        <form onSubmit={handlers.addSkill}>
          <input
            onChange={(e) => handlers.fetchInput({ e, zone, prop: "value" })}
            value={current.value}
          ></input>
          <button type="submit">Add</button>
        </form>
        {saved.map((skill, index) => (
          <div key={index}>
            {skill}
            <button onClick={() => handlers.removeSkill({ index })}>X</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Skills;
