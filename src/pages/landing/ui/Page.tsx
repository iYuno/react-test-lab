import { Suspense, lazy } from "react";
import { createPortal } from "react-dom";

const Faq = lazy(() => import("@/widgets/faq").then(module => ({ default: module.Faq })));
const Instructions = lazy(() => import("@/widgets/instructions").then(module => ({ default: module.Instructions })));
const Reviews = lazy(() => import("@/widgets/reviews").then(module => ({ default: module.Reviews })));
const Survey = lazy(() => import("@/widgets/survey").then(module => ({ default: module.Survey })));
const Welcome = lazy(() => import("@/widgets/welcome").then(module => ({ default: module.Welcome })));
const TestForm = lazy(() => import("@/features/testForm").then(module => ({ default: module.TestForm })));


export function LandingPage() {
  const rootElement = document.getElementById('root');

  return (
    <>
      <main className="z-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Welcome />
          <Instructions />
          <Reviews />
          <Faq />
          <Survey />
          <TestForm />
        </Suspense>
      </main>
      <div className="absolute left-0 right-0 h-screen z-10 bg-primary/80 -mx-[calc(100vw-100%)]" />
      {rootElement && createPortal(<img className="absolute left-0 w-screen h-screen object-cover z-0 " src="bg_main.png" />, rootElement)}
    </>
  );
}
