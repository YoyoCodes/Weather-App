import React from "react";

const Weather = (props) => {
    return (
      <div className="weather-info">
        { props.city && props.country &&
          <p className="weather-key">
            Location:
            <span className="weather-value">{props.city}, {props.country}</span>
          </p>
        }
        { props.temperature &&
          <p className="weather-key">
            Temperature:
            <span className="weather-value">{props.temperature}</span>
          </p>
        }
        { props.humidity &&
          <p className="weather-key">
            Humidity:
            <span className="weather-value">{props.humidity}</span>
          </p>
        }
        { props.conditions &&
          <p className="weather-key">
            Conditions:
            <span className="weather-value">{props.conditions}</span>
          </p>
        }
        { props.description &&
          <p className="weather-key">
            Description:
            <span className="weather-value">{props.description}</span>
          </p>
         }
        { props.error &&
          <p>
            {props.error}
          </p>
        }
      </div>
    );
}

export default Weather;
