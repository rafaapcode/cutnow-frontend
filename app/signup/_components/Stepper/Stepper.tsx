"use client";
import { cn } from "@/app/lib/utils";
import React, { createContext, useContext, useState } from "react";

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

  const nextStep = () => setStepIndex((prev) => prev + 1);
  const previousStep = () => setStepIndex((prev) => prev - 1);

  return (
    <StepperContext.Provider value={{ nextStep, previousStep }}>
      <div className="w-full h-full flex flex-col gap-3 md:gap-10 lg:gap-5 overflow-y-auto transition-all duration-100">
        <ul className="flex w-[90%] mx-auto justify-evenly">
          {steps.map((step, index) => (
            <li
              key={index}
              className={cn(
                "font-semibold tracking-wide px-2 py-1 rounded-md shadow-md transition-all cursor-pointer",
                index == stepIndex && "bg-secondary-black"
              )}
            >
              {String(index + 1).padStart(2, "0")}. {step.label}
            </li>
          ))}
        </ul>
        {steps[stepIndex].content}
      </div>
    </StepperContext.Provider>
  );
};


export function NextStepperButton({preventDefault = false, disabled = false }: {preventDefault?: boolean, disabled?: boolean}) {
  const { nextStep } = useContext(StepperContext);
  return (
    <button
      disabled={disabled}
      type="submit"
      onClick={!preventDefault ? nextStep : undefined}
      className="transition-all duration-200 bg-terciary-green text-black p-3 rounded-md font-bold hover:bg-secondary-green disabled:bg-terciary-green/20"
    >
      Próxima
    </button>
  );
}

export function PrevStepperButton() {
  const { previousStep } = useContext(StepperContext);
  return (
    <button type="button" onClick={previousStep} className="transition-all duration-200 bg-secondary-black text-white p-3 rounded-md font-bold hover:bg-white/10">
      Anterior
    </button> 
  )
}

export default Stepper;
