/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// `${getUrl}?page=1&limit=${limit}`

import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const URL = "https://picsum.photos/v2/list?page=2&limit=15";
import "./style.css";
export default function ImageSlider() {
  // lets take 4 states
  // 1. For Loading
  // 2. Storing the Images in an array
  // 3. Showing the Single image at a time
  // 4. Error Message

  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const [loading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // lets Create a function to call an api for images

  const handleFetchImages = async (getURL) => {
    try {
      setIsLoading(true);
      const response = await fetch(getURL);
      const data = await response.json();

      if (data) {
        setImages(data);
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMsg(error);
      setIsLoading(false);
    }
  };

  const handlePrevClick = () =>
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);

  const handleNextClick = () =>
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  // Lets Take the use Effect so when ever We reload the page it should call the api instintly and load all the images

  useEffect(() => {
    handleFetchImages(URL);
  }, [URL]);

  console.log(images);

  //   Now lets Write A message For loading State

  if (loading) {
    return <div className="content loading">The content is Loading</div>;
  }

  if (errorMsg !== "") {
    return (
      <div className="content errorMsg">There is an Error: {errorMsg}</div>
    );
  }

  return (
    <div>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow left-arrow"
          onClick={handlePrevClick}
        />
        {/* Lets First load The images  */}
        {/* we Will Check if The images are availbe only then map over the array and load the images  */}
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.author}
                className={
                  currentImg === index ? "image" : "image inactive-images"
                }
              />
            ))
          : null}
        <span className="images-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  onClick={() => setCurrentImg(index)}
                  key={index}
                  className={
                    currentImg === index
                      ? "indicator active-indicator"
                      : "indicator"
                  }
                ></button>
              ))
            : null}
        </span>
        <BsArrowRightCircleFill
          className="arrow right-arrow"
          onClick={handleNextClick}
        />
      </div>
      <div className="author-name">
        {images.map((author, index) => (
          <p
            key={author.id}
            className={currentImg === index ? "name" : "inactive-name"}
          >
            {author.author}
          </p>
        ))}
      </div>
    </div>
  );
}

{
  /* <>
  export default function ImageSlider() {
    // First we have to create a usestate for all the images to be stored in an array
    const [images, setImages] = useState([]);
  
    //Set a loading State
    const [loading, setLoading] = useState(false);
  
    //Set an Error Message State
    const [errorMsg, setErrorMsg] = useState(null);
  
    const [currentImg, setCurrentImg] = useState(0);
    //   lets create A function for an Api Call
    const handleFetchImages = async (getUrl) => {
      try {
        setLoading(true);
        const response = await fetch(getUrl);
        const data = await response.json();
  
        setImages(data);
        setLoading(false);
      } catch (error) {
        setErrorMsg(error);
        setLoading(false);
      }
    };
  
    console.log(images);
    useEffect(() => {
      handleFetchImages(URL);
    }, [URL]);
  
    if (loading) {
      return <p>Images Are set to be load</p>;
    }
  
    if (errorMsg !== null) {
      return <p>There is an Error: {errorMsg}</p>;
    }
  
    const handlePrevClick = () =>
      setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
    const handleNextClick = () =>
      setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
    return (
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevClick}
          className="arrow left-arrow"
        />
        {images && images.length
          ? images.map((imgItem, index) => (
              <img
                key={imgItem.id}
                src={imgItem.download_url}
                alt={imgItem.author}
                className={
                  currentImg === index
                    ? "current-image"
                    : "current-image inactive"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNextClick}
          className="arrow right-arrow"
        />
        <span className="indicators-wrapper">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  className={
                    currentImg === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  key={index}
                  onClick={() => setCurrentImg(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    );
  }
  </> */
}
