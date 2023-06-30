import { PROJECTS } from "../../models/tables/projects";
import ProjectCard from "./ProjectCard";

function _Projects({
    projectsRef,
}: {
    projectsRef: React.RefObject<HTMLDivElement>;
}) {
    return (
        <section
            className="relative backdrop-blur-xl flex flex-col items-center py-20
        "
        >
            {/* About Scroll Target */}
            <div ref={projectsRef} className="absolute -top-14 h-14 w-full" />
            {/* About Content */}
            <div className="w-full max-w-[1144px]">
                <h2 className="text-5xl font-roboto-slab mb-6">Projects</h2>
                <div className="flex flex-col gap-8">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard
                            key={project.name}
                            project={project}
                            reverse={i % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default _Projects;
