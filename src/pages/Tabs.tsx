import {
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonViewDidEnter,
  useIonViewDidLeave,
} from "@ionic/react";
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import HomeTab from "./HomeTab";

const Tabs: React.FC = () => {
  useEffect(() => {
    console.log("Tabs page useEffect");
    return () => {
      console.log("Tabs page useEffect cleanup");
    };
  }, []);

  useIonViewDidEnter(() => {
    console.log("Tabs page useIonViewDidEnter");
  });

  useIonViewDidLeave(() => {
    console.log("Tabs page useIonViewDidLeave");
  });

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" component={HomeTab} />
      </IonRouterOutlet>
      <IonTabBar slot="top">
        <IonTabButton
          layout="icon-start"
          selected={true}
          tab="home"
          href={"/tabs/home"}
          disabled={false}
        >
          <IonLabel>Visit Sub Route tabs/home</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
