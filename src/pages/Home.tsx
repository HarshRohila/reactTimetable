import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonFab, IonFabButton, IonIcon, IonFabList, IonText } from '@ionic/react';
import { add } from 'ionicons/icons'; 

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer />

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>

          <IonFabList side="top">
            <IonFabButton>
              <IonText color="primary">
                <p>Break</p>
              </IonText>
            </IonFabButton>
          </IonFabList>

        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;
