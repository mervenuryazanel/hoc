import React, { useEffect, useState } from 'react';

const HOC = (WrappedComponent, entity) => {
 
    return function InnerComponent() {
        const [data, setData] = useState([]);
        const [term, setTerm] = useState("");

        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                setData(json);
            }

            fetchData();
        }, [])
        

        let filteredData = data.slice(0, 10).filter((d) => {
            if (entity === "users") {
                const { name } = d;
                return name.indexOf(term) >= 0;
            }
            if (entity === "todos") {
                const { title } = d;
                return title.indexOf(term) >= 0;
            }
        })

        return (
            <div>
                <h2>{entity}</h2>
                <input
                    type="text"
                    value={term}
                    onChange={(e) => {
                        setTerm(e.target.value);
                    }}
                />
                <WrappedComponent data={filteredData}>

                </WrappedComponent>
            </div>
        )
    }
   
}

export default HOC;