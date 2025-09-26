import { useIonViewDidEnter, useIonViewDidLeave } from "@ionic/react";
import React, { useEffect } from "react";

const Contact: React.FC = () => {
  useEffect(() => {
    console.log("Contact page useEffect");
    return () => {
      console.log("Contact page useEffect cleanup");
    };
  }, []);

  // Won;t work as not wrapped in ionic-page
  useIonViewDidEnter(() => {
    console.log("Contact page useIonViewDidEnter");
  });

  useIonViewDidLeave(() => {
    console.log("Contact page useIonViewDidLeave");
  });

  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
