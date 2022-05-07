export const GET_HOST = (city) =>{
 return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=700e6cee3d8ca9e1a8502c356d8ae348`;
}

export const icons = (id) => {
   let icon = `http://openweathermap.org/img/wn/${id}@2x.png`

   return <img src={icon} alt="ww" />;
}

export const getWeekDay = (date) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[new Date(date).getDay()] ;
}
export const getHours = (date) => {

  return new Date(date).getHours();
}
export const getDate = (date) => {

  return new Date(date).getDate();
}