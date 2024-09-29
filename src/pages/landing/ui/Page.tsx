import { Faq } from "@/widgets/faq";
import { Instructions } from "@/widgets/instructions";
import { Reviews } from "@/widgets/reviews";
import { Survey } from "@/widgets/survey";
import { Welcome } from "@/widgets/welcome";
import { TestForm } from "@/features/testForm";



export function LandingPage() {

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
      <div className="absolute left-0 right-0 h-screen z-10 bg-primary/80" />
      <img className="absolute left-0 w-screen h-screen object-cover z-0" src="public\bg_main.png" />
    </>
  )
}