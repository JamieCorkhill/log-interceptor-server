import React from 'react';

import styles from './log-layout.scss';

export const LogLayout: React.FC = (props) => {
    return (
        <div className={styles.logLayout}>
            {props.children}
        </div>
    );
};