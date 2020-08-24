import React from 'react';

import { LogLayout } from '../layouts';
import { Header } from '../components/header';
import { LogMessage } from '../components/log-message';

import { ConnectionStatus } from '../components/statistics';

export const LogView = () => {
    return (
        <LogLayout>
            <Header
                status={ConnectionStatus.RECEIVING}
                bufferSize={500}
                totalLogs={321}

                onClearLogsClick={() => null}
                onTerminateClientConnectionClick={() => null}
            />
            <LogMessage/>
        </LogLayout>
    )
}