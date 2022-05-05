import React from "react";
import "../App.css"
import Navigation from "./Navigation";

const NavigationList = ({ navigations, isActive, onHandleActiveLink }) => {
  return (
    <div className="navigation-container">
      <ul className="navigation-list">
        {navigations.map((navigation) => (
          <Navigation
            key={navigation.id}
            navigation={navigation}
            isActive={isActive}
            onHandleActiveLink={onHandleActiveLink}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavigationList;
