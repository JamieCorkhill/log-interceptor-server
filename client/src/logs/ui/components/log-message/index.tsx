import React from 'react';

import { LogHeader } from './components/log-header';
import { LogBody } from './components/log-body';
import { LogLevel } from '../../../../common/level';

import styles from './log-message.scss';

export const LogMessage = () => {
    return (
        <div style={{ marginTop: '3rem' }}>
            <LogHeader
                level={LogLevel.INFO}
                time="10:01:32"
            />

            <div className={styles.log}>
                <LogBody
                    level={LogLevel.INFO}
                    text="Connected to NATS Streaming Server."
                />
            </div>
        </div>
    );
}