import "./model.css";
import { useState } from "react";
import Model from "./Model";

export default function ModelTest() {
  const [openModel, setOpenModel] = useState(false);

  const handleOpenModel = () => setOpenModel(!openModel);

  const closeModel = () => setOpenModel(false);
  return (
    <div className="test-model">
      <button onClick={handleOpenModel}>Open Model</button>
      <div>
        {openModel && (
          <Model
            heading={<div>This is custom Heading</div>}
            body={<div>This is custom Body</div>}
            closeModel={closeModel}
          />
        )}
      </div>
    </div>
  );
}
