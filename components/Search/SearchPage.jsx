import React from "react";
import Image from "next/image";

const SearchPage = ({ searchMasterQuery }) => {
  return (
    <div className="text-white flex flex-col items-center h-[calc(100vh-3rem)]">
      <main className="flex flex-1 flex-col w-full max-w-6xl relative h-full">
        {/* Top Bar: Time and Share Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            19h ago
          </div>
          <div>{searchMasterQuery}</div>
          <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 rounded-full shadow-lg transition-all">
            Share
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex flex-1 overflow-y-auto px-6 pb-6">
          {/* Left Content */}
          <div className="flex-1 pr-6">
            {/* Question Title */}
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mt-6">
              Who is Bill Gates?
            </h1>

            {/* Sources Section */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-300">
                🔗 Sources
              </h3>
              <div className="grid grid-cols-2 gap-6 mt-4">
                {[
                  {
                    title: "Bill Gates",
                    domain: "en.wikipedia",
                    icon: "/wikipedia-icon.png",
                  },
                  {
                    title: "Britannica Kids",
                    domain: "kids.britannica",
                    icon: "/britannica-icon.png",
                  },
                  {
                    title: "LinkedIn",
                    domain: "linkedin",
                    icon: "/linkedin-icon.png",
                  },
                ].map((source, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-gray-700 hover:scale-105 transition-all cursor-pointer shadow-lg"
                  >
                    <div className="text-white font-semibold">
                      {source.title}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-gray-400">
                      <Image
                        src={source.icon}
                        alt={source.title}
                        width={20}
                        height={20}
                      />
                      <span className="text-sm">{source.domain}</span>
                    </div>
                  </div>
                ))}

                {/* Show All Card */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-gray-700 flex flex-col justify-between hover:scale-105 transition-all cursor-pointer shadow-lg">
                  <div className="text-gray-300">Show all</div>
                  <div className="flex gap-2 mt-2">
                    {[
                      "/youtube-icon.png",
                      "/golden-icon.png",
                      "/wikipedia-icon.png",
                      "/forbes-icon.png",
                    ].map((icon, i) => (
                      <Image
                        key={i}
                        src={icon}
                        alt="More"
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Answer Sections */}
            {[
              {
                title: "✦ Perplexity",
                text: "William Henry Gates III, commonly known as Bill Gates, is a prominent American businessman and philanthropist, born on October 28, 1955, in Seattle, Washington. He co-founded Microsoft in 1975, leading it to become the world's most influential software company.",
              },
              {
                title: "Early Life and Education",
                text: "Raised in a well-off family, Gates showed an early aptitude for mathematics and reading. He attended Lakeside School, where he discovered his interest in computers. At 13, he wrote his first software program, later attending Harvard but dropping out to start Microsoft.",
              },
              {
                title: "Microsoft and Business Achievement",
                text: "Gates co-founded Microsoft, introducing Windows, revolutionizing personal computing. In 2008, he stepped down to focus on philanthropy, establishing the Gates Foundation to tackle global health and education challenges.",
              },
              {
                title: "More Achievements",
                text: "Gates has donated billions of dollars to global health and education initiatives. His work has significantly impacted research in various fields.",
              },
            ].map((section, index) => (
              <div
                key={index}
                className="mt-6 mb-2 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:scale-[1.02] transition-all shadow-lg"
              >
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Images Section */}
          <div className="mt-10 w-64 flex-shrink-0">
            <div className="grid grid-cols-1 gap-4">
              {[
                "/bill-gates-1.jpg",
                "/bill-gates-2.jpg",
                "/bill-gates-3.jpg",
              ].map((img, index) => (
                <div
                  key={index}
                  className="w-full h-28 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden shadow-lg hover:scale-110 transition-all cursor-pointer"
                >
                  <Image
                    src={img}
                    alt="Bill Gates"
                    width={160}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
              ))}
              <div className="w-full h-28 bg-gray-700 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer">
                <span className="text-gray-300">View More</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
