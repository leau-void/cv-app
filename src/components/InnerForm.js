import "../styles/inner-form.css";
import React from "react";

const InnerForm = (props) => {
  const { state, handlers, zone, placeholders, index } = props;
  return (
    <div className="inner-form">
      {Object.keys(state).map((prop) => {
        let className = `inner-form__input inner-form__${prop}`;
        if (prop === "description") {
          return (
            <div className="inner-form__textarea-container" key={prop}>
              <textarea
                value={state[prop]}
                placeholder={placeholders[prop]}
                onChange={(e) =>
                  e.target.value.length < 282
                    ? handlers.fetchInput({ e, state, prop, zone, index })
                    : null
                }
                className={className + " inner-form__textarea"}></textarea>
              <div className="char-count">{state[prop].length}/281</div>
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
            className={className}></input>
        );
      })}

      <button
        className="button button_clear inner-form__clear"
        onClick={(e) => handlers.clearInput({ zone, index })}>
        Clear
      </button>
    </div>
  );
};

export default InnerForm;
