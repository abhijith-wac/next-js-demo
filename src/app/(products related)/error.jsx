"use client"; // This file must be a Client Component

export default function Error({ error, reset }) {
  return (
    <div>
      <p>Something went wrong: {error.message}</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
