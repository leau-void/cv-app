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
        <form className="form-skills" onSubmit={handlers.addSkill}>
          <input
            className="inner-form__input form-skills__input"
            onChange={(e) => handlers.fetchInput({ e, zone, prop: "current" })}
            value={current}
            required></input>
          <button type="submit" className="button button_add-skill">
            {saved.length >= 5 ? (
              <span
                className="button__block"
                onClick={(e) => e.stopPropagation()}></span>
            ) : null}
            Add
          </button>
        </form>
        <ul className="skills-list">
          {saved.map((skill, index) => (
            <li className="skills-list__item" key={index}>
              <div className="skills-list__skill">{skill}</div>
              <button
                className="button button_remove-skill"
                onClick={() => handlers.removeSkill({ index })}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
