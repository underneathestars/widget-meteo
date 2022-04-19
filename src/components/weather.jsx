import './weather.css'

export const Weather = (props) => {
    const location = props.location;
    const temp = props.temp;
    const status = props.status;
    const realfeel = props.realfeel;
    const icon = props.icon;
    const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <section className="weather-container">
            <ul className="weather-list">
                <li>Città: {location}</li>
                <li>Temperatura: {temp} °C</li>
                <li>Temperatura percepita: {realfeel} °C </li>
                <li>Condizioni atmosferiche: <br></br>{status}</li> 
            </ul>
            <img src= {imgUrl} alt="icona meteo" />
        </section>
    )
}