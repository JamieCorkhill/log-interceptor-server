import React from 'react';

import metadataStyles from './metadata.scss';
import metadataLineItemStyles from './metadata-line-item.scss';

interface IMetadataLineItemProps {
    title: string;
    value: string;
}

const MetadataLineItem: React.FC<IMetadataLineItemProps> = (props) => {
    return (
        <div className={metadataLineItemStyles.container}>
            <span className={metadataLineItemStyles.title}>{props.title}: </span>
            <span className={metadataLineItemStyles.value}>{props.value}</span>
        </div>   
    );
};

export const Metadata = () => {
    return (
        <div className={metadataStyles.metadataContainer}>
            <h3 className={metadataStyles.heading}>Metadata</h3>
            <div className={metadataStyles.metadataViewer}>
                <MetadataLineItem title="Hostname" value="LAPTOP-Q22LR6RF"/>
                <MetadataLineItem title="ID" value="45fas4f5a4f5a4f4as1c"/>
                <MetadataLineItem title="User Agent" value="Windows NT / AppleWebKit 4.0 - mozilla"/>
                <MetadataLineItem title="Timestamp" value="484151252123785"/>
            </div>
        </div>
    )
}