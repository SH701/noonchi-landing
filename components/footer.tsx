import Image from "next/image";

export default function FooterCTA() {
  return (
    <footer className="w-full">
      <section className="bg-[#1D2633]">
        <div className="mx-auto flex min-h-[48vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
          <Image
            src="/circle4.png"
            alt="동그라미"
            width={50}
            height={50}
            className="mb-7"
          />
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Join the Noonchi Beta
          </h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">
            Speak naturally, connect deeply
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#3B6CF6] px-10 py-4 text-base font-medium text-white shadow hover:bg-[#2f5ce6] focus:outline-none focus:ring-4 focus:ring-blue-300 w-1/3 truncate"
          >
            Join Beta
          </a>
        </div>
      </section>
      <div className="w-full border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
          © 2025 NOONCHI. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
