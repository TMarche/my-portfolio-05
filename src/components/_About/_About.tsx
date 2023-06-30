import SkillCard from "./SkillCard";

const skills = {
    languages: ["Java", "JavaScript", "Python", "Bash", "SQL", "HTML", "CSS"],
    technologies: [
        "Docker",
        "Git",
        "Unix/Linux",
        "React",
        "Redux",
        "Node",
        "Express",
        "Tailwind",
    ],
};

function _About({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) {
    return (
        <section
            className="relative bg-white bg-opacity-10 backdrop-blur-xl
            flex flex-col items-center py-20
        "
        >
            {/* About Scroll Target */}
            <div ref={aboutRef} className="absolute -top-14 h-14 w-full" />
            {/* About Content */}
            <div className="w-full max-w-[1144px]">
                <h2 className="text-5xl font-roboto-slab mb-6">About</h2>
                <p className="text-3xl mb-2">
                    I'm a passionate web developer based in Cary, North
                    Carolina.
                </p>
                <p className="text-3xl mb-8">I love to build things.</p>
                <p className="text-3xl mb-8">Check out my skills:</p>
                <div className="flex flex-row gap-2">
                    <div className="flex-1 flex flex-row justify-center items-center">
                        <div>
                            <h3 className="font-bold mb-2">Languages</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {skills.languages.map((skill) => (
                                    <SkillCard key={skill} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row justify-center items-center">
                        <div>
                            <h3 className="font-bold mb-2">Technologies</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {skills.technologies.map((skill) => (
                                    <SkillCard key={skill} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default _About;
