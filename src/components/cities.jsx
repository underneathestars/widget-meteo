import "./cities.css"

const data = ["Buccheri", "Buscemi", "Ferla", "Palazzolo Acreide", "Siracusa", "Avola", "Canicattini", "Cassaro", "Monterosso", "Cassibile", "Floridia", "Augusta", "Solarino", "Sortino"];

export const Cities = (props) => {
    const cityChange = (event) => {
        const selected = event.target.value;
        props.notify(selected);
    };

    return (
        <section className="citiesMenu">
            <select onChange={cityChange}>
                {data.map((item, index) => (
                    <option key={index} value={item.toLowerCase()}>{item}
                    </option>
                ))}
            </select>
        </section>
    );
};

