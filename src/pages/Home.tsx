import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import PlusActionButton from '../components/PlusActionButton/component';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer />
        <PlusActionButton />
      </IonContent>
    </IonPage>
  );
};

export default Home;
