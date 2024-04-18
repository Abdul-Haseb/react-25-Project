export default function Model({ id, heading, body, closeModel }) {
  return (
    <div id={id || "Model"}>
      <div className="model-content">
        <div className="close-icon">
          <span onClick={closeModel}>&times;</span>
        </div>
        <div className="heading">
          {heading ? heading : <div>This is default headng</div>}
        </div>
        <div className="model-body">
          {body ? body : <div>This is default body</div>}
        </div>
      </div>
    </div>
  );
}
