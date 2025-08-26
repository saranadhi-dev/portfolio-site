import BorderSection from "./CustomBorders";

function Experience() {
    return (
        <div id="skills">
            <div className="container">
                <h2 className='mb-3'>Work Experience</h2>
                <div className="container d-flex mt-3">
                    <div className="experience-card shadow-sm">
                        <div className="d-flex align-items-center mb-2">
                            <div className="company-logo">
                                <span>I</span>
                            </div>
                            <div className="ms-3">
                                <h5 className="mb-0 job-title">Software developer</h5>
                                <p className="mb-0 company-name">Ideelit Softwares LLP | Nov 2023 - Present</p>
                            </div>
                        </div>
                        <p className="job-desc">
                            At Ideelit Software, I began my journey in software development by building cross-platform mobile apps and web applications, primarily for legal consultation services and online retail platforms.
                        </p>
                    </div>
                </div>
            </div>
            <BorderSection />
        </div>
    );
}

export default Experience;