import { useState } from "react";
import Switch from "react-switch";

function CSwitch({ check }) {
  const [checked, setChecked] = useState(check);
  const handleChange = (checked) => setChecked(checked ? false : true);
  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      onHandleColor="#CAFFAA"
      offHandleColor="#bbb"
      checkedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 15,
            paddingRight: 2,
          }}
        >
          ON
        </div>
      }
      uncheckedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 15,
            paddingRight: 2,
          }}
        >
          OFF
        </div>
      }
      disabled
      className="react-switch"
    />
  );
}

export default CSwitch;
