import React from 'react';

import styles from './level-indicator.scss';
import { LogLevel } from '../../../../../../common/level';

interface IProps {
    level: LogLevel;
}

export const LogLevelIndicator: React.FC<IProps> = (props) => (
    <div className={styles.logLevelIndicator}></div>
)