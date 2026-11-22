import { cn } from "@/utils/clsx"
import { useAppContext } from "../context/Context"

type BannerItem = {
  image: string
  alt: string
  text1: string
  text2: string
  tag?: string
  count: number
  textColor?: "light" | "dark"
}

const bannerData: BannerItem[] = [
  {
    image: "/assets/20261102-rtl-nav-women.webp",
    alt: "Women carrying Coach bags",
    text1: "keep up with",
    text2: "wherever the holidays",
    tag: "@minahasan",
    textColor: "light",
    count: 1,
  },
  {
    image: "/assets/20261102-rtl-nav-gift-recipient.webp",
    alt: "Friends celebrating with Coach bags",
    text1: "the season",
    text2: "take you wear these",
    textColor: "light",
    count: 2,
  },
  {
    image: "/assets/cdz15_b4bk_a0.webp",
    alt: "Coach bag on a light background",
    text1: "it's here",
    text2: "the black friday sale",
    textColor: "dark",
    count: 3
  },
]

const WelcomeBanner = () => {
  const {width} = useAppContext();



  return (
    <section aria-label="Welcome banner" className="w-full bg-white">
      <div className="grid grid-cols-2 py-3 w-full h-full max-[640px]:grid-cols-1">
        {bannerData
          .filter((_, index) => width >= 1024 || index !== 1)
          .map((item) => (
          <article
            className={`relative min-h-[280px] overflow-hidden border border-black/5 bg-neutral-100 sm:min-h-[420px] ${
              item.count === 3 ? "col-span-2 max-[640px]:col-span-1" : ""
            }`}
            key={item.text1}
          >
            <img
              alt={item.alt}
              className="absolute inset-0 h-full w-full object-cover"
              src={item.image}
            />
            <div
              className={
                item.textColor === "dark"
                  ? "absolute inset-0 bg-white/25"
                  : "absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
              }
            />
            <div
              className={`absolute inset-x-0 bottom-45 z-10 flex flex-col px-6 pb-8 ${
                item.textColor === "dark" ? "text-black" : "text-white"
              }`}
            >
                 {item.tag && (
                <span className="absolute -mt-70 -ml-5 uppercase w-fit px-3 py-1 text-[8px]  font-medium tracking-widest text-white">
                  {item.tag}
                </span>
              )}
              <p
                className={cn(
                  "font-bold",
                  item.count === 1
                    ? "text-[30px] text-right mr-3.5 scale-y-[0.7] scale-x-115"
                    :item.count === 2 ?
                    "text-[30px] text-left ml-6 scale-y-[0.7] scale-x-115"
                    : item.count === 3
                      ? "text-[12px] text-left ml-30 uppercase text-[10px]"
                      : "text-left",
                )}
              >
                {item.text1}
              </p>
              <h2
                className={cn(
                  "mt-1 max-w-xl text-[12px] font-medium leading-tight",
                  item.count === 1
                    ? "text-right translate-x-6"
                    :item.count === 2 ? "text-left -ml-4"
                    : item.count === 3
                      ? "text-left ml-40 text-[30px] font-bold capitalize scale-x-115"
                      : "text-left",
                )}
              >
                {item.text2}
              </h2>
             
            </div>
          </article>
          ))}
      </div>
    </section>
  )
}

export default WelcomeBanner
