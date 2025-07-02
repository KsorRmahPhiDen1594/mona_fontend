import { ReactElement } from "react";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

const FeatureCard = ({
  image = <img src="/images/pages/home/brands/xtrain1.webp" alt="Đào tạo cơ bản" width="150" height="150" />,
  title = "Đào tạo cơ bản",
  description,
  list = [
    "Giới thiệu giao diện, thao tác chính, quy trình chuẩn cơ bản",
    "Phù hợp với tất cả nhân sự lần đầu sử dụng ERP",
    "Giúp xây nền tảng vững chắc trước khi học nâng cao",
  ],
  link,
}: {
  image?: ReactElement;
  title?: string;
  description?: ReactElement;
  list?: any;
  link?: string;
}) => {
  return (
    <ANIM__FadeInOutOnScroll 
      className="rounded-[10px] border border-black hover:border-purple-800 bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full px-[25px] py-[50px] shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500 hover:scale-[1.05] 
      min-h-[500px] max-h-[600px] flex flex-col justify-between" // Cố định chiều cao 500px
    >
      <div className="flex flex-col items-start justify-start small-gap h-full overflow-hidden">
        {image}
        <h4 className="font-medium text-primary">{title}</h4>
        {description ? (
          <p className="[&>span]:font-medium text-primary/80 [&>span]:text-primary h-24 overflow-hidden"> {/* Giới hạn 6 dòng */}
            {description}
          </p>
        ) : null}
        <ul className="flex flex-col gap-[1rem] text-primary/80 flex-grow overflow-auto"> {/* Cuộn nếu nội dung dài */}
          {list.map((item: string, index: number) => (
            <li
              key={index}
              className="flex items-start justify-start gap-[6.7px]"
            >
              <BadgeCheck className="min-h-[16px] min-w-[16px] max-w-[16px] stroke-secondary stroke-[2px]" />
              {item}
            </li>
          ))}
        </ul>
        {link ? (
          <Link
            href={link}
            className="text-secondary hover:text-secondary/70 hover:underline mt-auto"
          >
            Learn more
          </Link>
        ) : null}
      </div>
    </ANIM__FadeInOutOnScroll>
  );
};

export default FeatureCard;