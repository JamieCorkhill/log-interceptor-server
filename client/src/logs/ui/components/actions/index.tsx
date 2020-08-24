import React from 'react';

import { HeaderTitle } from '../header-title';

import actionStyles from './actions.scss';
import actionItemStyles from './action-item.scss';

interface IActionItemProps {
    title: string;
    onClick?: () => any;
}

const ActionItem: React.FC<IActionItemProps> = (props) => {
    return (
        <button className={actionItemStyles.actionButton} onClick={props.onClick}>
            {props.title}
        </button>
    );
}

interface IProps {
    onClearLogsClick: () => any;
    onTerminateConnectionClick: () => any;
}

export const Actions: React.FC<IProps> = (props) => {
    return (
        <div>
            <HeaderTitle title="Actions"/>

            <div className={actionStyles.container}>
                <ActionItem 
                    title="Terminate client connection"
                    onClick={props.onTerminateConnectionClick}
                />

                <ActionItem 
                    title="Clear logs"
                    onClick={props.onClearLogsClick}
                />
            </div>
        </div>
    );
}