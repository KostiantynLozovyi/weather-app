import { ChangeEvent, EventHandler, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../../../store/actions/actions";
import "./index.css";

function Header() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  
  const handleChangeCityName = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClickCityName = () => {
    dispatch(fetchTasks(input));
  };

  console.info(input)

  return (
    <>
      <header className="header">
        <div className="header_margin">
          <div className="logoName">
            <span>WEATHER</span>
          </div>
          <div className="form">
            <div className="input-wrapper">
              <input
                placeholder="Enter City"
                className="input"
                value={input}
                onChange={(e) => handleChangeCityName(e)}
              />
              <span className="focus-border"></span>
            </div>
            <button onClick={handleClickCityName}>Find location</button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
