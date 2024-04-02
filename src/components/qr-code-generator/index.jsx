import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(inputValue);
    setInputValue("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "12px",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Qr Code Generator</h1>
        <input
          type="text"
          name="qr-code"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode value={qrCode} id="qr-code-value" />
      </div>
    </div>
  );
}
