import { Button } from "@/components/ui/button";
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
function App() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(date) => date < new Date()}
      className="rounded-md border"
    />
    </div>
  );
}

export default App;
