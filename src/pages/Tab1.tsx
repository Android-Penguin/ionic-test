import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          <IonButton href="/tab2">
            Open Camera Tab
          </IonButton>
          <p>Note: This app will only store files locally, no data is sent elsewhere</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
