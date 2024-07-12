import { useContext } from "react";
import { StepperContext } from "../signup/_components/Stepper/Stepper";

export const useStepper = () => {
  return useContext(StepperContext);
}
