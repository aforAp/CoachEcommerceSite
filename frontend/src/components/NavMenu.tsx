import { useState } from "react"
import type { NavMenuConfig } from "./navMenuData"

type NavMenuProps = {
  menu: NavMenuConfig
}

const NavMenu = ({ menu }: NavMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    menu.initialCategory ?? null,
  )
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const category = menu.categories.find(({ label }) => label === activeCategory)
  const activeLinkData = category?.links?.find(({ label }) => label === activeLink)
  const displayImage = activeLinkData?.image ?? category?.image ?? menu.image

  const selectCategory = (label: string) => {
    setActiveCategory(label)
    setActiveLink(null)
  }

  const showImage =
    activeLinkData?.image !== undefined ||
    category?.image !== undefined ||
    (menu.image !== undefined &&
      ((activeCategory === null && menu.showImageInitially) ||
        menu.imageCategoryLabels?.includes(activeCategory ?? "") ||
        menu.imageLinkLabels?.includes(activeLink ?? "")))

  const layoutClass = menu.centered
    ? "mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-[1200px] grid-cols-[minmax(190px,0.9fr)_minmax(190px,0.9fr)_minmax(280px,1.4fr)] items-center gap-8 px-8 py-8 [font-family:Garamond,serif] max-[700px]:grid-cols-[minmax(130px,0.8fr)_minmax(0,1.2fr)] max-[700px]:gap-5 max-[500px]:grid-cols-1 max-[500px]:px-6"
    : "grid min-h-[calc(100vh-9rem)] w-full grid-cols-[minmax(160px,0.8fr)_minmax(200px,1fr)_minmax(0,2.4fr)] gap-8 px-10 py-8 [font-family:Garamond,serif] max-[700px]:grid-cols-[minmax(130px,0.8fr)_minmax(0,1.2fr)] max-[700px]:gap-5 max-[500px]:grid-cols-1 max-[500px]:px-6"

  return (
    <section
      aria-label={menu.ariaLabel}
      className={layoutClass}
    >
      <nav
        aria-label={`${menu.label} categories`}
        className={`flex flex-col gap-3 ${menu.centered ? "items-center text-center" : "items-start"}`}
      >
        {menu.categories.map(({ label, href }) => (
          <h1 className="m-0 text-lg font-normal leading-tight" key={label}>
            {href ? (
              <a
                aria-current={activeCategory === label ? "true" : undefined}
                className={`cursor-pointer transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${menu.centered ? "text-center" : "text-left"}`}
                href={href}
                onFocus={() => selectCategory(label)}
                onMouseEnter={() => selectCategory(label)}
              >
                {label}
              </a>
            ) : (
              <button
                aria-pressed={activeCategory === label}
                className={`cursor-pointer transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${menu.centered ? "text-center" : "text-left"}`}
                onFocus={() => selectCategory(label)}
                onMouseEnter={() => selectCategory(label)}
                type="button"
              >
                {label}
              </button>
            )}
          </h1>
        ))}
      </nav>

      <div
        aria-live="polite"
        className={`flex flex-col gap-4 pt-1 ${menu.centered ? "items-center text-center" : "items-start"}`}
      >
        {category?.links?.map(({ label, href }) => (
          <a
            className="text-sm underline-offset-4 hover:underline focus-visible:underline"
            href={href}
            key={label}
            onFocus={() => setActiveLink(label)}
            onMouseEnter={() => setActiveLink(label)}
          >
            {label}
          </a>
        ))}
      </div>

      <div className="flex min-w-0 justify-center max-[700px]:col-span-2 max-[500px]:col-span-1">
        {showImage && displayImage && (
          <img
            alt={displayImage.alt}
            className={
              displayImage.css ??
              "block w-full h-auto object-contain object-top"
            }
            src={displayImage.src}
          />
        )}
      </div>
    </section>
  )
}

export default NavMenu
