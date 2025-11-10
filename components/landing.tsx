import Link from "next/link";
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
    <div className="min-h-screen bg-white flex flex-col items-center">
      <section className="hidden lg:flex flex-col items-center justify-end pt-[52px] px-16 gap-10 w-full max-w-7xl h-[908px]">
        <div className="flex flex-col items-center gap-6 w-[960px]">
          <h1 className="w-full text-[64px] font-bold leading-[100%] tracking-[-0.03em] text-center text-[#1D2633]">
            Sound natural, connect deeply
          </h1>
          <p className="w-full text-2xl font-medium leading-[140%] tracking-[-0.02em] text-center text-[#1F2937CC]">
            눈치있게 말하면서 문화를 배우다
          </p>
        </div>

        <Link
          href={link}
          className="flex items-center justify-center w-[200px] h-[60px] bg-[#316CEC] rounded-[10px] text-white text-xl font-medium leading-[34px] tracking-[-0.01em] hover:bg-[#2555cc] transition-colors"
        >
          Try Noonchi Free
        </Link>

        <div
          className="relative w-[394.34px] h-[594px] "
          style={{
            filter:
              "drop-shadow(21.6659px 10.362px 47.0998px rgba(0, 0, 0, 0.15))",
          }}
        >
          <Image
            src="/monitor.png"
            alt="예시 화면"
            fill
            className="object-cover rounded-t-[43.3318px]  "
            priority
          />
          <div
            className="absolute inset-0 rounded-t-[43.3318px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 88.33%, rgba(0, 0, 0, 0.1) 100%)",
            }}
          />
        </div>
      </section>
      <section className="hidden md:flex lg:hidden flex-col items-center justify-end pt-24 px-16 gap-10 w-full max-w-[800px] h-[920px]">
        <div className="flex flex-col items-center gap-4 w-2xl">
          <h1 className="w-full text-[56px] font-bold leading-[100%] tracking-[-0.03em] text-center text-[#1D2633]">
            Sound natural, connect deeply
          </h1>
          <p className="w-[600px] text-xl font-medium leading-[140%] tracking-[-0.02em] text-center text-[#1F2937CC]">
            눈치있게 말하면서 문화를 배우다
          </p>
        </div>

        <Link
          href={link}
          className="flex items-center justify-center w-[200px] h-[60px] bg-[#316CEC] rounded-[10px] text-white text-xl font-medium leading-[34px] tracking-[-0.01em] hover:bg-[#2555cc] transition-colors"
        >
          Try Noonchi Free
        </Link>

        <div
          className="relative w-[351px] h-[528px]"
          style={{
            filter: "drop-shadow(23px 11px 50px rgba(0, 0, 0, 0.15))",
          }}
        >
          <Image
            src="/monitor.png"
            alt="예시 화면"
            fill
            className="object-cover rounded-t-[46px]"
            priority
          />
          <div
            className="absolute inset-0 rounded-t-[46px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 88.33%, rgba(0, 0, 0, 0.1) 100%)",
            }}
          />
        </div>
      </section>

      <section className="flex md:hidden flex-col items-center justify-end pt-[52px] px-6 gap-8 w-full max-w-[375px] h-[710.27px]">
        <div className="flex flex-col items-center gap-4 w-[327px]">
          <h1 className="w-full text-[40px] font-bold leading-[110%] tracking-[-0.03em] text-center text-[#1D2633]">
            Sound natural, connect deeply
          </h1>
          <p className="w-full text-base font-medium leading-[140%] tracking-[-0.02em] text-center text-[#1F2937CC]">
            눈치있게 말하면서 문화를 배우다
          </p>
        </div>

        <Link
          href={link}
          className="flex items-center justify-center w-40 h-12 bg-[#316CEC] rounded-[10px] text-white text-base font-medium leading-[34px] tracking-[-0.01em] hover:bg-[#2555cc] transition-colors"
        >
          Try Noonchi Free
        </Link>

        <div
          className="relative w-[279px] h-[420.27px]"
          style={{
            filter:
              "drop-shadow(15.3169px 7.32547px 40.3567px rgba(0, 0, 0, 0.12))",
          }}
        >
          <Image
            src="/monitor.png"
            alt="예시 화면"
            fill
            className="object-cover rounded-t-[27.304px]"
            priority
          />
          <div
            className="absolute inset-0 rounded-t-[27.304px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 88.33%, rgba(0, 0, 0, 0.1) 100%)",
            }}
          />
        </div>
      </section>
    </div>
  );
}
