import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const opacityVariant = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: -100, opacity: 0 },
};

function NodeFlow() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
            console.log("Control visible");
        } else {
            control.start("hidden");
            console.log("Control hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={opacityVariant}
            initial="hidden"
            animate={control}
            className="flex flex-row gap-8"
        >
            <div className="flex-1">
                <h3 className="text-3xl font-roboto-slab mb-4">Node Flow</h3>
                <div className="flex flex-row gap-2 mb-4">
                    {[
                        "React",
                        "React Flow",
                        "Tailwind",
                        "Node.js",
                        "Express",
                        "PostgreSQL",
                    ].map((skill) => (
                        <div
                            key={skill}
                            className="bg-white bg-opacity-10 border-white border-2 border-opacity-30 p-1 rounded-lg"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
                <p className="mb-2">
                    Node Flow is a web application for modeling complex systems
                    via stock and flow diagrams. Node Flow is unique in that it
                    allows you to simulate flow of resources represented by the
                    diagram.
                </p>
                <p className="mb-4">
                    Future plans for Node Flow involve: Integrating a charting
                    library, adding sample diagrams, and allowing users to save
                    diagrams they've created via a Node.js backend.
                </p>
                <div className="flex flex-row gap-4">
                    <a
                        className="bg-white bg-opacity-10 border-white border-2 border-opacity-30 p-1 rounded-lg
                        hover:bg-opacity-30 hover:border-opacity-60 duration-300
                    "
                        href="https://node-flow-ten.vercel.app"
                        target="_blank"
                    >
                        Live Site
                    </a>
                    <a
                        className="bg-white bg-opacity-10 border-white border-2 border-opacity-30 p-1 rounded-lg
                        hover:bg-opacity-30 hover:border-opacity-60 duration-300
                    "
                        href="https://github.com/TMarche/node-flow"
                        target="_blank"
                    >
                        GitHub Repo
                    </a>
                </div>
            </div>
            <a
                className="flex-1"
                href="https://node-flow-ten.vercel.app"
                target="_blank"
            >
                <div className="card-zoom aspect-video rounded-lg">
                    <div className="card-zoom-image bg-node-flow-02" />
                </div>
            </a>
        </motion.div>
    );
}
export default NodeFlow;
