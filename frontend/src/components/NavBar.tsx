import { useCallback, useState } from "react"
import { Menu } from "lucide-react"
import BrandSelector from "./BrandSelector"
import type { ActiveBrand } from "./BrandSelector"
import Sheet from "./pages/Sheet"

const NavBar = () => {
  const [activeBrand, setActiveBrand] = useState<ActiveBrand>("outlet")
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const closeSheet = useCallback(() => setIsSheetOpen(false), [])

  return (
    <>
      <header className="h-[44px] bg-[#333]">
        <div className="mx-auto flex h-full w-full max-w-[600px] items-center justify-center max-[640px]:justify-between max-[640px]:gap-2 max-[640px]:px-3">
          <BrandSelector
            activeBrand={activeBrand}
            onChange={setActiveBrand}
          />
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
              onClick={() => setIsSheetOpen(true)}
              type="button"
            >
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </header>
      <Sheet
        activeBrand={activeBrand}
        isOpen={isSheetOpen}
        onBrandChange={setActiveBrand}
        onClose={closeSheet}
      />
    </>
  )
}

export default NavBar
