import { Link } from "react-router-dom"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const carouselData = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1559563458-527698bf5295",
  },
  {
    id: 3,
    type: "video",
    src: "https://content.pexels.com/aigc-bundle/videos/35bee9ee-f41f-4274-a0a2-0eacb919852e.mp4",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1696192505937-08400f91e631",
  },
  {
    id: 5,
    type: "video",
    src: "https://content.pexels.com/aigc-bundle/videos/35bee9ee-f41f-4274-a0a2-0eacb919852e.mp4",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1570431118100-c24a54fdeab0",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1575908539614-ff89490f4a78",
  },
  {
    id: 8,
    type: "video",
    src: "https://static.pxlecdn.com/photos/792206296/original/767f942f54bd5c6d55f4.mp4",
  },
  {
    id: 9,
    type: "image",
    src: "https://images.unsplash.com/photo-1762587596660-738308fe432e",
  },
  {
    id: 10,
    type: "image",
    src: "https://images.unsplash.com/photo-1575908539614-ff89490f4a78",
  },
]
const LookGoodToGether = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-helvetica-73 text-2xl mt-2">We look good together.</h1>
      <h2 className="font-helvetica-53 mt-2">Keep carrying (and tagging) @coach #CoachNY</h2>
      <div className="flex gap-6 mt-2">
          <Link to="/shop/women/handbags/view-all" className="font-helvetica-53 text-sm underline underline-offset-5">
      Shop All Bags
      </Link>
      <Link to="/social-gallery" className="font-helvetica-53 text-sm underline underline-offset-5">
      Social Gallery
      </Link>
      <div className="mt-10" />
      </div>
      <Carousel className="mt-6 w-full max-w-5xl">
        <CarouselContent>
          {carouselData.map((item) => (
            <CarouselItem key={item.id} className="basis-full md:basis-1/4">
              <Card className="m-0 h-[250px] w-[250px] rounded-none p-0">
                <CardContent className="relative p-0 m-0">
                  {item.type === "image" ? (
                    <img className="h-80 w-full object-cover" src={item.src} alt="" />
                  ) : (
                    <video
                      className="h-[250px] w-[250px] object-cover"
                      src={item.src}
                      controls
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mb-5 border-b-2 border-black/65" />
    </div>
  )
}

export default LookGoodToGether;
