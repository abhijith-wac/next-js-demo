import React from "react";
import statesData from "../../lib/states.json";
import CustomSelect from "./CustomSelect";

const StateSelect = () => (
  <div className="form-group">
    <CustomSelect
      name="state"
      label="State"
      required
      validateOn="change"      
      showErrorIfDirty         
    >
      <option value="">Select State</option>
      {statesData.states.map((state) => (
        <option key={state.state} value={state.state}>
          {state.state}
        </option>
      ))}
    </CustomSelect>
  </div>
);

export default StateSelect;
