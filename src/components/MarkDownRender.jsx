import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSanitize from 'rehype-sanitize';

const MarkdownRenderer = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`/blogs/${id}.md`)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [id]);

    return (
        <div className='container'>
            <div className='markdown-container'>
                <ReactMarkdown
                    rehypePlugins={[rehypeSanitize]}
                    children={content}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={materialDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default MarkdownRenderer;