import {useState, useEffect} from 'react'
import Markdown from 'react-markdown'


const Notes = ({documentName}) => {

  
    const[mdText, setMdText] = useState('')
    useEffect(() => {
        fetch(`./static/${documentName}.md`)
        .then((res)=> res.text())
        .then((md)=>{
            setMdText(md)
        })
    }, []);

    const components = {
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-bold my-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl font-bold my-3" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-2xl font-bold my-2" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="my-4" {...props} />
        ),
        code: ({ inline, node, ...props }) => (
          inline ? (
            <code className="text-blue-500 bg-gray-100 px-1 rounded" {...props} />
          ) : (
            <pre className="my-4 p-4 bg-gray-800 text-white rounded">
              <code {...props} />
            </pre>
          )
        ),
      };
    
      return (
        <div className="container mx-auto my-8 px-4">
          <div className="prose max-w-full">
            <Markdown components={components}>{mdText}</Markdown>
          </div>
        </div>
      );
    };
    

export default Notes;
