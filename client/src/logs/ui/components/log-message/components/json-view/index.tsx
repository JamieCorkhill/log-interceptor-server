import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';

interface IProps {
    json: string;
}

export const JsonView: React.FC<IProps> = (props) => {
    return (   
        <SyntaxHighlighter 
            language="json" 
            style={style}
            customStyle={{ 
                width: '100%',
                fontSize: '1.5rem', 
                backgroundColor: 'var(--color-black)',
                borderRadius: '1rem',
                paddingLeft: '1.5rem',
                marginTop: '2rem'
            }}
            
        >
            {props.json}
        </SyntaxHighlighter>
    )
}