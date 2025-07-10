import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";


export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/90">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out through my contacts.
                    I'm always open to new knowledge and opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary-foreground/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:fatimah.a.mahros@gmail"
                                        className="text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        fatimah.a.mahros@gmail
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary-foreground/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        Surabaya, East Java, Indonesia
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/fatimahamahros/"
                                target="_blank"
                                className="p-3 rounded-full hover:bg-primary/20">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/ra_fazm"
                                target="_blank"
                                className="p-3 rounded-full hover:bg-primary/20">
                                <Instagram />
                            </a>
                        </div>
                    </div>

                    {/* <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor="name"
                                    className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input type="text" name="name" id="name" required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email"
                                    className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input type="text" name="email" id="email" required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="johndoe@hotmail.com" />
                            </div>
                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea name="message" id="message" required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..." />
                            </div>

                            <button type="submit" className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}>
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div> */}
                </div>
            </div>
        </section>
    );
}