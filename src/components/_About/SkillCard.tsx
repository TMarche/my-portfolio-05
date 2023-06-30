function SkillCard({ skill }: { skill: string }) {
    return (
        <div
            className="h-20 w-40 bg-white bg-opacity-10 rounded-lg flex flex-row justify-center items-center
                border-2 border-white border-opacity-30
            "
        >
            <div>{skill}</div>
        </div>
    );
}
export default SkillCard;
