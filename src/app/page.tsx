"use client";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
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
      <div style={{ maxWidth: 500, height: 400 }}>
        <Card
          leftCta={
            <Button
              onClick={() =>
                textIndex <= 0
                  ? console.log("can't go further back")
                  : setTextIndex(textIndex - 1)
              }
            >
              <IconArrowNarrowLeft />
            </Button>
          }
          rightCta={
            <Button
              onClick={() =>
                textIndex >= introductionText.length - 1
                  ? console.log("going to second portfolio page")
                  : setTextIndex(textIndex + 1)
              }
            >
              <IconArrowNarrowRight />
            </Button>
          }
        >
          <h1 className="block font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit antialiased">
            {introductionText[textIndex]}
          </h1>
        </Card>
      </div>

      <Link href="/about" text="Oh come on, I've done this already" />
    </div>
  );
}
