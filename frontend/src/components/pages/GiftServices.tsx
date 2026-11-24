import { CreditCard, Gift, MessageCircle, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react"
import { Link } from "react-router-dom"

type GiftService = {
  id: number
  title: string
  description: string
  icon: LucideIcon
  image: string
  LinkText: string
  href: string
}

const giftServices: GiftService[] = [
  {
    id: 1,
    title: "Gift packaging",
    image: "https://cms.coach.com/i/coach/20261102-rtl-hp4-bopis?&w=960&fmt=webp&$qlt_high$",
    description: "Add a thoughtful finishing touch to your gift.",
    icon: Gift,
    LinkText: "Find a Store",
    href: "/shop/stores"
  },
  {
    id: 2,
    title: "Personalization",
    image: "https://cms.coach.com/i/coach/20261102-rtl-hp4-monogram?&w=960&fmt=webp&$qlt_high$",
    description: "Explore a personal touch on select pieces.",
    icon: Sparkles,
    LinkText: "Shop Bags",
    href: "/shop/women/handbags/view-all",
  },
  {
    id: 3,
    title: "Gift cards",
    image: "https://cms.coach.com/i/coach/20261028-otl-hp4-gifting-options-d-gift-guide?&w=960&fmt=webp&$qlt_high$",
    description: "Let them choose something they love.",
    icon: CreditCard,
    LinkText: "Explore our Gift Guide",
    href: "/shop/gifts/gift-guide",

  },
  {
    id: 4,
    title: "Gift assistance",
    image: "https://cms.coach.com/i/coach/20261028-otl-hp4-gifting-options-d-gift-cards?&w=960&fmt=webp&$qlt_high$",
    description: "Get help finding a gift for someone special.",
    icon: MessageCircle,
    LinkText: "Shop Gift Cards",
    href: "/support/gift-card"
  },
]

const GiftServices = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const middleGroupRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ pointerId: number; x: number; scrollLeft: number } | null>(
    null,
  )

  useEffect(() => {
    const positionAtMiddle = () => {
      const carousel = carouselRef.current
      const middleGroup = middleGroupRef.current
      if (carousel && middleGroup) {
        carousel.scrollLeft =
          middleGroup.getBoundingClientRect().left -
          carousel.getBoundingClientRect().left +
          carousel.scrollLeft
      }
    }

    positionAtMiddle()
    window.addEventListener("resize", positionAtMiddle)
    return () => window.removeEventListener("resize", positionAtMiddle)
  }, [])

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current
    const middleGroup = middleGroupRef.current
    if (!carousel || !middleGroup) return

    const groupWidth = middleGroup.offsetWidth
    const middleGroupStart =
      middleGroup.getBoundingClientRect().left -
      carousel.getBoundingClientRect().left +
      carousel.scrollLeft
    const positionInMiddle = carousel.scrollLeft - middleGroupStart

    if (positionInMiddle < -groupWidth / 2) {
      carousel.scrollLeft += groupWidth
    } else if (positionInMiddle > groupWidth / 2) {
      carousel.scrollLeft -= groupWidth
    }

    const carouselCenter =
      carousel.getBoundingClientRect().left + carousel.clientWidth / 2
    const cards = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-slide-index]"),
    )
    const nearestCard = cards.reduce<HTMLElement | null>((nearest, card) => {
      if (!nearest) return card
      const nearestCenter =
        nearest.getBoundingClientRect().left + nearest.offsetWidth / 2
      const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2
      return Math.abs(carouselCenter - cardCenter) <
        Math.abs(carouselCenter - nearestCenter)
        ? card
        : nearest
    }, null)

    if (nearestCard) {
      setActiveIndex(Number(nearestCard.dataset.slideIndex))
    }
  }

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const carouselCenter =
      carousel.getBoundingClientRect().left + carousel.clientWidth / 2
    const cards = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-slide-index]"),
    ).filter((card) => Number(card.dataset.slideIndex) === index)
    const target = cards.reduce<HTMLElement | null>((nearestCard, card) => {
      if (!nearestCard) return card
      const nearestCenter =
        nearestCard.getBoundingClientRect().left + nearestCard.offsetWidth / 2
      const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2
      return Math.abs(carouselCenter - cardCenter) <
        Math.abs(carouselCenter - nearestCenter)
        ? card
        : nearestCard
    }, null)

    if (!target) return

    carousel.scrollTo({
      left:
        carousel.scrollLeft +
        target.getBoundingClientRect().left -
        carousel.getBoundingClientRect().left,
      behavior: "smooth",
    })
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return

    dragRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
    event.preventDefault()
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    event.currentTarget.scrollLeft = drag.scrollLeft - (event.clientX - drag.x)
  }

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return
    dragRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const renderCards = () =>
    giftServices.map(({ id, title, description,image, LinkText, href }) => (
      <article
        className="flex min-h-48 w-[78vw] font-helvetica-33 text-[15px] relative max-w-80 shrink-0 flex-col items-start border border-neutral-300 bg-white md:w-auto md:max-w-none"
        data-slide-index={id - 1}
        key={title}
      >
       <img src={image} alt={title} className="w-full h-full"/>
       <div className="absolute inset-x-0 bottom-3 px-4">
        <p className="mt-2 max-w-full whitespace-normal break-words text-[14px] font-bold mr-2 leading-5 text-white/90">
          {description}
        </p>
        <Link className="mt-2 inline-block max-w-full whitespace-normal break-words text-[11px] font-bold leading-5 text-white/95 underline underline-offset-1" to={href}>{LinkText}</Link>
       </div>
        
      </article>
    ))

  return (
    <section aria-labelledby="gift-services-title" className="bg-neutral-50 py-12 font-helvetica-53 font-medium">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col justify-center items-center gap-2">
         
            <p className=" text-[12px] uppercase tracking-[0.18em] text-neutral-600">
              Gift Services
            </p>
            <h2
              className="mt-2 text-xl font-helvetica-63 font-normal tracking-[0.09em]"
              id="gift-services-title"
            >
              Wrap things up.
            </h2>
        </div>

        <div className="hidden grid-cols-4 gap-2 md:grid">
          {renderCards()}
        </div>

        <div
          aria-label="Gift services carousel"
          className="gift-services-viewport overflow-x-auto overflow-y-hidden md:hidden"
          id="gift-services-carousel"
          onPointerCancel={handlePointerEnd}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onScroll={handleCarouselScroll}
          ref={carouselRef}
          role="region"
          tabIndex={0}
        >
          <div className="gift-services-track">
            <div aria-hidden="true" className="gift-services-group">
              {renderCards()}
            </div>
            <div className="gift-services-group" ref={middleGroupRef}>
              {renderCards()}
            </div>
            <div aria-hidden="true" className="gift-services-group">
              {renderCards()}
            </div>
          </div>
        </div>

        <div
          aria-label="Choose a gift service"
          className="mt-5 flex w-[200px] ml-30 md:hidden"
          role="group"
        >
          {giftServices.map((service, index) => (
            <button
              aria-label={`Show ${service.title}`}
              aria-pressed={activeIndex === index}
              className={`h-1 flex-1 transition-colors ${
                activeIndex === index ? "bg-neutral-900" : "bg-neutral-300"
              }`}
              key={service.id}
              onClick={() => goToSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftServices