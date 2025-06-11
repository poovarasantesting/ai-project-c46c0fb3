import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { X, Divide, Minus, Plus, Equal, Delete, RotateCcw } from "lucide-react";

export function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [resetDisplay, setResetDisplay] = useState(false);
  const { toast } = useToast();

  const handleNumberInput = (number: string) => {
    if (display === "0" || resetDisplay) {
      setDisplay(number);
      setResetDisplay(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleDecimal = () => {
    if (resetDisplay) {
      setDisplay("0.");
      setResetDisplay(false);
      return;
    }
    
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setPreviousValue(result);
      setDisplay(String(result));
    }
    
    setOperation(op);
    setResetDisplay(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "×":
        return prev * current;
      case "÷":
        if (current === 0) {
          toast({
            title: "Error",
            description: "Division by zero is not allowed",
            variant: "destructive"
          });
          return prev;
        }
        return prev / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (previousValue === null || operation === null) return;
    
    const currentValue = parseFloat(display);
    const result = calculate(previousValue, currentValue, operation);
    
    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setResetDisplay(false);
  };

  const handleDelete = () => {
    if (display.length === 1 || (display.length === 2 && display.startsWith("-"))) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
      <div className="p-6 bg-gray-800 text-white">
        <div className="text-right text-4xl font-medium truncate h-16 flex items-center justify-end">
          {display}
        </div>
        <div className="text-right text-gray-400 text-sm h-5">
          {previousValue !== null ? `${previousValue} ${operation}` : ""}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-1 p-2 bg-gray-100">
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium bg-gray-200 hover:bg-gray-300"
          onClick={handleClear}
        >
          <RotateCcw size={18} />
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium bg-gray-200 hover:bg-gray-300"
          onClick={handleDelete}
        >
          <Delete size={18} />
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium bg-gray-200 hover:bg-gray-300"
          onClick={() => handleOperation("÷")}
        >
          <Divide size={18} />
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium bg-gray-200 hover:bg-gray-300"
          onClick={() => handleOperation("×")}
        >
          <X size={18} />
        </Button>
        
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("7")}
        >
          7
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("8")}
        >
          8
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("9")}
        >
          9
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium bg-gray-200 hover:bg-gray-300"
          onClick={() => handleOperation("-")}
        >
          <Minus size={18} />
        </Button>
        
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("4")}
        >
          4
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("5")}
        >
          5
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("6")}
        >
          6
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium bg-gray-200 hover:bg-gray-300"
          onClick={() => handleOperation("+")}
        >
          <Plus size={18} />
        </Button>
        
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("1")}
        >
          1
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("2")}
        >
          2
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={() => handleNumberInput("3")}
        >
          3
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium row-span-2 bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handleEquals}
        >
          <Equal size={18} />
        </Button>
        
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium col-span-2"
          onClick={() => handleNumberInput("0")}
        >
          0
        </Button>
        <Button 
          variant="outline" 
          className="aspect-square text-lg font-medium"
          onClick={handleDecimal}
        >
          .
        </Button>
      </div>
    </div>
  );
}