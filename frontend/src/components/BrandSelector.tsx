import { cn } from "../utils/clsx"

export type ActiveBrand = "coach" | "outlet"

type BrandSelectorProps = {
  activeBrand: ActiveBrand
  onChange: (brand: ActiveBrand) => void
  variant?: "navbar" | "sheet"
}

const BrandSelector = ({
  activeBrand,
  onChange,
  variant = "navbar",
}: BrandSelectorProps) => {
  const isSheet = variant === "sheet"
  const tabClass =
    "relative mt-3 flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-t-[10px] border-0 text-[#111] transition-colors duration-[140ms] focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-white max-[640px]:w-auto max-[640px]:min-w-0 max-[640px]:max-w-[200px] max-[640px]:justify-start max-[640px]:pl-3"
  const activeTabClass =
    "bg-white text-center before:absolute before:bottom-0 before:-left-[10px] before:size-[10px] before:rounded-br-[5px] before:shadow-[5px_5px_0_5px_white] before:content-[''] after:absolute after:right-[-10px] after:bottom-0 after:size-[10px] after:rounded-bl-[5px] after:shadow-[-5px_5px_0_5px_white] after:content-['']"
  const inactiveTabClass =
    "bg-transparent text-white hover:bg-white hover:text-[#111] hover:before:absolute hover:before:bottom-0 hover:before:-left-[10px] hover:before:size-[10px] hover:before:rounded-br-[5px] hover:before:shadow-[5px_5px_0_5px_white] hover:before:content-[''] hover:after:absolute hover:after:right-[-10px] hover:after:bottom-0 hover:after:size-[10px] hover:after:rounded-bl-[5px] hover:after:shadow-[-5px_5px_0_5px_white] hover:after:content-['']"

  return (
    <nav
      aria-label="Brand selection"
      className={
        isSheet
          ? "flex h-full items-center gap-2"
          : "mx-auto flex h-full w-full max-w-[424px] gap-8 max-[640px]:mx-0 max-[640px]:w-auto max-[640px]:max-w-none max-[640px]:flex-1 max-[640px]:gap-6"
      }
    >
      <button
        aria-pressed={activeBrand === "coach"}
        className={cn(
          tabClass,
          isSheet ? "w-auto max-[640px]:flex-none" : "w-[158px] max-[640px]:flex-none",
          activeBrand === "coach" ? activeTabClass : inactiveTabClass,
        )}
        onClick={() => onChange("coach")}
        type="button"
      >
        <span
          className={cn(
            "brand-logo-text",
            "md:text-[18px] !md:mt-[8px]",
            "max-[640px]:mr-2",
          )}
        >
          COACH
        </span>
      </button>
      <button
        aria-pressed={activeBrand === "outlet"}
        className={cn(
          tabClass,
          isSheet
            ? "w-auto max-[640px]:flex-none"
            : "md:w-[204px] sm:w-full max-[640px]:flex-none",
          activeBrand === "outlet" ? activeTabClass : inactiveTabClass,
        )}
        onClick={() => onChange("outlet")}
        type="button"
      >
        <span className="brand-logo-text md:text-[18px]">COACH</span>
        <span className="mt-[1.5px] scale-75 text-[16px] leading-none font-normal tracking-[0.04em] max-sm:text-[13px] md:-ml-[20px]">
          OUTLET
        </span>
      </button>
    </nav>
  )
}

export default BrandSelector
