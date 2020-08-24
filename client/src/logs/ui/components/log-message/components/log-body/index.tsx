import React from 'react';

import { LogLevel } from '../../../../../../common/level';
import { JsonView } from '../json-view';

import logTextStyles from './log-text.scss'

interface ILogTextProps {
    level: LogLevel;
    text: string;
}

const LogText: React.FC<ILogTextProps> = (props) => {
    return (
        <p className={logTextStyles.logText}>{props.text}</p>
    );
};

interface ILogBodyProps {
    level: LogLevel;
    text: string;
}

export const LogBody: React.FC<ILogBodyProps> = (props) => {
    return (
        <div>
            <LogText 
                level={props.level}
                text={props.text}
            />
            <JsonView/>
        </div>
    );
};