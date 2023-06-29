import { useRef } from "react";
import Navigation from "./components/Navigation";
import "./stars.sass";

function App() {
    const ref = useRef<HTMLDivElement>(null);
    const startRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const executeScroll = (scrollToRef: React.RefObject<HTMLDivElement>) => {
        if (scrollToRef.current === null) return;
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            ref={ref}
            className="bg-gradient-to-br from-blue-600 via-teal-500 to-purple-900 font-roboto scroll-smooth"
        >
            <Navigation
                executeScroll={executeScroll}
                startRef={startRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
            />
            {/* Start Section */}
            <div
                ref={startRef}
                id="star-container"
                className="relative min-h-screen flex flex-row justify-center items-center"
            >
                <div className="relative">
                    <div
                        className="flex flex-col gap-5 text-white drop-shadow-lg
                        border-2 p-8 rounded-lg bg-white bg-opacity-10 font-roboto-slab
                    "
                    >
                        <div className="text-5xl">
                            Hi, my name is{" "}
                            <span className="font-bold text-teal-300">
                                Troy Marchesseault.
                            </span>
                        </div>
                        <div className="text-5xl">
                            I'm a full-stack web developer.
                        </div>
                    </div>
                </div>
                <div id="stars" className="absolute top-0 left-0 h-full" />
                <div id="stars2" className="absolute top-0 left-0 h-full" />
                <div id="stars3" className="absolute top-0 left-0 h-full" />
            </div>
            {/* About */}
            <div className="relative min-h-[50vh]">
                {/* About Scroll Target */}
                <div
                    ref={aboutRef}
                    className="absolute -top-14 h-14 w-full"
                ></div>
                <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-10 backdrop-blur-xl"></div>
            </div>
            {/* Projects */}
            <div className="relative min-h-screen">
                {/* Projects Scroll Target */}
                <div
                    ref={projectsRef}
                    className="absolute -top-14 h-14 w-full"
                ></div>
                <div className="absolute top-0 left-0 h-full w-full"></div>
            </div>
            {/* Contact */}
            <div className="relative min-h-[50vh]">
                {/* Contact Scroll Target */}
                <div
                    ref={contactRef}
                    className="absolute -top-14 h-14 w-full"
                ></div>
                <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-10 backdrop-blur-xl"></div>
            </div>
        </div>
    );
}

export default App;