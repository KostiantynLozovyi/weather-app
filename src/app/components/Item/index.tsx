import { getDate, getHours, getWeekDay, icons } from '../../constants';

import './index.css'

export default function Item(props: any) { //any
  const { convertTempKelvinInCelsius, item } = props;
  return (
    <div className="data_item">
      <span>{convertTempKelvinInCelsius(item.main.temp)}&nbsp;°</span>
      <div className="data-item-icon">{icons(item.weather[0].icon)}</div>
      <span>{getWeekDay(item.dt_txt) + '-' + getDate(item.dt_txt)}</span>
      <span>{getHours(item.dt_txt) + ":00"}</span>
    </div>
  );
}

