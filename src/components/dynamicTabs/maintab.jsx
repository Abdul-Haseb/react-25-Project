import { Tab } from "./tabs";
import "./style.css";

export const TabsComponent = () => {
  const tabsData = [
    {
      heading: "Home",
      content: <div>This is tab 1 Content</div>,
    },
    {
      heading: "About",
      content: <div>This is tab 2 Content</div>,
    },
    {
      heading: "Random",
      content: <RandomComponent />,
    },
  ];

  const handleOnChange = (currentTab) => {
    console.log(currentTab);
  };
  return <Tab tabContent={tabsData} change={handleOnChange} />;
};

const RandomComponent = () => {
  return (
    <div>
      <h1>Random Component</h1>
      <p
        style={{
          maxWidth: "500px",
          columns: "200px 2",
          padding: "3px 8px",
          margin: "auto",
          border: "1px solid black",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
        repellendus amet aperiam numquam cumque, eius exercitationem cum
        architecto minus harum totam aut odit voluptates nulla possimus ducimus
        esse iure consequatur?
      </p>
    </div>
  );
};

// {
//   /* <>
// import Tabs from "./tabs";
// import "./style.css";

// export default function MainTabs() {
//   const RandomComponent = () => {
//     return <p>This is some Random Component Text</p>;
//   };
//   const tabs = [
//     {
//       label: "Tab 1",
//       content: <div>This is content for tab 1</div>,
//     },
//     {
//       label: "Tab 2",
//       content: <div>This is content for tab 2</div>,
//     },
//     {
//       label: "Tab 3",
//       content: <RandomComponent />,
//     },
//   ];

//   const handleCurentIndex = (getCurrentIndex) => {
//     console.log(getCurrentIndex);
//   };
//   return <Tabs tabsContent={tabs} />;
// }

// </> */
// }
