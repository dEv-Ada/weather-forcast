import { api_url } from "../../config/config";
import { forecastWeather, locationSearch, weatherSearch } from "./apiEndpoints";

export const SearchLocation = async (loc) => {
  let url = api_url + locationSearch + loc;
  const response = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response;
};

export const FetchWeather = async (lat, lon) => {
  let url = api_url + weatherSearch + lat + "&lon=" + lon;
  const response = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response;
};

export const ForecastWeather = async (lat, lon) => {
  let url = api_url + forecastWeather + lat + "&lon=" + lon;
  const response = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response;
};
