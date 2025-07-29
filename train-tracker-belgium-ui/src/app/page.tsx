"use client";

import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Welcome to Train Tracker Belgium</h1>
      <Button onClick={() => alert('Button clicked!')}>Get Started</Button>
    </>
  );
}
