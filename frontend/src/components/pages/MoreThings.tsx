import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from '../ui/button'

const dummyData = [
  { id: 1, name: "Leather Shoulder Bag", image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 2, name: "Quilted Chain Bag", image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 3, name: "Everyday Tote Bag", image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 4, name: "Mini Crossbody Bag", image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 5, name: "Signature Zip Purse", image: "https://images.unsplash.com/photo-1696192505937-08400f91e631?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 6, name: "Leather Coin Purse", image: "https://images.unsplash.com/photo-1570431118100-c24a54fdeab0?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 7, name: "Small Foldover Purse", image: "https://images.unsplash.com/photo-1696192505937-08400f91e631?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 8, name: "Leather Tag Keychain", image: "https://images.unsplash.com/photo-1575908539614-ff89490f4a78?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 9, name: "Heart Charm Keychain", image: "https://images.unsplash.com/photo-1762587596660-738308fe432e?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  { id: 10, name: "Gold Ring Keychain", image: "https://images.unsplash.com/photo-1575908539614-ff89490f4a78?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
]

const MoreThings = () => {
  return (
    <div className="w-full mt-3">
       <h2
              className="mt-2 text-2xl mb-4 text-center font-medium scale-x-105 tracking-[0.05em]"
              id="gift-services-title"
            >
              More things you might like
            </h2>
      <Carousel className="mx-auto w-full max-w-6xl px-12 mt-10">
        <CarouselContent>
          {dummyData.map((data) => (
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/4" key={data.id}>
              <Card className="h-full px-0 py-0 m-0 w-full gap-0 rounded-none ring-0 border-none">
                <CardContent className="px-0 py-0">
                  <img
                    alt={data.name}
                    className="mb-4 h-[200px] w-full object-cover p-0 m-0"
                    src={data.image}
                  />
                  <CardTitle className="ml-10">{data.name}</CardTitle>
                </CardContent>
                <CardFooter className="flex align-center justify-center border-none bg-white">
                  <Button className="w-1/2 rounded-2xl bg-white text-black/90 text-[12px] border-black/10 border-[1px]">Add To Bag</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-10" />
    </div>
  )
}

export default MoreThings
