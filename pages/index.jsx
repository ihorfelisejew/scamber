import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://scamber-api/api/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);
  return (
    <div>
      <Head>
        <title>Scamber</title>
      </Head>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.car_id}>
            <p>Car Model: {car.car_model}</p>
            <p>Price: {car.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
