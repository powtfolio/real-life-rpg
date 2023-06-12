"use client";
import Image from "next/image";
import { useSetting } from "@/hooks";

function Icon({ icon, styling }: { icon: string; styling?: string }) {
  return (
    <img
      src={`/assets/icons/${icon}.png`}
      alt="Broken Icon"
      className={styling}
    />
  );
}

export default function Home() {
  const { attributes, updateIcon } = useSetting();

  return (
    <main className="min-w-screen min-h-screen flex items-center justify-center bg-navy-blue">
      {/* modal */}
      <section className="bg-black p-8 w-full max-w-[400px]">
        <div className="w-full flex items-center border-b-2 border-white pb-4 mb-4">
          <img
            className="w-16 h-16 mr-4"
            src="/assets/placeholder/avatar.png"
            alt="Your Avatar"
          />
          <h1>Your Name</h1>
        </div>

        {/* attributes */}
        <div className="w-full">
          {attributes.map((e, idx) => (
            <div className="w-full flex items-center" key={idx}>
              <h1 className="text-center w-1/6 font-bold mr-2 text-xs bg-teal">
                {e.name.toUpperCase()}
              </h1>
              <>
                {[...Array(e.level)].map((_, idx2) => (
                  <div
                    onClick={() => updateIcon(idx, "I_Crystal02")}
                    key={idx2}
                  >
                    <Icon
                      icon={e.icon}
                      styling="border-2 hover:border-white border-transparent hover:cursor-pointer"
                    />
                  </div>
                ))}
              </>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
