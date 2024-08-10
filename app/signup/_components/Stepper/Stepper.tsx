"use client";
import { useStepper } from "@/app/hooks/useStepper";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import React, { createContext, useCallback, useState } from "react";

type StepsType = {
  label: string;
  content: React.ReactNode;
};

export type StepperType = {
  steps: StepsType[];
};

interface IStepperContext {
  nextStep: () => void;
  previousStep: () => void;
}

export const StepperContext = createContext<IStepperContext>(
  {} as IStepperContext
);


const Stepper = ({ steps }: StepperType) => {
  const [stepIndex, setStepIndex] = useState(0);

  const nextStep = useCallback(() => setStepIndex((prev) => prev + 1), []);
  const previousStep = useCallback(() => setStepIndex((prev) => prev - 1), []);

  return (
    <StepperContext.Provider value={{ nextStep, previousStep }}>
      <div className="w-full h-full flex flex-col gap-3 md:gap-10 lg:gap-5 overflow-y-auto transition-all duration-100">
        <ul className="flex w-full md:w-[90%] lg:w-full mx-auto justify-evenly text-white">
          {steps.map((step, index) => (
            <li
              key={index}
              className={cn(
                "font-normal text-sm md:text-base md:font-semibold tracking-tight md:tracking-wide px-2 py-1 rounded-md shadow-md transition-all cursor-pointer",
                index == stepIndex && "bg-secondary-black"
              )}
            >
              {String(index + 1).padStart(2, "0")}. {step.label}
            </li>
          ))}
        </ul>
        <div>
          {steps[stepIndex].content}
        </div>
      </div>
    </StepperContext.Provider>
  );
};


export function NextStepperButton({disabled = false, isValid }: {disabled?: boolean, isValid: boolean}) {
  return (
    <button
      disabled={disabled || !isValid}
      type="submit"
      onClick={() => {}}
      className="w-fit transition-all duration-200 bg-terciary-green text-black p-3 rounded-md font-bold hover:bg-secondary-green disabled:bg-terciary-green/20"
    >
      {disabled ? <LoaderCircle className="mx-auto w-7 h-7 animate-spin"/> : "Próximo"}
    </button>
  );
}

export function PrevStepperButton() {
  const { previousStep } = useStepper();
  return (
    <button type="button" onClick={previousStep} className="transition-all duration-200 bg-secondary-black text-white p-3 rounded-md font-bold hover:bg-white/10">
      Anterior
    </button> 
  )
}

export default Stepper;
