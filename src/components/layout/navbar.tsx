/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import BrandLogo from "../assets/brandlogo";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState, useRef } from "react";
const Navbar = () => {
// Menu links config
const Links = [
    {
    text: "Giới thiệu",
    href: "/about-us",
    icon: "https://mona.media/template/assets/images/header/icon-about.svg"
  },
  {
    text: "Dự án",
    href: "/services",
    icon: "https://mona.media/template/assets/images/header/icon-about.svg"
  },
  {
    text: "Khách hàng",
    href: "/reviews",
    icon: "https://mona.media/template/assets/images/header/icon-about.svg"
  },
  {
    text: "Blog",
    href: "/about-us",
    icon: "https://mona.media/template/assets/images/header/icon-about.svg",
    children: [
      { text: "Cẩm nang SEO", href: "/blog/seo" },
      { text: "Digital Marketing", href: "/blog/digital-marketing" },
      { text: "Kinh nghiệm thiết kế website", href: "/blog/web-design" },
      { text: "Kiến thức Hosting", href: "/blog/hosting" },
      { text: "Giáo dục", href: "/blog/education" },
    ]
  },
  {
    text: "Hoạt động",
    href: "/contact-us",
    icon: "https://mona.media/template/assets/images/header/icon-about.svg"
  },
  {
    text: "Hợp tác với MONA",
    href: "/about-us",
    icon: "https://mona.media/template/assets/images/header/icon-about.svg"
  }
];

  // Hover dropdown state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav id="topPoint" className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white ">
        <div className="px-8 py-4 flex justify-between">
          <Link href="/">
            <BrandLogo />
          </Link>
          <div className="hidden lg:flex items-center justify-end small-gap">
            <ul className="flex items-center gap-2">
              {Links.map((item, idx) => {
                const btnRef = useRef<HTMLButtonElement>(null);
                return (
                  <li
                    key={item.text}
                    onMouseEnter={() => item.children && setOpenIndex(idx)}
                    onMouseLeave={() => {
                      if (item.children) setOpenIndex(null);
                      // Remove focus from button to prevent black border
                      if (btnRef.current) btnRef.current.blur();
                    }}
                    className="outline-none focus:outline-none border-none focus:border-none active:border-none"
                    tabIndex={-1}
                  >
                    {item.children ? (
                      <DropdownMenu open={openIndex === idx} onOpenChange={(v) => setOpenIndex(v ? idx : null)}>
                        <DropdownMenuTrigger asChild>
                          <Button
                            ref={btnRef}
                            variant="ghost"
                            className="flex items-center py-1 text-[15px] border-none focus:ring-0 focus:border-none focus:outline-none active:border-none"
                          >
                            <img src={item.icon} alt={item.text} className="w-4 h-4 object-contain align-middle" />
                            {item.text}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="min-w-[200px]">
                          {item.children.map((child) => (
                            <DropdownMenuItem key={child.text} asChild>
                              <Link href={child.href} className="block w-full text-[15px] text-gray-700">
                                {child.text}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Button asChild variant="ghost" className="flex items-center gap-1 px-2 py-1 text-[15px]">
                        <Link href={item.href}>
                          <img src={item.icon} alt={item.text} className="w-4 h-4 object-contain align-middle" />
                          {item.text}
                        </Link>
                      </Button>
                    )}
                  </li>
                );
              })}
              <li>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-[15px]  border-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-64 p-2">
                    <Input placeholder="Nhập từ khóa..." className="text-[15px] font-bold" />
                  </PopoverContent>
                </Popover>
              </li>
            </ul>
          </div>
          <div>
            HostLine
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

