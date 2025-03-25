import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Home(props) {
  return (
    <Card className="flex flex-col justify-center w-[350px] bg-black text-white py-8 px-4 rounded-lg shadow-lg">
      <p className="text-2xl font-bold text-center mb-8">
        Welcome to Day Seven Chat App
      </p>
      <Button onClick={props.googleSignIn} className="border flex gap-2 cursor-pointer">
        <img src="src/assets/google.png" className="w-5" alt="" /> Sign in with
        Google
      </Button>
    </Card>
  );
}
