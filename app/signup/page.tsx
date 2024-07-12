import Image from "next/image";
import FormSignUp from "./_components/FormSignUp";
import Stepper, { StepperType } from "./_components/Stepper/Stepper";

const SignUp = () => {
  const steps: StepperType = {
    steps: [
      { label: "Conta", content: <FormSignUp /> },
      { label: "Infos", content: "Info" },
      { label: "Pagamento", content: "Pags" }
    ]
  }

  return (
    <main className="bg-main-black flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center h-screen p-3 md:p-5">
      <aside className="hidden h-full w-[30%] bg-white/10 lg:flex justify-center items-center rounded-3xl">
        <div className="w-[248px] h-[203px] relative">
          <Image alt="Logo CutNow" fill src="/logo.svg" className="object-fill"/>
        </div>
      </aside>
      <aside className="hidden md:block lg:hidden w-[95px] h-[78px] relative">
        <Image alt="Logo CutNow" fill src="/logo.svg" className="object-fill"/>
      </aside>
      <section className="w-full lg:w-[67%] h-full bg-white/10 rounded-3xl  py-4 px-5 md:px-12">
        <Stepper steps={steps.steps}/>
      </section>
    </main>
  )
}

export default SignUp;