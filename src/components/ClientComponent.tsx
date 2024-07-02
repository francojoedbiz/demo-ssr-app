// src/components/ClientComponent.tsx
import React, { useState } from 'react';
import Link from 'next/link';

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
      <br />
      <Link href={`/ssr-demo/${count}`}>
        <a>Load SSR Demo with ID {count}</a>
      </Link>
    </div>
  );
};

export default ClientComponent;
