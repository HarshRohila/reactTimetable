import React from 'react';
import { IonList, IonChip } from '@ionic/react';
// import './ExploreContainer.css';

interface ContainerProps { onDurationChange: Function }

const DurationChips: React.FC<ContainerProps> = ({ onDurationChange }) => {

    const minLabels = ['15', '30', '45'].map(i => `${i} mins`);
    const hourLabels = ['1', '2'].map(i => `${i} hr`);
    const durationLabels = minLabels.concat( hourLabels );

    const handleDurationChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const duration = target.value;
        onDurationChange( duration );
    }

    const durationChips = durationLabels.map(i => {
        return (
            <IonChip outline color="primary" key={i}>
                <label>
                    {i}
                    <input 
                        type="radio" 
                        name="duration" 
                        value={i} 
                        onChange={handleDurationChange} />
                </label>
            </IonChip>
        )
    });

    return (
        <IonList>
            {durationChips}
        </IonList>
    );
};

export default DurationChips;
