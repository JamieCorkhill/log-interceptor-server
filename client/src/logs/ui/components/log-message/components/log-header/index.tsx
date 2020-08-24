import React from 'react';

import { LogLevelIndicator } from '../level-indicator';
import { TimeIndicator } from '../time';

import { LogLevel } from '../../../../../../common/level';

import styles from './log-header.scss';

interface IProps {
    level: LogLevel;
    time: string;
}

export const LogHeader: React.FC<IProps> = (props) => {
    return (
        <div className={styles.header}>
            <LogLevelIndicator level={props.level} />
            <TimeIndicator time={props.time}/>
        </div>
    );
}