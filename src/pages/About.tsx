import React, { useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  useIonViewDidLeave,
  useIonViewDidEnter
} from '@ionic/react';
import { useHistory } from 'react-router';

const About: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  const handleClickContact = () => {
    history.push('/contact');
  };

  useEffect(() => {
    console.log('About page useEffect');
  }, []);

  useIonViewDidEnter(() => {
    console.log('About page useIonViewDidEnter');
  });

  useIonViewDidLeave(() => {
    console.log('About page useIonViewDidLeave');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>About This App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>This is a simple Ionic React application with navigation between two pages.</p>
            <p>Built with:</p>
            <ul>
              <li>React 17.0.1</li>
              <li>Ionic React 6.7.5</li>
              <li>React Router 5.2.0</li>
            </ul>
            <IonButton expand="block" onClick={handleClick}>
              Back to Home
            </IonButton>
            <IonButton expand="block" onClick={handleClickContact}>
              Back to contact
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
