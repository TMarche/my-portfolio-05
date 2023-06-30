function Navigation({
    executeScroll,
    startRef,
    aboutRef,
    projectsRef,
    contactRef,
}: {
    executeScroll: (scrollToRef: React.RefObject<HTMLDivElement>) => void;
    startRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}) {
    return (
        <div
            className="fixed bg-white bg-opacity-10 z-50 w-full flex flex-row justify-between h-14
            backdrop-blur text-white border-b-2 border-white border-opacity-30 drop-shadow"
        >
            <div className="h-full pl-8 flex flex-row justify-center items-center">
                <div>Troy Marchesseault</div>
            </div>
            <nav className="sm:pr-8 sm:flex-1">
                <ul className="h-full sm:flex flex-row justify-end items-center gap-4">
                    <li>
                        <button
                            className="flex flex-row gap-1 hover:text-purple-900 ease-in-out duration-300"
                            onClick={() => executeScroll(startRef)}
                        >
                            Start
                        </button>
                    </li>
                    <li>
                        <button
                            className="flex flex-row gap-1 hover:text-purple-900 ease-in-out duration-300"
                            onClick={() => executeScroll(aboutRef)}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className="flex flex-row gap-1 hover:text-purple-900 ease-in-out duration-300"
                            onClick={() => executeScroll(projectsRef)}
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            className="flex flex-row gap-1 hover:text-purple-900 ease-in-out duration-300"
                            onClick={() => executeScroll(contactRef)}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;
