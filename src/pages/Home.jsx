import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-hidden"> {/** min-h-dvh */}
        <ThemeToggle />
        <StarBackground />

        <Navbar />

        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </main>

        {/* Footer */}
    </div>;
}