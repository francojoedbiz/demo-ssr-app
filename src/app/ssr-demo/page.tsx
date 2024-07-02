// src/app/ssr-demo/page.tsx
'use client';
import React, { useState, useEffect } from "react";
type SSRDemoProps = {
  id: string;
};

async function fetchData(id: string): Promise<{ message: string }> {
  const response = await fetch(
    `https://dog.ceo/api/breeds/image/random/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch dog image");
  }
  return response.json();
}

const SSRDemo: React.FC<SSRDemoProps> = ({ id }) => {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      try {
        const newData = await fetchData(id);
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndSetData();
  }, [id]);

  return (
    <div>
      {data ? (
        <>
          <h1>Server-Side Rendering Demo</h1>
          <p>Random Dog Image fetched on the server:</p>
          <img src={data.message} alt="Random Dog" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SSRDemo;
