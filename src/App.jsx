/* eslint-disable no-unused-vars */
import { useState } from "react";
import BgChanger from "./components/Bg-changer/Index";
import TestUseFetchCustomHook from "./components/CustomHook/Test";
import TestingCustomHook from "./components/CustomHook/Test";
import { FindGithubUser } from "./components/GithubUser/FindGithubUser";
import PasswordGen from "./components/PasswordGenerator/Index";
import SearchUser from "./components/SearchField";
import SearchedField from "./components/SearchField/Copy";
import { Accordian } from "./components/accordian";
import ModelTest from "./components/customModel/ModelTest";
import { TabsComponent } from "./components/dynamicTabs/maintab";
import LoadMore from "./components/load-more-data";
import SwitchMode from "./components/modeSwitch";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/randomColor";
import ScrollIndicator from "./components/scrollindicator";
import StarRating from "./components/starRating";
import TicTacToe from "./components/tictactoe/TicTacToe";
import CounterIndex from "./components/CounterContext/Index";

function App() {
  return (
    <>
      <div>
        {/* ACCORDIAN  */}
        {/* <Accordian /> */}
        {/* RandomColor  */}
        {/* <RandomColor /> */}
        {/* Star Rating Component  */}
        {/* We pass no Of Starts just To make an array of Stars  */}
        {/* <StarRating noOfStars={10} /> */}
        {/* Image slider  */}
        {/* <ImageSlider /> */}
        {/* Load More Data  */}
        {/* <LoadMore /> */}
        {/* Qr-code-generator  */}
        {/* <QrCodeGenerator /> */}
        {/* Mode Changer  */}
        {/* <SwitchMode /> */}
        {/* Scroll Indicator  */}
        {/* <ScrollIndicator /> */}
        {/* DyanmicTabs  */}
        {/* <MainTabs /> */}
        {/* <TabsComponent /> */}
        {/* Custom Model  */}
        {/* <ModelTest /> */}
        {/* Github User Finder  */}
        {/* <FindGithubUser /> */}
        {/* SearchUser  */}
        {/* <SearchUser /> */}
        {/* <SearchedField /> */}
        {/* TicTacToe  */}
        {/* <TicTacToe /> */}
        {/* Using Custom HOOK  */}
        {/* <TestUseFetchCustomHook /> */}
        {/* Bg Changer  */}
        {/* <BgChanger /> */}
        {/* Password Generator  */}
        {/* <PasswordGen /> */}
        <CounterIndex />
      </div>
    </>
  );
}

export default App;
