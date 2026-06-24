import { basePath } from "@/app/util";
import Image from "next/image";

export default function AboutTeamPhoto({ animate = true }: { animate?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[340px] md:min-h-[420px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#e3f2fd] via-[#fffde7] to-[#fff] border border-[#e0f2f1] ${animate ? "animate-fade-in-up" : ""}`}
      style={{ boxShadow: "0 8px 32px 0 rgba(14,70,114,0.10)" }}
    >
      <Image
        src={basePath + "/images/about-team1.jpeg"}
        alt="Mubest Team Group Photo"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="transition-transform duration-700 scale-100 hover:scale-105"
        priority
      />
      {/* Singapore flags animation overlay */}
      {/* <div className="absolute inset-0 pointer-events-none flex flex-col justify-between">
        <div className="flex justify-between p-4">
          <span className="w-16 h-10 animate-wiggle-slow">
            <Image src="/images/sg-flag.png" alt="Singapore Flag" width={64} height={40} />
          </span>
          <span className="w-16 h-10 animate-wiggle-slow">
            <Image src="/images/sg-flag.png" alt="Singapore Flag" width={64} height={40} />
          </span>
        </div>
      </div> */}
    </div>
  );
}
