import React from 'react';

import { HeaderTitle } from '../header-title';

import statisticsStyles from './statistics.scss';
import statisticsItemStyles from './statistics-item.scss';

interface IStatisticsItemProps {
    title: string;
    value: string;
}

const StatisticsItem: React.FC<IStatisticsItemProps> = (props) => {
    return (
        <div className={statisticsItemStyles.container}>
            <span className={statisticsItemStyles.title}>{props.title}: </span>
            <span className={statisticsItemStyles.value}>{props.value}</span>
        </div>
    );
}

export enum ConnectionStatus {
    RECEIVING,
    CONNECTION_TERMINATED
}

interface IStatisticsProps {
    status: ConnectionStatus;
    bufferSize: number;
    totalLogs: number;
}

export const Statistics: React.FC<IStatisticsProps> = (props) => {
    const getStatusText = () => {
        return props.status === ConnectionStatus.RECEIVING
            ? 'Receiving'
            : 'Connection Terminated'
    }

    return (
        <div>
            <HeaderTitle title="Statistics"/>

            <div className={statisticsStyles.container}>
                <StatisticsItem title="Status" value={getStatusText()}/>
                <StatisticsItem title="Buffer Size" value={props.bufferSize.toString()}/>
                <StatisticsItem title="Total Logs" value={props.totalLogs.toString()}/>
            </div>
            
        </div>
    );
};