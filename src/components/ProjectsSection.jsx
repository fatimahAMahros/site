const projects = [
    {
        id: 1,
        title: "JDIH Perumda Surya Sembada",
        description: "A Legal product documentation and information app where the process of requesting and creating new legal products can be done digitally, complete with built-in pdf annotator",
        image: "/projects/JDIH.png",
        tags: ["Laravel", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl mg:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"></div>
                    ))}
                </div>
            </div>
        </section>
    );
}