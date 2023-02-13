const DetailsComponent = (props) => {
  return (
    <>
      {props.weatherObj && (
        <>
          <div className="detail-wrapper mt-5">
            <h1 className="animation">{props.weatherObj.name.toUpperCase()}</h1>
            <h5>TODAY: {props.weatherArray.description.toUpperCase()}</h5>
            <div
              className="d-flex justify-content-between "
              id={props.weatherArray.main}
            >
              <div>
                <p>Temp-now: {parseInt(props.weatherMain.temp_max)} °</p>
                <p>Low: {parseInt(props.weatherMain.temp_min)} °</p>
                <p>High: {parseInt(props.weatherMain.temp_max)} °</p>
                <p>Feels like: {parseInt(props.weatherMain.feels_like)} °</p>
              </div>
              <div>
                <p>Humidity: {props.weatherMain.humidity}</p>
                <p>Pressure: {props.weatherMain.pressure}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsComponent;
