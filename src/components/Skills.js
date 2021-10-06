import "../styles/skills.css";
import React, { Component } from "react";

class Skills extends Component {
  render() {
    const {
      state: { current, saved },
      handlers,
    } = this.props;
    const zone = "skills";
    return (
      <div className="zone zone_skills">
        <h2 className="zone__name">Skills</h2>
        <form onSubmit={handlers.addSkill}>
          <input
            onChange={(e) => handlers.fetchInput({ e, zone, prop: "current" })}
            value={current}
          ></input>
          <button type="submit" className="button button_add-skill">
            Add
          </button>
        </form>
        {saved.map((skill, index) => (
          <div key={index}>
            {skill}
            <button
              className="button button_remove-skill"
              onClick={() => handlers.removeSkill({ index })}
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Skills;
