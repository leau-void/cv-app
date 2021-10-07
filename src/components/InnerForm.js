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
              <div className="inner-form__textarea-container" key={prop}>
                <textarea
                  value={state[prop]}
                  placeholder={placeholders[prop]}
                  onChange={(e) =>
                    e.target.value.length < 201
                      ? handlers.fetchInput({ e, state, prop, zone, index })
                      : null
                  }
                  className="inner-form__input inner-form__textarea"
                ></textarea>
                <div className="char-count">{state[prop].length}/200</div>
              </div>
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
