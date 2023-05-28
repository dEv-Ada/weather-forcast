import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  dateFormat,
  dateFormatUnix,
  degConvFunc,
  findIcon,
  kTocFunc,
  metTokmFunc,
} from "../../common/commonFunctions";

export const DisplayWeather = ({ weatherData, forecastData }) => {
  const [forcastDates, setForcastDates] = useState([]);
  const forecastFunction = () => {
    let newArr = [];
    for (let i = 0; i < forecastData?.list?.length; i++) {
      let forcastObject = forecastData?.list[i];
      let date = dateFormat(forcastObject.dt_txt);
      let index = newArr.findIndex((el) => dateFormat(el.day) === date);
      if (index === -1) {
        let forcastObj = {
          day: forcastObject?.dt_txt,
          min: forcastObject?.main?.temp_min,
          max: forcastObject?.main?.temp_max,
          sky: forcastObject.weather[0].main,
          icon: forcastObject.weather[0].icon,
        };
        newArr.push(forcastObj);
      }
    }
    newArr.splice(0, 1);
    setForcastDates(newArr);
  };

  useEffect(() => {
    forecastFunction();
  }, [forecastData?.list?.length > 0]);

  return (
    <div>
      {forecastData?.list?.length && (
        <>
          <Row>
            <p className="text-center">
              <p className="text-danger text-opacity-75 fw-semibold">
                {dateFormatUnix(weatherData?.dt)}
              </p>
              <h1>{" " + weatherData?.name}</h1>
            </p>
          </Row>
          <Row>
            <Col className="brdr-col-left">
              <p class="text-muted fw-semibold">
                <h2>{weatherData?.weather[0].main}</h2>
              </p>
              <img
                src={findIcon(weatherData?.weather[0].icon)}
                alt={weatherData?.weather[0].icon}
              />
            </Col>

            <Col className="brdr-col">
              <Row>
                <Col className="brdr-col-right">
                  <h2 class="fw-semibold">
                    {kTocFunc(weatherData?.main?.temp)}
                  </h2>
                  <div>
                    <p class="text-muted fw-semibold">
                      Feels Like:{" " + kTocFunc(weatherData?.main?.feels_like)}
                    </p>
                  </div>
                </Col>

                <Col>
                  <Row>
                    <p class="text-muted fw-semibold">
                      Min:{" " + kTocFunc(weatherData?.main?.temp_min)}
                    </p>
                  </Row>
                  <hr />
                  <Row>
                    <p class="text-muted fw-semibold">
                      Max:{" " + kTocFunc(weatherData?.main?.temp_max)}
                    </p>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col className="brdr-col-right">
              <Row>
                <p>
                  <span class=" text-start text-muted fw-semibold">
                    Wind Speed:
                  </span>
                  {" " + weatherData?.wind?.speed + " m/s"}
                </p>
              </Row>
              <hr />
              <Row>
                <p>
                  <span class="text-start text-muted fw-semibold">
                    Humidity:
                  </span>
                  {" " + weatherData?.main?.humidity + "%"}
                </p>
              </Row>
              <hr />
              <Row>
                <p>
                  <span class="text-start text-muted fw-semibold">
                    Visibility:
                  </span>
                  {" " + metTokmFunc(weatherData?.visibility) + " Km."}
                </p>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className="mt-5">
            {forcastDates?.map((item) => (
              <Col className="brdr-col">
                <Row>
                  <p className="text-danger text-opacity-75 fw-semibold">
                    {dateFormat(item.day)}
                  </p>
                </Row>
                <Row>
                  <Col>
                    <p class="text-muted fw-semibold">
                      <h4>{item.sky}</h4>
                    </p>
                    <img src={findIcon(item.icon)} alt={item.icon} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <span class="text-muted fw-semibold">Min:</span>
                      {" " + degConvFunc(item.min)}
                    </p>
                    <hr />
                    <p>
                      <span class="text-muted fw-semibold">Max:</span>
                      {" " + degConvFunc(item.max)}
                    </p>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};
