import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BorderSection from './CustomBorders';

const ProjectsItems = [
    {
        id: 1,
        projectTitle: 'Project 1',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?'
    },
    {
        id: 2,
        projectTitle: 'Project 2',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?'
    },
    {
        id: 3,
        projectTitle: 'Project 3',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?'
    },
    {
        id: 4,
        projectTitle: 'Project 4',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?'
    }
]

function ProjectCard(props) {
    return (
        <div className='col-md-6'>
            <Card className='h-100 shadow'>
                <Card.Img variant='top' src={props.projectImage} />
                <Card.Body className='p-5'>
                    <Card.Title className='fw-bold text-uppercase mb-4 fs-3'>{props.projectName}</Card.Title>
                    <Card.Text>{props.projectDesc}</Card.Text>
                    <Button className='shadow text-capitalize' variant='outline-primary'>View project</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

function ProjectsSection() {
    return (
        <div id='projects'>
            <div className='container' style={{marginBottom:'50px'}}>
                <h2 className='mb-5'>My projects</h2>
                <div className='row g-4'>
                    {
                        ProjectsItems.map((project) => <ProjectCard key={project.id} projectName={project.projectTitle} projectDesc={project.projectDescription} />)
                    }
                </div>
            </div>
            <BorderSection />
        </div>
    )
}

export default ProjectsSection;