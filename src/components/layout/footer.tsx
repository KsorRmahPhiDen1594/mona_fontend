import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import BrandLogo from "../assets/brandlogo";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

const Footer = () => {
  return (
<footer className="bg-gradient-to-b from-[#64225a] to-[#a2238f] [&>*]:text-white">
  <div className="h-2 bg-gradient-to-r from-[#4e0e44]/5 via-[#c97fbe] to-[#4e0e44]/5"></div>
      <div className="section container">
        <section className="flex flex-col sm:flex-row flex-wrap items-start justify-between large-gap md:small-gap">
          <ANIM__FadeInOutOnScroll className="order-4 md:order-first w-full md:w-auto">
            <div className="small-gap">
              <BrandLogo dark={true} />
            </div>
            <p className="py-[25px]">
              Công ty TNHH IZISolution
            <p>Văn phòng Hà Nội: Tầng 7, Tòa nhà Hoàng Ngọc, Số 4, Ngõ 82,
              <br />Phố Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam 
              <br /> contact@izisolution.vn
              <br /> 0936 468 469
              </p>
            </p>
            <div className="text-icon py-[25px]">
              <p className="pb-[25px]">https://izisolution.vn</p>
              <div className="icons flex flex-row small-gap">
                <Link
                  href="https://www.facebook.com/thesociomatic"
                  passHref={true}
                  target="_blank"
                >
                  <Facebook className="cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/thesociomatic/"
                  passHref={true}
                  target="_blank"
                >
                  <Linkedin className="cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
                <Link
                  href="https://www.instagram.com/thesociomatic"
                  passHref={true}
                  target="_blank"
                >
                  <Instagram className="cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
              </div>
            </div>
            <p className="pt-[25px]">
              © {new Date().getFullYear()}. All rights reserved
            </p>
          </ANIM__FadeInOutOnScroll>

          {HeadingLinks.map((item) => {
            return (
              <ANIM__FadeInOutOnScroll
                key={item.id}
                className="flex flex-col items-start flex-start small-gap md:flex-start"
              >
                <h4 className="font-medium text-white text-lg md:text-xl">
                  {item.title}
                </h4>
                {item.links.map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="hover:text-secondary"
                    >
                      {link.text}
                    </Link>
                  );
                })}
              </ANIM__FadeInOutOnScroll>
            );
          })}
        </section>
      </div>
    </footer>
  );
};

export default Footer;

const HeadingLinks = [
  {
    id: 0,
    title: "Company",
    links: [
      {
        id: 0,
        text: "Home",
        link: "/",
      },
      {
        id: 1,
        text: "Services",
        link: "/services",
      },
      {
        id: 2,
        text: "Reviews",
        link: "/reviews",
      },
      {
        id: 3,
        text: "About us",
        link: "/about-us",
      },
      {
        id: 4,
        text: "Contact us",
        link: "/contact-us",
      },
    ],
  },
  {
    id: 1,
    title: "Services",
    links: [
      {
        id: 0,
        text: "Google paid advertise",
        link: "/services/google-paid-ads",
      },
      {
        id: 1,
        text: "Social media paid advertise",
        link: "/services/social-media-paid-ads",
      },
      {
        id: 2,
        text: "Software development",
        link: "/services/software-development",
      },
      {
        id: 3,
        text: "Data analytics",
        link: "/services/data-analytics",
      },
      {
        id: 4,
        text: "Shopify Store development",
        link: "/services/shopify-store-development",
      },
      {
        id: 5,
        text: "Wordpress development",
        link: "/services/wordpress-development",
      },
      {
        id: 6,
        text: "UI/UX & Graphic design",
        link: "/services/ui-ux-and-graphic-design",
      },
      {
        id: 7,
        text: "Content development & SEO",
        link: "/services/content-writing-and-seo",
      },
    ],
  },
  {
    id: 2,
    title: "Our Policy",
    links: [
      {
        id: 0,
        text: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        id: 1,
        text: "Terms and Conditions",
        link: "/terms-and-conditions",
      },
    ],
  },
];


// import Link from "next/link";
// import { Facebook, Instagram, Linkedin } from "lucide-react";
// import BrandLogo from "../assets/brandlogo";
// import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-[#64225a] to-[#a2238f] [&>*]:text-white">
//       <div className="h-2 bg-gradient-to-r from-[#4e0e44]/5 via-[#c97fbe] to-[#4e0e44]/5"></div>
//       <div className="section container">
//         <section className="flex flex-col sm:flex-row flex-wrap items-start justify-between large-gap md:small-gap">
//           <ANIM__FadeInOutOnScroll className="order-4 md:order-first w-full md:w-1/4">
//             <div className="small-gap">
//               <BrandLogo dark={true} />
//             </div>
//             <p className="py-[25px]">
//               Công ty TNHH IZISolution
//               <p>
//                 Văn phòng Hà Nội: Tầng 7, Tòa nhà Hoàng Ngọc, Số 4, Ngõ 82,
//                 <br />Phố Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam
//                 <br />contact@izisolution.vn
//                 <br />0936 468 469
//               </p>
//             </p>
//             <div className="text-icon py-[25px]">
//               <p className="pb-[25px]">https://izisolution.vn</p>
//               <div className="icons flex flex-row small-gap">
//                 <Link
//                   href="https://www.facebook.com/thesociomatic"
//                   passHref={true}
//                   target="_blank"
//                 >
//                   <Facebook className="cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
//                 </Link>
//                 <Link
//                   href="https://www.linkedin.com/company/thesociomatic/"
//                   passHref={true}
//                   target="_blank"
//                 >
//                   <Linkedin className="cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
//                 </Link>
//                 <Link
//                   href="https://www.instagram.com/thesociomatic"
//                   passHref={true}
//                   target="_blank"
//                 >
//                   <Instagram className="cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
//                 </Link>
//               </div>
//             </div>
//             <p className="pt-[25px]">
//               © {new Date().getFullYear()}. All rights reserved
//             </p>
//           </ANIM__FadeInOutOnScroll>

//           {HeadingLinks.map((item) => {
//             return (
//               <ANIM__FadeInOutOnScroll
//                 key={item.id}
//                 className="flex flex-col items-start flex-start small-gap md:w-1/4"
//               >
//                 <h4 className="font-medium text-white text-lg md:text-xl">
//                   {item.title}
//                 </h4>
//                 {item.links.map((link) => {
//                   return (
//                     <Link
//                       key={link.id}
//                       href={link.link}
//                       className="hover:text-secondary"
//                     >
//                       {link.text}
//                     </Link>
//                   );
//                 })}
//               </ANIM__FadeInOutOnScroll>
//             );
//           })}
//         </section>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// const HeadingLinks = [
//   {
//     id: 0,
//     title: "Giải pháp quản trị",
//     links: [
//       { id: 0, text: "Quản lý mua hàng", link: "/quan-ly-mua-hang" },
//       { id: 1, text: "Quản lý sản xuất", link: "/quan-ly-san-xuat" },
//       { id: 2, text: "Quản lý kho", link: "/quan-ly-kho" },
//       { id: 3, text: "Quản lý bán hàng", link: "/quan-ly-ban-hang" },
//       { id: 4, text: "Quản lý CRM", link: "/quan-ly-crm" },
//       { id: 5, text: "Quản lý bán lẻ", link: "/quan-ly-ban-le" },
//       { id: 6, text: "Kế toán tài chính", link: "/ke-toan-tai-chinh" },
//       { id: 7, text: "Quản lý nhân sự", link: "/quan-ly-nhan-su" },
//       { id: 8, text: "Quản lý dự án", link: "/quan-ly-du-an" },
//     ],
//   },
//   {
//     id: 1,
//     title: "ERPViet",
//     links: [
//       { id: 0, text: "Giới thiệu ERPViet", link: "/gioi-thieu-erpviet" },
//       { id: 1, text: "Giải pháp quản trị", link: "/giai-phap-quan-tri" },
//       { id: 2, text: "Các dịch vụ chính", link: "/cac-dich-vu-chinh" },
//       { id: 3, text: "Báo giá ERPViet", link: "/bao-gia-erpviet" },
//       { id: 4, text: "Kiến thức quản trị", link: "/kien-thuc-quan-tri" },
//       { id: 5, text: "Thông tin liên hệ", link: "/thong-tin-lien-he" },
//       { id: 6, text: "Đăng ký dùng thử", link: "/dang-ky-dung-thu" },
//       { id: 7, text: "Tin tuyển dụng", link: "/tin-tuyen-dung" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Dịch vụ",
//     links: [
//       { id: 0, text: "Triển khai trọn gói", link: "/trien-khai-tron-goi" },
//       { id: 1, text: "Cho thuê Cloud ERP", link: "/cho-thue-cloud-erp" },
//       { id: 2, text: "Tùy chỉnh theo yêu cầu", link: "/tuong-chinh-theo-yeu-cau" },
//       { id: 3, text: "Đào tạo phần mềm QTDN", link: "/dao-tao-phan-mem-qtdn" },
//     ],
//   },
// ];