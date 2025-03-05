import CardLogin from "@/components/CardLogin";
import Image from "next/image";

export default function LoginView() {
  return (
    <div className="relative w-screen h-screen grid place-items-center overflow-hidden">
      <Image
        src="/bg_image.svg"
        alt="Background"
        className="max-w-none w-full h-full"
        width="100"
        height="100"
      />
      <CardLogin />
    </div>
  );
}
