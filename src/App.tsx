import { useRef } from "react";
import Navigation from "./components/Navigation";
import "./stars.sass";
import About from "./components/_About/_About";
import Projects from "./components/_Projects/_Projects";

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
            className="bg-gradient-to-br from-blue-600 via-teal-500 to-purple-900 text-white font-roboto scroll-smooth"
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
                className="relative min-h-screen flex flex-col gap-10 justify-center items-center"
            >
                <div
                    className="z-10 flex flex-col gap-5 drop-shadow
                        border-2 border-white p-8 rounded-lg bg-white bg-opacity-10
                        font-roboto-slab backdrop-blur border-opacity-30
                    "
                >
                    <div className="text-5xl">
                        Hi, my name is{" "}
                        <span className="font-bold text-teal-300">
                            Troy Marchesseault.
                        </span>
                    </div>
                    <div id="description" className="text-5xl">
                        I'm a full-stack web developer.
                    </div>
                </div>
                <button
                    className="z-10 text-3xl p-4 border-2 
                        border-white rounded-lg bg-white bg-opacity-10
                        backdrop-blur border-opacity-30
                        hover:bg-opacity-40 hover:border-opacity-60 duration-300                 
                    "
                    onClick={() => {
                        executeScroll(contactRef);
                    }}
                >
                    Get in touch
                </button>
                <div id="stars" className="absolute top-0 left-0 h-full" />
                <div id="stars2" className="absolute top-0 left-0 h-full" />
                <div id="stars3" className="absolute top-0 left-0 h-full" />
            </div>
            {/* About */}
            <About aboutRef={aboutRef} />
            {/* Projects */}
            <Projects projectsRef={projectsRef} />
            {/* Contact */}
            <div className="relative min-h-[80vh]">
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
