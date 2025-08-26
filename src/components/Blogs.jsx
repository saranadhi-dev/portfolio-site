import { Link } from 'react-router-dom';
import BorderSection from './CustomBorders';

function Blogs() {

    const blogs = [
        {
            id: 1,
            title: 'Cryptography',
            description: 'Learn how cryptography enables secure communication by converting plain text into unreadable cipher text.',
            link: "https://github.com/saranadhi-dev/crypto-graphic"
        },

    ];

    return (
        <div id='blogs'>
            <div className="container mb-5">
                <h2 className='text-capitalize text-start text-primary lh-1 mb-4'>Blogs</h2>
                <div className="blog-container">
                    {blogs.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            {/* <span className="read-more">
                                Read More <i className="bi bi-arrow-right"></i>
                            </span> */}
                            {/* <Link to={blog.link} className="read-more">
                                Read More <i className="bi bi-arrow-right"></i>
                            </Link> */}
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="read-more">
                                Read More <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <BorderSection />
        </div>
    )
}

export default Blogs;