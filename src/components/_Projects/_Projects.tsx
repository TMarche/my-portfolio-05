function _Projects({
    projectsRef,
}: {
    projectsRef: React.RefObject<HTMLDivElement>;
}) {
    return (
        <section
            className="relative  backdrop-blur-xl
            flex flex-col items-center py-20
        "
        >
            {/* About Scroll Target */}
            <div ref={projectsRef} className="absolute -top-14 h-14 w-full" />
            {/* About Content */}
            <div className="w-full max-w-[1144px]">
                <h2 className="text-5xl font-roboto-slab mb-6">Projects</h2>
                <p className="text-3xl mb-4">
                    Here are some of the projects I've worked on.
                </p>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row-reverse gap-8">
                        <div className="flex-1 p-2">
                            <h3 className="text-3xl font-roboto-slab mb-4">
                                Node Flow
                            </h3>
                            <div className="flex flex-row gap-2 mb-4">
                                {[
                                    "React",
                                    "React Flow",
                                    "Tailwind",
                                    "Node.js",
                                    "Express",
                                    "PostgreSQL",
                                ].map((skill) => (
                                    <div className="bg-white bg-opacity-10 border-white border-2 border-opacity-30 p-1 rounded-lg">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                            <p className="mb-2">
                                Node Flow is a web application for modeling
                                complex systems via stock and flow diagrams.
                                Node Flow is unique in that it allows you to
                                simulate flow of resources represented by the
                                diagram.
                            </p>
                            <p>
                                Future plans for Node Flow involve: Integrating
                                a charting library, adding sample diagrams, and
                                allowing users to save diagrams they've created
                                via a Node.js backend.
                            </p>
                        </div>
                        <div
                            className="bg-white bg-opacity-10 rounded-lg flex-1 w-full aspect-video
                            bg-node-flow-02 bg-cover bg-center
                        "
                        />
                    </div>
                    <div className="flex flex-row gap-8">
                        <div className="flex-1 p-4">Bintendo</div>
                        <div className="bg-white bg-opacity-10 rounded-lg flex-1 w-full h-80" />
                    </div>
                    <div className="flex flex-row-reverse gap-8">
                        <div className="flex-1 p-4">Interactive Fretboard</div>
                        <div className="bg-white bg-opacity-10 rounded-lg flex-1 w-full h-80" />
                    </div>
                    <div className="flex flex-row gap-8">
                        <div className="flex-1 p-4">Tribute</div>
                        <div className="bg-white bg-opacity-10 rounded-lg flex-1 w-full h-80" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default _Projects;
