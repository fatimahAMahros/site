import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

export const ProjectDetail = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-hidden"> {/** min-h-dvh */}
        <ThemeToggle />
        <StarBackground />

        <Navbar />

        <main>

        </main>

        {/* Footer */}
    </div>;
}