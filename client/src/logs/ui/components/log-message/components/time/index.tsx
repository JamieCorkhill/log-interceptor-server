import React from 'react';

import styles from './time.scss';

interface IProps {
    // TODO: Decide if we want this coming in already formatted or if we'll
    // do that here.
    time: string;
}

export const TimeIndicator: React.FC<IProps> = (props) => (
    <span className={styles.time}>{props.time}</span>
)