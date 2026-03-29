import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import BTSGallery from "@/components/BTSGallery";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectGrid />
      <BTSGallery />
    </div>
  );
}
