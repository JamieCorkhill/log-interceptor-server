import React from 'react';

import { Statistics, ConnectionStatus } from '../statistics';
import { Actions } from '../actions';

import styles from './header.scss';

interface IProps {
    status: ConnectionStatus;
    bufferSize: number;
    totalLogs: number;

    onTerminateClientConnectionClick: () => any;
    onClearLogsClick: () => any;
}

export const Header: React.FC<IProps> = (props) => {
    return (
        <div className={styles.container}>
            <Statistics
                status={props.status}
                bufferSize={props.bufferSize}
                totalLogs={props.totalLogs}
            />
            <Actions
                onTerminateConnectionClick={props.onTerminateClientConnectionClick}
                onClearLogsClick={props.onClearLogsClick}
            />
        </div>
    )
}