import Image from "next/image";

export default function Section() {
  return (
    <>
      <section>
        <div className="max-w-8xl mx-auto py-20  px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl xl:text-5xl lg:text-4xl truncate font-semibold sm:text-left text-center ">
                Who is Noonchi for?
              </h2>
            </div>

            <div className="grid gap-6">
              <div className="bg-gray-100 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  🎓 TOPIK Learners
                </h3>
                <p className=" text-[#1d26338c] text-base">
                  Make your speaking and writing more natural for the exam — not
                  just grammatically correct.
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  💼 Professionals in Korea
                </h3>
                <p className=" text-[#1d26338c] text-base ">
                  Handle meetings, feedback, and polite workplace talk like a
                  native.
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  💬 K-Culture Enthusiasts
                </h3>
                <p className=" text-[#1d26338c] text-base">
                  Understand the nuance behind your favorite K-dramas and songs
                  through real expressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#F9FAFB] md:px-16 px-6">
        <section className="mx-auto max-w-8xl py-20">
          <div className="flex flex-col gap-8 items-center justify-center ">
            <h1 className=" max-w-5xl text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:text-left text-center">
              AI that gets your vibe — not just your words
            </h1>
            <p className=" max-w-2xl text-gray-500 text-center">
              Noonchi blends adaptive AI with cultural intuition to help you
              talk like real Koreans <br className="blcok sm:hidden" />—
              understanding rhythm, tone, and feeling.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6  lg:grid-cols-3">
            <FeatureCard
              title="Adaptive Tone Engine"
              desc="Real-time tone adjustment — Noonchi teaches the flow Koreans actually use."
              img="/sections3.png"
            />
            <FeatureCard
              title="Real Conversation Coach"
              desc="Get feedback instantly as you chat — Noonchi mirrors how real Koreans talk, correcting your tone naturally."
              img="/section2.png"
            />
            <FeatureCard
              title="Cultural Context Insight"
              desc="Learn the emotion and social nuance behind every tone — understand the K-Culture heartbeat."
              img="/sections1.png"
            />
          </div>
        </section>

        <section className="mx-auto max-w-8xl  py-20">
          <div className="text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900">
              How Noonchi Works
            </h2>
            <p className="text-gray-500">
              Your personal AI coach — helping you go from awkward to authentic.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6  lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <p className="text-lg font-semibold text-gray-900">
                Practice Real Scenarios
              </p>
              <p className="mt-2 text-gray-500">
                Simulate real-world talk — K-drama scenes, meetings, or casual
                chats.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <p className="text-lg font-semibold text-gray-900">
                Get Smart Feedback
              </p>
              <p className="mt-2 text-gray-500">
                Tone scores, cultural cues, and rewrites help you improve
                instantly.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <p className="text-lg font-semibold text-gray-900">
                Track Your Growth
              </p>
              <p className="mt-2 text-gray-500">
                Visualize how your tone and confidence evolve over time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function FeatureCard({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-500 text-base leading-relaxed">{desc}</p>
      <div className="mt-10 flex items-center justify-center rounded-[20px] bg-gray-50 w-full h-[234px] overflow-hidden fill">
        <Image
          src={img}
          alt={title}
          width={240}
          height={234}
          className="object-contain"
        />
      </div>
    </div>
  );
}
