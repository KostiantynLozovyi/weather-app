import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialStateInterface } from "../../../store/types";
import { fetchTasks } from "../../../store/actions/actions";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import { ListItem } from "../../interfaces/IData";
import Item from "../Item";
import { getWeekDay, icons } from "../../constants";
import Loader from "../Loader";

export default function Content() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state: initialStateInterface) => state.contentReducer
  );

  function convertTempKelvinInCelsius(temperature: number) {
    return (temperature - 273.15).toFixed();
  }

  useEffect(() => {
    dispatch(fetchTasks('Kyiv'));
  }, [dispatch]);

console.log(error,'1');
console.log(data,'!data');    

  return (
    <>
      {loading || error ? (
        <Loader/>
      ) : (
        <div className="content">
          <div className="content-city_name">
            <div>{data?.city.name}</div>
          </div>
          <div className="content-header">
            <div className="content-header-left">
              {icons(data?.list[0].weather[0].icon)}
              <span className="content-header-temp">
                {!data ? null : convertTempKelvinInCelsius(data?.list[0].main.temp) }
              </span>
              <span className=""> &nbsp;° C</span>
            </div>
            <div className="content-header-day_of_week">
              {getWeekDay(data?.list[0].dt_txt)}
            </div>
            <div className="content-header-right">
              <div className="content-header-main">
                {data?.list[0].weather[0].main}
              </div>
              <div className="content-header-description">
                {data?.list[0].weather[0].description}
              </div>
            </div>
          </div>
          <div>
            <div className="data_list">
              {data?.list
                .map((item: ListItem, index: number) => (
                  <Item
                    key={index}
                    convertTempKelvinInCelsius={convertTempKelvinInCelsius}
                    item={item}
                  />
                ))
                .splice(0, 4)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
