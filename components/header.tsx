import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-16 lg:h-20 px-12 md:px-16 py-10 flex justify-between items-center">
      <Image
        src="/header/logo.svg"
        alt="로고"
        width={145}
        height={24}
        unoptimized
      />
      <Link href="/noonchi.ai.kr">
        <button className="cursor-pointer font-semibold text-[#1d2633] px-4 h-12 border rounded-full border-gray-300 flex items-center gap-2">
          Join beta
          <Image
            src="/header/arrow.svg"
            alt="화살표"
            width={20}
            height={20}
            unoptimized
          />
        </button>
      </Link>
    </div>
  );
}
