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

const Chart: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    console.log("Chart page useEffect - Component mounted");

    return () => {
      console.log("Chart page useEffect cleanup - Component unmounting");
    };
  }, []);

  useIonViewDidEnter(() => {
    console.log("Chart page useIonViewDidEnter");
  });

  useIonViewDidLeave(() => {
    console.log(
      "Chart page useIonViewDidLeave - This should trigger when leaving"
    );
  });

  const handleGoBack = () => {
    history.push("/tabs");
  };

  const handleGoToHome = () => {
    history.push("/");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chart Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Chart Page</h1>
        <p>
          This page demonstrates the issue with useIonViewDidLeave not
          triggering.
        </p>

        <div style={{ margin: "20px 0" }}>
          <h3>Expected Behavior:</h3>
          <ul>
            <li>
              When navigating from /tabs/home → /chart, useIonViewDidLeave
              should trigger on HomeTab
            </li>
            <li>useEffect cleanup should also trigger</li>
          </ul>
        </div>

        <div style={{ margin: "20px 0" }}>
          <h3>Actual Behavior:</h3>
          <ul>
            <li>useIonViewDidLeave does NOT trigger on HomeTab</li>
            <li>useEffect cleanup does NOT trigger</li>
            <li>
              This happens because /tabs is destroyed when navigating to /chart
            </li>
          </ul>
        </div>

        <IonButton
          className="ion-margin-top"
          expand="block"
          onClick={handleGoBack}
        >
          Go Back to Tabs
        </IonButton>

        <IonButton
          className="ion-margin-top"
          expand="block"
          onClick={handleGoToHome}
        >
          Go to Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Chart;
