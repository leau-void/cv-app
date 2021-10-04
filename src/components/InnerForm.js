import React, { Component } from "react";

class InnerForm extends Component {
  render() {
    const { state, handlers, zone, inputs, index } = this.props;
    return (
      <div>
        {Object.keys(state).map((key) => {
          if (key === "description") {
            return (
              <textarea
                value={state[key]}
                placeholder={inputs.placeholders[key]}
                onChange={(e) =>
                  handlers.fetchInput({ e, state, key, zone, index })
                }
                className={`${zone}-${key}`}
              ></textarea>
            );
          }

          return (
            <input
              type="text"
              value={state[key]}
              placeholder={inputs.placeholders[key]}
              onChange={(e) => handlers.fetchInput({ e, key, zone, index })}
              className={`${zone}-${key}`}
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
