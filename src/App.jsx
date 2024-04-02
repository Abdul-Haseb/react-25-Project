/* eslint-disable no-unused-vars */
import { Accordian } from "./components/accordian";
import { TabsComponent } from "./components/dynamicTabs/maintab";
import ImageSlider from "./components/imageSlider";
import LoadMore from "./components/load-more-data";
import SwitchMode from "./components/modeSwitch";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/randomColor";
import ScrollIndicator from "./components/scrollindicator";
import StarRating from "./components/starRating";

function App() {
  return (
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
      <TabsComponent />
    </div>
  );
}

export default App;
