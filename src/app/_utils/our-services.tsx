import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import FeatureCard from "@/components/molecule/feature-card";
import LinkButton from "@/components/molecule/link-button";
import SectionHead from "@/components/molecule/section-head";
import { useTranslations } from 'next-intl';

const OurServices = ({ FeaturesData }: { FeaturesData: any }) => {
  const t = useTranslations('HomePage');
  return (
    <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
      <div className="container section flex flex-col large-gap">
        <SectionHead
          highlighter="Dịch vụ của chúng tôi"
          H2={<>{t("OurServices.title")}</>}
          paragraphs={[
            <>
              {t("OurServices.paragraph")}
            </>,
          ]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start large-gap">
          {FeaturesData.map((item: any) => {
            const { id, image, title, description, list, link } = item;
            return (
              <FeatureCard
                key={id}
                image={image}
                title={title}
                description={description}
                list={list}
                link={link}
              />
            );
          })}
        </div>
        {FeaturesData.length < 7 ? <LinkButton /> : null}
      </div>
    </section>
  );
};

export default OurServices;
