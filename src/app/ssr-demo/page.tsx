// src/app/ssr-demo/page.tsx
import React from "react";
import ClientComponent from "../../components/ClientComponent";

type Data = {
  message: string;
};

async function fetchDogImage(): Promise<Data> {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!response.ok) {
    throw new Error("Failed to fetch dog image");
  }
  return response.json();
}

const SSRDemo = async () => {
  const data = await fetchDogImage();

  return (
    <div>
      <h1>Server-Side Rendering Demo</h1>
      <p>Random Dog Image fetched on the server:</p>
      <img src={data.message} alt="Random Dog" />
      <ClientComponent serverMessage={data.message} />
    </div>
  );
};

export default SSRDemo;
