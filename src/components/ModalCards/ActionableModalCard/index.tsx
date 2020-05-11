import React from 'react';
import { IonButton } from '@ionic/react';
import ModalCard from '../ModalCard';
import './style.scss';

interface ContainerProps { title: string, onClose: Function, onSave: Function }

const ActionableModalCard: React.FC<ContainerProps> = ({title, children, onClose, onSave}) => {

    const onClick = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onClose();
    }

    const onClickSave = () => onSave();

    const buttons = (
        <div className="buttons-container">
            <IonButton size="small" onClick={onClickSave}>SAVE</IonButton>
            <IonButton size="small" onClick={onClick}>CLOSE</IonButton>
        </div>
    );

    return (
        <ModalCard title={title} buttons={buttons} onClose={onClose}>
            {children}
        </ModalCard>
    );
};

export default ActionableModalCard;
