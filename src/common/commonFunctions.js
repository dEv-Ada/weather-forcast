export const kTocFunc = (data) => {
  let newData = data - 273.15;
  return Math.round(newData * 10) / 10 + degfunc(176) + "C";
};

const degfunc = (a) => {
  return String.fromCharCode(a);
};

export const findIcon = (data) => {
  let url = "http://openweathermap.org/img/w/" + data + ".png";
  return url;
};

export const metTokmFunc = (data) => {
  let newData = data / 1000;
  return newData;
};

export const dateFormat = (d) => {
  let day = new Date(d).toDateString();
  return day;
};

export const dateFormatUnix = (d) => {
  let day = new Date(d * 1000).toDateString();
  return day;
};

export const degConvFunc = (data) => {
  return data + String.fromCharCode(176) + "C";
};
