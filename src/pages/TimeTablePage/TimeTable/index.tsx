import React from 'react';
import './style.scss';

const TimeTable: React.FC = () => {

    const arr: number[] = [];
    for (let i = 0; i < 24; i++) {
        arr.push( i );
    }

    const rows = arr.map((i: number) => (
        <div key={i}>Child</div>
    ));

    return (
        <div className="time-table">{rows}</div>
    );
};

export default TimeTable;
