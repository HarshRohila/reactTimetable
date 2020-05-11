import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import PlusActionButton from '../components/PlusActionButton/component';
import EditButton from '../components/EditButton';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer />
        <PlusActionButton />
        <EditButton />
      </IonContent>
    </IonPage>
  );
};

export default Home;
