import BorderSection from './CustomBorders';
// import AboutImg from '../assets/images/about-img.jpg';

function AboutSection() {
    return (
        <div id='about'>
            <BorderSection />
            <div className='container'>
                <div className='flex-column-reverse flex-md-row row'>
                    <div className='col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
                        {/* <img className='img-fluid w-75 shadow' src={AboutImg} alt="about img" /> */}
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className='text-capitalize text-start text-primary lh-1 mb-4'>Tech-Driven Developer</h2>
                        <p className='text-start'>
                            I’m a Full-Stack Developer with real-world experience in building and launching both web and mobile applications. I’ve worked on cross-platform mobile apps using React Native and Flutter focusing on creating apps that are fast, easy to use, and built to handle growth.
                        </p>
                        <p className='text-start mb-3'>
                            On the backend, I’m comfortable working with tools like Node.js and Express, and I also have experience with the PERN stack (PostgreSQL, Express, React, Node). I know how to connect apps with APIs, work with Firebase, and build real-time features that users can rely on.
                        </p>
                        <p className='text-start mb-3'>
                            I enjoy working on web apps using React.js and I understand how to manage everything from the frontend to the backend. I’ve also worked with systems like user authentication, cloud functions, and microservices.
                        </p>
                        <p className='text-start mb-3'>
                            I’m used to working in Agile teams using tools like Git setting up CI/CD pipelines and following DevOps practices to help things run smoothly. I like writing clean, organized code and building reusable parts that save time and make apps better.
                        </p>
                        <p className='text-start mb-5'>
                            More than anything, I’m a tech enthusiast who loves to keep learning. I’m always exploring new areas like cloud computing, DevOps, and machine learning. I enjoy trying out new technologies and finding smart ways to use them in real projects. For me, every project is a chance to improve, learn something new, and build something meaningful.
                        </p>
                    </div>
                </div>
            </div>
            <BorderSection />
        </div>
    )
}

export default AboutSection;