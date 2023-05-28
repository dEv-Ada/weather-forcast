import { React, useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { LoaderComponent } from "./components/Loader/LoaderComponent";
import { DisplayWeather } from "./components/Weather/DisplayWeather";
import { SearchComponent } from "./components/Weather/SearchComponent";
import {
  FetchWeather,
  ForecastWeather,
  SearchLocation,
} from "./store/actions/apiActions";
import { setLoadingMessage } from "./store/actions/dispatchAction";

function App() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState([]);
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const isLoad = useSelector((state) => state.loading.load.isShow);

  const getLocation = async () => {
    dispatch(
      setLoadingMessage({
        isShow: true,
      })
    );
    await SearchLocation(location).then((response) => {
      response.json().then((data) => {
        setLocationData(data);
      });
    });
  };

  const getWeather = async (lat, lon) => {
    await FetchWeather(lat, lon).then((response) => {
      response.json().then((data) => {
        setWeatherData(data);
      });
    });
  };

  const forecastWeather = async (lat, lon) => {
    await ForecastWeather(lat, lon).then((response) => {
      response.json().then((data) => {
        setForecastData(data);
        dispatch(
          setLoadingMessage({
            isShow: false,
          })
        );
      });
    });
  };

  useEffect(() => {
    async function fetchData() {
      let lat = locationData[0].lat;
      let lon = locationData[0].lon;
      getWeather(lat, lon);
      forecastWeather(lat, lon);
    }
    if (locationData?.length > 0) {
      fetchData();
    }
  }, [locationData?.length > 0]);

  return (
    <div className="App">
      {isLoad && <LoaderComponent />}
      <HeaderComponent />
      <div className="mt-3">
        <Container>
          <Card className="shadow-lg p-3 mb-5 bg-body rounded main-card" body>
            <Row>
              <SearchComponent
                setLocation={setLocation}
                getLocation={getLocation}
              />
            </Row>
            <Row>
              <DisplayWeather
                weatherData={weatherData}
                forecastData={forecastData}
              />
            </Row>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default App;
