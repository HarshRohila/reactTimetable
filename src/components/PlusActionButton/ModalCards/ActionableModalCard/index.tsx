import React, { Fragment } from 'react';
import { IonButton } from '@ionic/react';
import ModalCard from '../ModalCard';
// import './ExploreContainer.css';

interface ContainerProps { title: string, onClose: Function }

const ActionableModalCard: React.FC<ContainerProps> = ({title, children, onClose}) => {

    const onClick = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onClose();
    }

    const buttons = (
        <Fragment>
            <IonButton size="small">Save</IonButton>
            <IonButton size="small" onClick={onClick}>Close</IonButton>
        </Fragment>
    );

    return (
        <ModalCard title={title} buttons={buttons} onClose={onClose}>
            {children}
        </ModalCard>
    );
};

export default ActionableModalCard;
