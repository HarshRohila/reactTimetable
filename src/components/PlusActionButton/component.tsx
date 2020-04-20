import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { add } from 'ionicons/icons'; 
import BreakActionItem from './BreakActionItem';
import WorkHoursActionItem from './WorkHoursActionItem';

const PlusActionButton: React.FC = () => {
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
                <IonIcon icon={add} />
            </IonFabButton>

            <IonFabList side="top">
                <BreakActionItem></BreakActionItem>
                <WorkHoursActionItem />
            </IonFabList>
        </IonFab>
    );
};

export default PlusActionButton;
