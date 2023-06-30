import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ProjectData } from "../../models/tables/projects";

const opacityVariant = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: -200, opacity: 0 },
    hiddenReverse: { x: 200, opacity: 0 },
};

function ProjectCard({
    project,
    reverse,
}: {
    project: ProjectData;
    reverse: boolean;
}) {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (hasAnimated === true) return;
        if (inView) {
            control.start("visible");
            setHasAnimated(true);
        } else {
            control.start(reverse ? "hiddenReverse" : "hidden");
            console.log("Control hidden");
        }
    }, [control, inView, reverse, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            variants={opacityVariant}
            initial={reverse ? "hiddenReverse" : "hidden"}
            animate={control}
            className="flex flex-row gap-8"
        >
            <a
                className={`flex-1 ${reverse ? "" : "hidden"}`}
                href={project.links.site}
                target="_blank"
            >
                <div className="card-zoom aspect-video rounded-lg">
                    <div className={`card-zoom-image ${project.image}`} />
                </div>
            </a>
            <div className="relative flex-1">
                <h3 className="text-3xl font-roboto-slab mb-4">
                    {project.name}
                </h3>
                <div className="flex flex-row flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                        <div
                            key={skill}
                            className="bg-white bg-opacity-10 border-white border-2 border-opacity-30 p-1 rounded-lg"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
                <div className="mb-4">
                    {project.description.map((p) => (
                        <p className="mb-2">{p}</p>
                    ))}
                </div>
                <div className="absolute bottom-4 left-0 flex flex-row gap-2">
                    <a
                        className="bg-white bg-opacity-10 border-white border-2 border-opacity-30 p-1 rounded-lg
                        hover:bg-opacity-30 hover:border-opacity-60 duration-300
                    "
                        href={project.links.site}
                        target="_blank"
                    >
                        Live Site
                    </a>
                    <a
                        className="bg-white bg-opacity-10 border-white border-2 border-opacity-30 p-1 rounded-lg
                        hover:bg-opacity-30 hover:border-opacity-60 duration-300
                    "
                        href={project.links.repo}
                        target="_blank"
                    >
                        GitHub Repo
                    </a>
                </div>
            </div>
            <a
                className={`flex-1 ${reverse ? "hidden" : ""}`}
                href={project.links.site}
                target="_blank"
            >
                <div className="card-zoom aspect-video rounded-lg">
                    <div className={`card-zoom-image ${project.image}`} />
                </div>
            </a>
        </motion.div>
    );
}
export default ProjectCard;
