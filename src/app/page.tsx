import OurProcess from "@/app/_utils/process";
import OurServices from "@/app/_utils/our-services";
import ProjectIdea from "@/app/_utils/project-idea-banner";
import HowWeWork from "@/app/_utils/how-we-work";
import Testimonial from "@/app/_utils/testimonial";
import {
  homeFAQ,
  homeFeaturesData,
  homeTestimonialData,
} from "@/lib/data/data";
import HeroSection from "./_utils/herosection";
import Faq from "./_utils/faq";
import { BrandCarousel } from "./_utils/carousel";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage = () => {
  const t = useTranslations("HomePage");

  return (
    <main>
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <img
                src="/images/pages/home/brands/banner1.jpg"
                alt="Ảnh slide 1"
                className="w-full h-auto object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/images/pages/home/brands/banner2.jpg"
                alt="Ảnh slide 2"
                className="w-full h-auto object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          {/* Nút bấm trái */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors" />
          {/* Nút bấm phải */}
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors" />
        </Carousel>
      </div>

      <HeroSection
        H1={
          <>
            {t.rich("heroTitle", {
              span: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </>
        }
        P={<>{t("heroDescription")}</>}
        videoLink="https://www.youtube.com/embed/NdYBrWJExYc"
      />
      <BrandCarousel />
      <OurServices FeaturesData={homeFeaturesData.slice(0, 6)} />
      <OurProcess />
      <Testimonial calendly={true} data={homeTestimonialData} />
      <HowWeWork />
      <div className="bg-[url('/images/backgrounds/CircleNest.svg')] bg-center bg-cover">
        <Faq data={homeFAQ} />
        <ProjectIdea />
      </div>
    </main>
  );
};

export default HomePage;