import HeaderImg from '../assests/Images/profile.jpg';
// import { Button } from 'react-bootstrap';

function Header() {
    return (
        <header className='pt-5' id='home'>
            <div className='container py-md-5'>
                <div className='row'>
                    <div className='col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0'>
                        <h1 className='text-secondary fw-bold lh-1'>Saran Aadithyan V</h1>
                        <h2 className='text-capitalize text-start text-primary lh-1 mb-3'>
                            Software developer<br />
                        </h2>
                        <div style={{ marginLeft: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
                            {/* <a href={"https://github.com/saranadhi-dev"} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                                <i className="bi bi-github" style={{ fontSize: '24px' }}></i>
                            </a> */}
                            <a href={"https://www.linkedin.com/in/saran-aadithyan-v-74228b1a2/"} aria-label="LinkedIn" target="_blank" rel="noreferrer" >
                                <i className="bi bi-linkedin" style={{ fontSize: '24px' }}></i>
                            </a>
                        </div>
                        <div style={{marginTop:"8px",display:"flex",flexDirection:"row",alignItems:'center',gap:"12px"}}>
                            {/* <Button className='shadow text-capitalize' variant='outline-primary'>Download Resume</Button> */}
                            {/* <Button className='shadow text-capitalize' variant='outline-primary'>Contact Me</Button> */}
                        </div>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center justify-content-md-end'>
                        <img className='img-fluid w-50 rounded-circle shadow my-5' src={HeaderImg} alt="header img" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;