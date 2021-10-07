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
        <small>Add up to 5 skills.</small>
        <form onSubmit={handlers.addSkill}>
          <input
            onChange={(e) => handlers.fetchInput({ e, zone, prop: "current" })}
            value={current}
            required
          ></input>
          <button type="submit" className="button button_add-skill">
            {saved.length >= 5 ? (
              <span
                className="button__block"
                onClick={(e) => e.stopPropagation()}
              ></span>
            ) : null}
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
