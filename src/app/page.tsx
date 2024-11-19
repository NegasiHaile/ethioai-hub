import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="w-full sm:w-[90%] md:w-[85] lg:w-[60%] p-5 space-y-5 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full pb-2 border-b text-center">
        <p className="w-full font-bold text-3xl">
          Ethiopian Datasets and ML Models-HUB
        </p>
        {/* <p className="opacity-65 font-thin">
          A platform where you can find Ethiopian ML models, datasets, and
          related content.
        </p> */}
      </div>

      {/* Projects */}
      <Projects defaults="featured" />
    </div>
  );
}
