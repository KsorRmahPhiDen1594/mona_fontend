import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const ProjectIdea = () => {
  const t = useTranslations('HomePage');

  return (
    <section className="container section">
      <ANIM__FadeInOutOnScroll className="bg-[url('/images/backgrounds/ProjectIdeaBanner.svg')] bg-center bg-cover py-[50px]  flex items-center justify-center rounded-br-[20px] lg:rounded-br-[40px] rounded-tl-[20px] lg:rounded-tl-[40px]">
        <div className="flex flex-col items-center justify-center small-gap max-w-[595px] mx-auto px-[10px]">
          <h2 className="text-white">              {t("ProjectIdea.title")}
          </h2>
          <p className="text-white text-center">
            {t("ProjectIdea.description")}
          </p>
          <Link href="/get-a-quote" className="w-full flex items-center justify-center">
            <Button variant="outline" className="bg-white w-full sm:w-auto">
              {t("ProjectIdea.button")}
            </Button>
          </Link>
        </div>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};
export default ProjectIdea;
