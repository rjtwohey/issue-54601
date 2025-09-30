import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
} from "@ionic/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const HomeTab: React.FC = () => {
  const history = useHistory();
  const { value, message } = useSelector((state: RootState) => state.counter);
  console.log("🚀 ~ HomeTab ~ value:", value)

  useEffect(() => {
    console.log("HomeTab page useEffect");
    return () => {
      console.log("HomeTab page useEffect cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("State changed:", { value, message });
  }, [value, message]);

  useIonViewDidEnter(() => {
    console.log("HomeTab page useIonViewDidEnter");
  });

  useIonViewDidLeave(() => {
    console.log("HomeTab page useIonViewDidLeave");
  });

  const handleClickHome = () => {
    history.replace("/");
  };

  const handleClickAbout = () => {
    history.replace("/about");
  };

  const handleClickChart = () => {
    history.replace("/chart");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1 style={{ margin: "20px" }}>Home Tab</h1>
        <div style={{ margin: "20px" }}>
          <h2>Redux State:</h2>
          <p>Counter Value: {value}</p>
          <p>Message: {message}</p>
        </div>
        <IonButton
          className="ion-margin-top"
          expand="block"
          onClick={handleClickHome}
        >
          Go to Home Page
        </IonButton>
        <IonButton
          className="ion-margin-top"
          expand="block"
          onClick={handleClickAbout}
        >
          Go to About Page
        </IonButton>
        <IonButton
          className="ion-margin-top"
          expand="block"
          onClick={handleClickChart}
        >
          Go to Chart Page (POC Test)
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
