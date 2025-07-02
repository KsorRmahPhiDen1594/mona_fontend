"use client";

import Link from "next/link"; // Thêm import Link
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ANIM__FadeInOnScroll from "@/components/anims/fadein.anim";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const BrandCarousel = () => {
  // Thay thế link bên thứ ba bằng đường dẫn nội bộ hoặc tùy chỉnh
  const BrandDetails = [
    {
      id: 1,
      image: "banner1.jpg",
      link: "/services/panasonic", // Đường dẫn nội bộ ví dụ
    },
    {
      id: 2,
      image: "banner2.jpg",
      link: "/services/oldnavy",
    },
    {
      id: 3,
      image: "banner3.jpg",
      link: "/services/grovebedding",
    },
    {
      id: 4,
      image: "banner4.jpg",
      link: "/services/mbc2",
    },
    {
      id: 5,
      image: "banner5.jpg",
      link: "/services/k9cakery",
    },
    {
      id: 6,
      image: "banner6.jpg",
      link: "/services/teamgeeky",
    },
    {
      id: 7,
      image: "banner7.jpg",
      link: "/services/teamgeeky",
    },
    {
      id: 8,
      image: "banner8.jpg",
      link: "/services/teamgeeky",
    },
    {
      id: 9,
      image: "banner9.jpg",
      link: "/services/teamgeeky",
    },
  ];

  return (
    // className="bg-muted rounded-b-[20px] md:rounded-b-[40px]"
    <div> 
      <div className="py-10 container">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <ANIM__FadeInOnScroll>
            <CarouselContent className="-ml-1">
              {BrandDetails.map((_) => (
                <CarouselItem
                  key={_.id}
                  className="p-1 basis-1/2 md:basis-1/3 lg:basis-1/3"
                >
                  <Link href={_.link} passHref>
                    <div className="p-4 flex items-center justify-center border rounded-xl bg-white h-[190px] cursor-pointer">
                      <Image
                        src={`/images/brands/${_.image}`} // Sử dụng template literal cho path
                        alt={_.image.split(".")[0]} // Alt text từ tên file
                        width={500}
                        height={200}
                        className="w-auto max-h-[200px] rounded-xl"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </ANIM__FadeInOnScroll>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};