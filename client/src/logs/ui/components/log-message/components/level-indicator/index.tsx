import React from 'react';

import { LogLevel } from '../../../../../../common/level';

import styles from './level-indicator.scss';

interface IProps {
    level: LogLevel;
}

export const LogLevelIndicator: React.FC<IProps> = (props) => (
    <div className={styles.logLevelIndicator}></div>
)