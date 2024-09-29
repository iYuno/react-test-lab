export function Footer() {

  return (
    <footer className="flex w-full h-[5.5rem] boredr relative justify-center">
      <span className="h-[1px] inset-x-0 -mx-[calc(100vw-100%)] bg-input-border absolute" />
      <div className="flex self-center items-center gap-2 text-foreground hover:text-primary h-5 transition-colors ease-out">
        <a target="_blank" href="https://github.com/iYuno/react-test-lab" className="text-[18px] text-current no-underline " style={{ fontVariant: "all-small-caps" }}>react testlab</a>
      </div>
    </footer>
  )
}