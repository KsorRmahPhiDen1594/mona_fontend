import { cn } from "@/lib/utils";

const BrandLogo = ({ dark = false, className }: { dark?: boolean; className?: string }) => {
  const logoSrc = dark ? "/images/pages/home/brands/logo.webp" : "/images/pages/home/brands/logo.webp";
  return (
    <div className={cn(className, "flex items-center gap-2")}>
      <img
        src={logoSrc}
        alt="Brand Logo"
        className="w-26 h-26 object-contain"
      />
    </div>
  );
};

export default BrandLogo;