import { cn } from "@/lib/utils";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Developer and Student</h3>
                        <p className="text-muted-foreground">
                            Hi my name is Ebony Dark’ness Dementia Raven Way and I have long ebony black hair (that’s how
                            I got my name) with purple streaks and red tips that reaches my mid-back and icy blue eyes like
                            limpid tears and a lot of people tell me I look like Amy Lee (AN: if u don’t know who she is get da
                            hell out of here!).
                        </p>
                        <p className="text-muted-foreground">
                            I’m not related to Gerard Way but I wish I was because he’s a major fucking
                            hottie. I’m a vampire but my teeth are straight and white. I have pale white skin. I’m also a witch,
                            and I go to a magic school called Hogwarts in England where I’m in the seventh year (I’m
                            seventeen).
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a href="#contact" className={cn(
                                "px-6 py-2 rounded-full border border-primary text-primary",
                                "hover:bg-primary/35 hover:text-primary-foreground transition-colors duration-300"
                            )}>
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-lg">Web Development</div>
                                    <div className="text-muted foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-lg">UI/UX Design</div>
                                    <div className="text-muted foreground">
                                        Designing intuitive user interfaces and seamless
                                        user experiences.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-lg">Project Management</div>
                                    <div className="text-muted foreground">
                                        Leading projects from conception to completion
                                        with Agile methodologies.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}