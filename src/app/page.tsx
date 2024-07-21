"use client";
import { useState } from "react";
import { Button, Card, Link } from "../components/ui";
const introductionText = [
  "Help me visitor, you're my only hope!",
  "I have too many ideas, and I can't decide which one is best...",
  "So now, it's your choice!",
  "Pick my portfolio page",
];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  return (
    <div className="lg w-full flex flex-col justify-center items-center">
      <Card>
        <h1 className="block font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit antialiased">
          {introductionText[textIndex]}
        </h1>
      </Card>
      <Button
        text=""
        onClick={() =>
          textIndex >= introductionText.length - 1
            ? console.log("going to first portfolio page")
            : setTextIndex(textIndex + 1)
        }
      />
      <Link href="/about" text="Oh come on, I've done this already" />
    </div>
  );
}
