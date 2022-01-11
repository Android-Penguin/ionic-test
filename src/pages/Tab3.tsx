import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab3: React.FC = () => {
  const { fileSize } = usePhotoGallery();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Image storage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-align-items-center">
            <IonCol></IonCol>
            <IonCol>
              <IonTitle id="storage-title">Storage used:</IonTitle>
              <IonProgressBar color="secondary" value={fileSize}></IonProgressBar>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
