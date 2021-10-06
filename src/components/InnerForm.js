import "../styles/inner-form.css";
import React, { Component } from "react";

class InnerForm extends Component {
  render() {
    const { state, handlers, zone, placeholders, index } = this.props;
    return (
      <div className="inner-form">
        {Object.keys(state).map((prop) => {
          if (prop === "description") {
            return (
              <textarea
                value={state[prop]}
                placeholder={placeholders[prop]}
                onChange={(e) =>
                  handlers.fetchInput({ e, state, prop, zone, index })
                }
                key={prop}
                className="inner-form__input inner-form__textarea"
              ></textarea>
            );
          }

          return (
            <input
              type="text"
              value={state[prop]}
              placeholder={placeholders[prop]}
              onChange={(e) => handlers.fetchInput({ e, prop, zone, index })}
              key={prop}
              className="inner-form__input"
            ></input>
          );
        })}
        <button
          className="button button_save"
          onClick={(e) => handlers.saveInput({ state, zone, index })}
        >
          Save
        </button>
        <button
          className="button button_clear"
          onClick={(e) => handlers.clearInput({ zone, index })}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default InnerForm;
