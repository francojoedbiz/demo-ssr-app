// src/components/ClientComponent.tsx
"use client";

import React, { useState } from "react";

type ClientComponentProps = {
  serverMessage: string;
};

const ClientComponent: React.FC<ClientComponentProps> = ({ serverMessage }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Client-Side Component</h2>
      <p>Server Message: {serverMessage}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ClientComponent;
