import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import Navbar from "./features/Navbar";
function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
    </div>
  );
}

export default App;
