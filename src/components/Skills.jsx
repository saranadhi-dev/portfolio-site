import BorderSection from "./CustomBorders";


function Skills() {

    function CardContainer({ title, skills }) {
        return (
            <div className="skills-card shadow">
                <div className="skills-card-header">{title}</div>
                <div className="skills-card-body">
                    <div className="skills-card-tags">
                        {skills.map((tech, index) => (
                            <span key={index} className="skills-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div id="skills">
            <div className="container mb-5">
                <h2 className='text-capitalize text-start text-primary lh-1 mb-4'>Technical Skills</h2>
                <div className="skills-container">
                    <CardContainer
                        title="Mobile Development"
                        skills={['React Native', 'Flutter', 'Dart', 'Android (Java/Kotlin)']}
                    />
                    <CardContainer
                        title="Web Development"
                        skills={['React.js', 'Node.js', 'Express.js']}
                    />
                    <CardContainer
                        title="Backend & Database"
                        skills={['PostgreSQL', 'REST APIs']}
                    />
                    <CardContainer
                        title="Cloud & DevOps"
                        skills={['Firebase Cloud Functions', 'Google Cloud', 'Docker']}
                    />
                    <CardContainer
                        title="Version Control & Tools"
                        skills={['Git', 'Bitbucket', 'VS Code', 'Postman', 'Linux']}
                    />
                </div>
            </div>
            <BorderSection />
        </div>
    );
}

export default Skills;