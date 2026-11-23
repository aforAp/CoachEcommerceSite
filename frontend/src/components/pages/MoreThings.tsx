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
    <div className="w-full">
      <Carousel className="mx-auto w-full max-w-6xl px-12">
        <CarouselContent>
          {dummyData.map((data) => (
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3" key={data.id}>
              <Card className="h-full">
                <CardContent>
                  <img
                    alt={data.name}
                    className="mb-4 aspect-square w-full object-cover"
                    src={data.image}
                  />
                  <CardTitle>{data.name}</CardTitle>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Add To Bag</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default MoreThings
