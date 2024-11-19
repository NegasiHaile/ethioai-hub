import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="w-full sm:w-[90%] md:w-[85] lg:w-[60%] p-5 space-y-5 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full pb-2 border-b text-start">
        <p className="w-full font-bold text-3xl">
          Ethiopian Datasets and ML Models-HUB
        </p>
        <p className="mt-6 opacity-70">
          Explore Ethiopian-related NLP models, AI models, Amharic, Tigrinya,
          and Oromo datasets. Discover the best research and models in Ethiopia
          for Machine Learning and AI applications.
        </p>
      </div>

      {/* Projects */}
      <Projects />
    </div>
  );
}
