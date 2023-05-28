import { app_id } from "../../config/config";

export const locationSearch = "/geo/1.0/direct?appid=" + app_id + "&limit=1&q=";
export const weatherSearch = "/data/2.5/weather?appid=" + app_id + "&lat=";
export const forecastWeather =
  "/data/2.5/forecast?units=metric&appid=" + app_id + "&lat=";
