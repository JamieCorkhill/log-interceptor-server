import React from 'react';

import styles from './header-title-styles.scss';

/**
 * Notice: This component contains a margin-bottom. While that breaks
 * component isolation levels, it is highly unlikely that this 
 * component will be used in other locations, thus it is tightly
 * bound to one use case, and said use case requires a bottom
 * margin.
 */

interface IProps {
    title: string;
}

export const HeaderTitle: React.FC<IProps> = ({ title }) => {
    return <p className={styles.headerTitle}>{title}</p>
}