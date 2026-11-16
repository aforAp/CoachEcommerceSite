import { useState } from "react"
import { cn } from "../utils/clsx"

const NavBar = () => {
  const [activeBrand, setActiveBrand] = useState<"coach" | "outlet">("outlet")

  const tabClass =
    "relative mt-3 flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-t-[10px] border-0 text-[#111] transition-colors duration-[140ms] focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-white"
  const activeTabClass =
    "bg-white before:absolute before:bottom-0 before:-left-[10px] before:size-[10px] before:rounded-br-[10px] before:shadow-[5px_5px_0_5px_white] before:content-[''] after:absolute after:right-[-10px] after:bottom-0 after:size-[10px] after:rounded-bl-[10px] after:shadow-[-5px_5px_0_5px_white] after:content-['']"
  const inactiveTabClass =
    "bg-transparent text-white hover:bg-white hover:text-[#111] hover:before:absolute hover:before:bottom-0 hover:before:-left-[10px] hover:before:size-[10px] hover:before:rounded-br-[10px] hover:before:shadow-[5px_5px_0_5px_white] hover:before:content-[''] hover:after:absolute hover:after:right-[-10px] hover:after:bottom-0 hover:after:size-[10px] hover:after:rounded-bl-[10px] hover:after:shadow-[-5px_5px_0_5px_white] hover:after:content-['']"

  return (
    <header className="h-[44px] bg-[#333]">
      <div className="mx-auto flex h-full w-full max-w-[600px] items-center justify-center max-[640px]:justify-between max-[640px]:gap-2 max-[640px]:px-3">
        <nav
          className="mx-auto flex h-full w-full max-w-[424px] gap-8 max-[640px]:mx-0 max-[640px]:w-auto max-[640px]:max-w-none max-[640px]:flex-1 max-[640px]:gap-6"
          aria-label="Brand selection"
        >
          <button
            aria-pressed={activeBrand === "coach"}
            className={`${tabClass} w-[158px] max-[640px]:w-auto max-[640px]:min-w-0 max-[640px]:flex-[2] ${activeBrand === "coach" ? activeTabClass : inactiveTabClass}`}
            onClick={() => setActiveBrand("coach")}
            type="button"
          >
            <span className={cn("brand-logo-text", "text-[18px] mt-[8px]")}>
              COACH
            </span>
          </button>
          <button
            aria-pressed={activeBrand === "outlet"}
            className={`${tabClass} w-[234px] max-[640px]:w-auto max-[640px]:min-w-0 max-[640px]:flex-[3] ${activeBrand === "outlet" ? activeTabClass : inactiveTabClass}`}
            onClick={() => setActiveBrand("outlet")}
            type="button"
          >
            <span className={cn("brand-logo-text", "text-[18px] mt-[6px]")}>
              COACH
            </span>
            <span className="mt-2 text-[16px] leading-none font-normal -ml-2 scale-75 tracking-[0.04em] max-[640px]:text-[13px]">
              OUTLET
            </span>
          </button>
        </nav>
        <div className="hidden shrink-0 items-center gap-2 max-[640px]:flex">
          <button
            aria-label="Shopping bag, 0 items"
            className="relative grid size-8 place-items-center text-white"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="size-[21px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M5.5 8h13l1 12h-15l1-12Z" strokeLinejoin="round" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" strokeLinecap="round" />
            </svg>
            <span className="absolute right-0 top-1 grid size-[15px] place-items-center rounded-full border border-white bg-emerald-400 text-[9px] leading-none font-semibold text-[#111]">
              0
            </span>
          </button>
          <button
            aria-label="Open menu"
            className="grid size-8 place-items-center text-white"
            type="button"
          >
           <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M10 12H3" />
  <path d="M13 19 L3 19" />
  <path d="M13.5 5 L3 5" />
  <path d="M15 19.5 L17.5 13.064" />
  <path d="M17.5 13.064 A4.67 4.67 0 0 1 18.264 4" />
  <path d="M19.5 3.877 A4.86 4.86 0 0 1 18.5 13.333" />
  <path d="M33.736 7.614 A3.35 3.35 0 0 1 30.236 6.969" />
</svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar
