import React, { Component } from "react";

class InnerForm extends Component {
  render() {
    const { state, handlers, zone, placeholders, index } = this.props;
    return (
      <div>
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
                className={`${zone}__${prop} ${zone}__input inner-form__input inner-form__textarea`}
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
              className={`${zone}__${prop} ${zone}__input inner-form__input`}
            ></input>
          );
        })}
        <button onClick={(e) => handlers.saveInput({ e, state, zone, index })}>
          Save
        </button>
        <button onClick={(e) => handlers.clearInput({ zone, index })}>
          Clear
        </button>
      </div>
    );
  }
}

export default InnerForm;
