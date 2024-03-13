import { useState } from "react";
import data from "./data";
import "./styles.css";

export const Accordian = () => {
  // UseState for the single selection
  const [signleSelected, setSingleSelected] = useState(null);
  // Lets Create useState for enabling the Multiselection
  const [enableMulti, setEnableMulti] = useState(false);
  //Lets Create another state For storing the multiSelction in an array
  const [multiSelctionArr, setMultiSelectionArr] = useState([]);

  // Now we have to create a handleSelected function so that when we clicked on any question it should show the answer of that question
  const handleSignleSelected = (id) => {
    setSingleSelected(id === signleSelected ? null : id);
    console.log(id);
  };

  // Here we are creating another Function For multiSelection accordian
  const handleMultiSelection = (getCurrentId) => {
    // Lets Duplicate the array to make changes whenever we clicked any of the question
    let copySelected = [...multiSelctionArr];
    // lets findOut the idnexOf current Id
    let findeIndexOfCurrId = copySelected.indexOf(getCurrentId);
    if (findeIndexOfCurrId === -1) copySelected.push(getCurrentId);
    else copySelected.splice(findeIndexOfCurrId, 1);
    setMultiSelectionArr(copySelected);
    console.log(findeIndexOfCurrId, copySelected);
  };

  // Now we have to imliment multiple selections
  return (
    <div className="container">
      <div className="main-div">
        {/* Lets Create a button for Enabling the Multi selection  */}
        {/* Apply the MultiSelection toggle on The button  */}

        <button onClick={() => setEnableMulti(!enableMulti)}>
          Enable Multi Selection
        </button>

        {/* We will Check here that do we received data from the backend or not ... */}
        {/* And Also we map over the data array to show the items inside that array  */}
        {data && data.length > 0 ? (
          <div className="accordian-div">
            {data.map((item) => (
              <div
                onClick={() =>
                  enableMulti
                    ? handleMultiSelection(item.id)
                    : handleSignleSelected(item.id)
                }
                className="accordian-content"
                key={item.id}
              >
                <div className="title">
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>

                <div className="accordian-answer">
                  {/* {signleSelected === item.id || multiSelectionArr.indexOf ? <p>{item.answer}</p> : null} */}
                  {enableMulti
                    ? multiSelctionArr.indexOf(item.id) !== -1 && (
                        <p>{item.answer}</p>
                      )
                    : signleSelected === item.id && <p>{item.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No Data Found"
        )}
      </div>
    </div>
  );
};
