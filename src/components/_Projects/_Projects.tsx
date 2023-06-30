import NodeFlow from "./NodeFlow";

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
                <p className="text-3xl mb-8">
                    Here are some of the projects I've worked on.
                </p>
                <div className="flex flex-col gap-8">
                    {/* Node Flow */}
                    <NodeFlow />
                    {/* Bintendo */}
                    <div className="flex flex-row gap-8">
                        <div className="flex-1 p-4">Bintendo</div>
                        <div className="bg-white bg-opacity-10 rounded-lg flex-1 w-full h-80" />
                    </div>
                    {/* Interactive Fretboard */}
                    <div className="flex flex-row-reverse gap-8">
                        <div className="flex-1 p-4">Interactive Fretboard</div>
                        <div className="bg-white bg-opacity-10 rounded-lg flex-1 w-full h-80" />
                    </div>
                    {/* Tribute */}
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
