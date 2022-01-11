import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonButton,
} from '@ionic/react';
import { camera, trash, closeOutline, arrowUndo} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const { photos, takePhoto, removePhoto, clearPhotos } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol class="img-container" size="3" key={index}>
                <IonButton class="remove-img-btn" color="danger" size="small" shape="round" onClick={() => removePhoto(photo.filepath)}>
                  <IonIcon icon={closeOutline}></IonIcon>
                </IonButton>
                <IonImg src={photo.webviewPath}/>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Take photo */}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonRow>
            <IonCol>
              {/* Remove last photo */}
              <IonFabButton onClick={() => removePhoto("latest")} title="Remove last photo">
                <IonIcon icon={arrowUndo}></IonIcon>
              </IonFabButton>
            </IonCol>
            <IonCol>
              {/* Discard all photos */}
              <IonFabButton onClick={() => clearPhotos()} title="Discard all photos">
                <IonIcon icon={trash}></IonIcon>
              </IonFabButton>
            </IonCol>
          </IonRow>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
