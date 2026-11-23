import { useLayoutEffect, useRef, useState } from "react"
import { MessageSquare, Package, Plus, Search,  X } from "lucide-react"
import type { ActiveBrand } from "../BrandSelector"
import BrandSelector from "../BrandSelector"
import { navMenus } from "../navMenuData"
import {
  Sheet as ShadcnSheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetFooter
} from "@/components/ui/sheet"
import CountryFlag from "../CountryFlag"
import personIcon from "../../../public/personIcon.svg";
import { useNavigate } from "react-router-dom"

type SheetProps = {
  activeBrand: ActiveBrand
  isOpen: boolean
  onBrandChange: (brand: ActiveBrand) => void
  onClose: () => void
}

const menuTabs = [
  { key: "women", label: "Women" },
  { key: "men", label: "Men" },
  { key: "bags", label: "Bags" },
  { key: "new", label: "New" },
  { key: "gifts", label: "Gifts" },
  { key: "sale", label: "Sale" },
  { key: "coachtopia", label: "Coachtopia" },
] as const

type MenuKey = (typeof menuTabs)[number]["key"]

const Sheet = ({
  activeBrand,
  isOpen,
  onBrandChange,
  onClose,
}: SheetProps) => {
  const [activeMenu, setActiveMenu] = useState<MenuKey>("women")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 })
  const menuNavRef = useRef<HTMLElement | null>(null);
  const menuTabRefs = useRef<Partial<Record<MenuKey, HTMLButtonElement>>>({})
  const menu = navMenus[activeMenu]
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isOpen) return

    const updateIndicator = () => {
      const tab = menuTabRefs.current[activeMenu]
      if (!tab) return
      setActiveIndicator({ left: tab.offsetLeft, width: tab.offsetWidth })
    }

    updateIndicator()
    window.addEventListener("resize", updateIndicator)
    return () => window.removeEventListener("resize", updateIndicator)
  }, [activeMenu, isOpen])


  
  return (
    <ShadcnSheet
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
      open={isOpen}
    >
      <SheetContent
        className="!inset-0 !h-dvh !w-full !max-w-none !gap-0 !border-0 !bg-white !p-0 !text-[#111] !shadow-none data-starting-style:delay-100 data-ending-style:delay-300"
        side="right"
        showCloseButton={false}
      >
        <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
        <div className="flex h-full min-h-0 flex-col">
          <header className="flex h-11 shrink-0 items-center justify-between bg-[#333] pr-3">
        <BrandSelector
          activeBrand={activeBrand}
          onChange={onBrandChange}
          variant="sheet"
        />
            <SheetClose
              render={
                <button
                  aria-label="Close menu"
                  className="grid size-9 shrink-0 place-items-center text-white focus-visible:outline-2 focus-visible:outline-white"
                  type="button"
                />
              }
            >
              <X aria-hidden="true" className="size-6" />
            </SheetClose>
      </header>

      <div className="shrink-0 px-4 pt-4">
        <label className="flex h-11 items-center gap-3 rounded-full border border-neutral-300 px-4">
          <Search aria-hidden="true" className="size-5 shrink-0 text-neutral-700" />
          <input
            aria-label="Search"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-500"
            placeholder="Search"
            type="search"
          />
        </label>

        <nav
          aria-label="Shop categories"
          className="relative mt-4 flex gap-5 overflow-x-auto border-b border-neutral-300"
          ref={menuNavRef}
        >
          {menuTabs.map(({ key, label }) => (
            <button
              aria-pressed={activeMenu === key}
              className={`w-fit shrink-0 pb-1 text-sm uppercase tracking-wide transition-colors duration-200 ${
                activeMenu === key
                  ? "text-black"
                  : "text-neutral-500"
              }`}
              key={key}
              ref={(element) => {
                if (element) menuTabRefs.current[key] = element
                else delete menuTabRefs.current[key]
              }}
              onClick={() => {
                setActiveMenu(key)
                setExpandedCategory(null)
              }}
              type="button"
            >
              {label}
            </button>
          ))}
          <span
            aria-hidden="true"
            className="mobile-nav-indicator pointer-events-none absolute bottom-0 left-0 h-0.5 bg-black"
            style={{
              width: `${activeIndicator.width}px`,
              transform: `translateX(${activeIndicator.left}px)`,
            }}
          />
        </nav>
      </div>

      <main className="mt-1 min-h-0 flex-1 overflow-y-auto px-4 pb-5">
        <ul aria-label={`${menu.label} categories`} className="divide-y divide-neutral-200">
          {menu.categories.map((category) => {
            const isExpanded = expandedCategory === category.label
            const hasSubcategories = Boolean(category.links?.length)

            return (
              <li key={category.label}>
                <div className="flex min-h-12 items-center justify-between gap-4 py-2">
                  {category.href ? (
                    <a
                      className="flex-1 py-1 text-[15px]"
                      href={category.href}
                    >
                      {category.label}
                    </a>
                  ) : (
                    <button
                      aria-expanded={hasSubcategories ? isExpanded : undefined}
                      className="flex-1 py-1 text-left text-[15px]"
                      onClick={() => {
                        if (hasSubcategories) {
                          setExpandedCategory(isExpanded ? null : category.label)
                        }
                      }}
                      type="button"
                    >
                      {category.label}
                    </button>
                  )}
                  {hasSubcategories && (
                    <button
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${category.label}`}
                      aria-controls={`${activeMenu}-${category.label.replace(/\s+/g, "-").toLowerCase()}`}
                      className="grid size-9 shrink-0 place-items-center"
                      onClick={() =>
                        setExpandedCategory(isExpanded ? null : category.label)
                      }
                      type="button"
                    >
                      <Plus
                        aria-hidden="true"
                        className={`size-5 transition-transform ${isExpanded ? "rotate-45" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {isExpanded && category.links && (
                  <ul
                    className="flex flex-col gap-3 pb-4 pl-4 text-sm text-neutral-600"
                    id={`${activeMenu}-${category.label.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {category.links.map((link) => (
                      <li key={link.label}>
                        <a className="inline-block py-1" href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </main>

      <SheetFooter className="h-[80px]">
        <div className="flex justify-center gap-20 py-4">
          <button className="flex flex-col items-center gap-1 text-xs" type="button">
            <img src={personIcon} alt="this is the person" />
            Login
          </button>
          <div className="mt-2" onClick={() => navigate('/country-selector')}>
          <CountryFlag country="us" />
          <span>$USD</span>
        </div>
        <div>
          <Package className="ml-3.5"/>
        <span>Track Order</span>
        </div>
         <div>
          <MessageSquare />
        <span>Help</span>
        </div>
       
        </div>
        
      </SheetFooter>
        </div>
      </SheetContent>
    </ShadcnSheet>
  )
}

export default Sheet
