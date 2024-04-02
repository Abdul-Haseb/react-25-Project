import { useState } from "react";

/* eslint-disable react/prop-types */
export const Tab = ({ tabContent, change }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    change(getCurrentIndex);
  };
  return (
    <div className="tabcontent-wrapper">
      <div className="heading-wrapper">
        {tabContent.map((item, index) => (
          <h1
            onClick={() => handleOnClick(index)}
            key={index}
            className={`heading ${currentTabIndex === index ? "active-tab" : ""}`}
          >
            {item.heading}
          </h1>
        ))}
      </div>
      <div className="tab-content">
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
};

//  <>
// /* eslint-disable react/prop-types */
// import { useState } from "react";

// export default function Tabs({ tabsContent }) {
//   const [currentTabIndex, setCurrentTabIndex] = useState(0);

//   const handleCurrentIndx = (getCurrentIndex) => {
//     setCurrentTabIndex(getCurrentIndex);
//     // onChange(getCurrentIndex);
//   };
//   return (
//     <div className="tabs-wrapper">
//       <div className="heading">
//         {tabsContent.map((item, index) => (
//           <div
//             onClick={() => handleCurrentIndx(index)}
//             key={index}
//             className={`tab-label ${currentTabIndex === index ? "activeTab" : null}`}
//           >
//             <h1>{item.label}</h1>
//           </div>
//         ))}
//       </div>
//       <div className="tabs-content">
//         {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
//       </div>
//     </div>
//   );
// }

// </>
