import { createPortal } from "react-dom";
import { Faq } from "@/widgets/faq";
import { Instructions } from "@/widgets/instructions";
import { Reviews } from "@/widgets/reviews";
import { Survey } from "@/widgets/survey";
import { Welcome } from "@/widgets/welcome";
import { TestForm } from "@/features/testForm";



export function LandingPage() {

  const rootElement = document.getElementById('root');

  return (
    <>
      <main className="z-20">
        <Welcome />
        <Instructions />
        <Reviews />
        <Faq />
        <Survey />
        <TestForm />
      </main>
      <div className="absolute left-0 right-0 h-screen z-10 bg-primary/80 -mx-[calc(100vw-100%)]" />
      {rootElement && createPortal(<img className="absolute left-0 w-screen h-screen object-cover z-0 " src="bg_main.png" />, rootElement)}
    </>
  )
}