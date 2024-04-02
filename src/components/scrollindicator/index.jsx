import { useEffect, useState } from "react";
import "./style.css";

const URL = "https://dummyjson.com/products?limit=100";

export default function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [errorMessage, setErrorMessage] = "";
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleFetchingData = async () => {
    try {
      SetLoading(true);
      const response = await fetch(URL);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        SetLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    handleFetchingData();
  }, []);

  {
    loading ? <div>The Data is yet to be laoded</div> : null;
  }
  {
    errorMessage ? <div>There is an error {errorMessage}</div> : null;
  }

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScroll / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  console.log(data, scrollPercentage);

  return (
    <div className="data-container">
      <h1>The Scrolling Indicator</h1>
      <div className="scroll-progress-tracking-container">
        <div
          className="current-progress-bar"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      <div className="data">
        {data && data.length
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
