import Link from "next/link";
import { Button } from "../ui/button";

const LinkButton = () => {
  return (
    <Link href="/services" className="w-full flex justify-center">
      <Button variant="outline" className="w-full sm:w-auto">Khám phá tất cả các dịch vụ của chúng tôi</Button>
    </Link>
  );
};

export default LinkButton;
