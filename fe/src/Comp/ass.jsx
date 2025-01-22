import React, { useState, useEffect } from "react";

function Ass() {
    const [data, setData] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/data");
            const result = await response.json();
            setData({
                name: result.Name,
                age: result.Age,
                date: result.Date,
                programming: result.programming,
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(fetchData, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="Ass">
            <header className="Ass-header">
                <h1>React and Flask</h1>
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>
            </header>
        </div>
    );
}

export default Ass;
