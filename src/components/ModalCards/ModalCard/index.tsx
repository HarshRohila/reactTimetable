import React, { ReactElement } from 'react';
import { IonCard, IonCardContent, IonHeader, IonTitle } from '@ionic/react';
import XModal from '../../XModal/component';
// import './ExploreContainer.css';

interface ContainerProps { title: string, buttons?: ReactElement, onClose: Function }

const ModalCard: React.FC<ContainerProps> = ({title, children, buttons, onClose}) => {

    const card = <IonCard>
                    <IonCardContent>
                        <IonHeader>
                            <IonTitle>{title}</IonTitle>
                        </IonHeader>
                        {children}
                        {buttons ? buttons : null}
                    </IonCardContent>
                </IonCard>

    return (
        <>
            <XModal 
                closeModal={onClose}>
                {card}
            </XModal>
        </>
    );
};

export default ModalCard;
