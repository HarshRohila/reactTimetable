import React from 'react';
import { IonCard, IonCardContent, IonHeader, IonTitle } from '@ionic/react';
// import './ExploreContainer.css';

interface ContainerProps { title: string }

const ModalCard: React.FC<ContainerProps> = ({title, children}) => {
  return (
    <IonCard>
        <IonCardContent>
            <IonHeader>
                <IonTitle>{title}</IonTitle>
            </IonHeader>
            {children}
        </IonCardContent>
    </IonCard>
  );
};

export default ModalCard;
