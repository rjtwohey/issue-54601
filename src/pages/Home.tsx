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
import { useDispatch } from 'react-redux';
import { increment, updateMessage } from '../store/counterReducer';

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/about');
  };

  const handleClickTabs = () => {
    history.push('/tabs');
  };
  
  const handleClickTest = () => {
    history.push('/test');
  };

  const handleUpdateReduxState = () => {
    console.log('Updating Redux State');
    dispatch(increment());
    dispatch(updateMessage(`Updated from Home at ${new Date().toLocaleTimeString()}`));
  };

  useEffect(() => {
    console.log('Home page useEffect');
    return () => {
      console.log('Home page useEffect cleanup');
    };
  }, []); 

  useIonViewDidEnter(() => {
    console.log('Home page useIonViewDidEnter');
  });

  useIonViewDidLeave(() => {
    console.log('Home page useIonViewDidLeave');
  });
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to Ionic React App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>This is the home page of your Ionic React application.</p>
            {/* <IonButton expand="block" onClick={handleClick}>
              Go to About Page
            </IonButton> */}
            <IonButton expand="block" onClick={handleClickTabs}>
              Go to Tab
            </IonButton>
            {/* <IonButton expand="block" onClick={handleClickTest}>
              Go to Test
            </IonButton> */}
            <IonButton expand="block" onClick={handleUpdateReduxState} color="secondary">
              Update Redux State
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
