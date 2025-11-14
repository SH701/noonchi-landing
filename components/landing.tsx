"use client";

import Image from "next/image";

export default function LandingPage() {
  const isMobile =
    typeof navigator !== "undefined" &&
    /iphone|ipad|ipod|android|blackberry|mini|windows\\sce|palm/i.test(
      navigator.userAgent.toLowerCase()
    );

  const link = isMobile
    ? "https://noonchi.ai.kr"
    : "https://noonchi-web.vercel.app/";

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center bg-white md:min-h-[calc(100vh-64px)]">
      {/* Desktop: lg 이상 */}
      <section className="hidden w-full max-w-7xl flex-1 flex-col items-center px-16 pt-[52px] lg:flex">
        <div className="flex w-[960px] flex-col items-center gap-6">
          <h1 className="w-full text-center text-[64px] font-bold leading-[110%] tracking-[-0.03em]">
            Sound{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text !text-transparent">
              natural
            </span>
            , connect{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text !text-transparent">
              deeply
            </span>
          </h1>
          <p className="w-full text-center text-2xl font-medium leading-[140%] tracking-[-0.02em] text-[#1F2937CC]">
            눈치있게 말하면서 문화를 배우다
          </p>
        </div>

        <div className="mt-10">
          <a
            href={link}
            className="flex h-[60px] w-[200px] items-center justify-center rounded-[10px] bg-[#316CEC] text-xl font-medium leading-[34px] tracking-[-0.01em] text-white transition-colors hover:bg-[#2555cc]"
          >
            Try Noonchi Free
          </a>
        </div>

        <div className="relative mt-10 w-[430px] ">
          <Image
            src="/landing.png"
            width={430}
            height={605}
            alt="사진"
            className="h-auto w-full  translate-x-4"
          />
        </div>
      </section>

      {/* Tablet: md ~ lg-1 */}
      <section className="hidden w-full max-w-4xl flex-1 flex-col items-center px-10 pt-[52px] md:flex lg:hidden">
        <div className="flex w-full max-w-[720px] flex-col items-center gap-5">
          <h1 className="w-full text-center text-[48px] font-bold leading-[115%] tracking-[-0.03em]">
            Sound{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text !text-transparent">
              natural
            </span>
            , connect{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text !text-transparent">
              deeply
            </span>
          </h1>
          <p className="w-full text-center text-xl font-medium leading-[140%] tracking-[-0.02em] text-[#1F2937CC]">
            눈치있게 말하면서 문화를 배우다
          </p>
        </div>

        <div className="mt-8">
          <a
            href={link}
            className="flex h-[52px] w-[180px] items-center justify-center rounded-[10px] bg-[#316CEC] text-lg font-medium leading-[32px] tracking-[-0.01em] text-white transition-colors hover:bg-[#2555cc]"
          >
            Try Noonchi Free
          </a>
        </div>

        {/* Tablet 이미지 */}
        <div className="relative mt-8 w-[360px] ">
          <Image
            src="/landing.png"
            width={360}
            height={510}
            alt="사진"
            className="h-auto w-full  translate-x-4"
          />
        </div>
      </section>

      {/* Mobile: md 미만 */}
      <section className="flex w-full max-w-[375px] flex-col items-center px-6 pt-[52px] md:hidden">
        <div className="flex w-[327px] flex-col items-center gap-4">
          <h1 className="w-full text-center text-[40px] font-bold leading-[110%] tracking-[-0.03em]">
            Sound{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text !text-transparent">
              natural
            </span>
            , connect{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text !text-transparent">
              deeply
            </span>
          </h1>
          <p className="w-full text-center text-base font-medium leading-[140%] tracking-[-0.02em] text-[#1F2937CC]">
            눈치있게 말하면서 문화를 배우다
          </p>
        </div>

        <div className="mt-8">
          <a
            href={link}
            className="flex h-12 w-40 items-center justify-center rounded-[10px] bg-[#316CEC] text-base font-medium leading-[34px] tracking-[-0.01em] text-white transition-colors hover:bg-[#2555cc]"
          >
            Try Noonchi Free
          </a>
        </div>

        {/* Mobile 이미지 */}
        <div className="relative mt-6 w-[279px] mx-auto">
          <Image
            src="/landing.png"
            width={279}
            height={420}
            alt="사진"
            className="h-auto w-full translate-x-4"
          />
        </div>
      </section>
    </div>
  );
}
