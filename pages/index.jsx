import { Header } from "@/components/header";
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

      <Header className="text-white"></Header>
    </div>
  );
}
