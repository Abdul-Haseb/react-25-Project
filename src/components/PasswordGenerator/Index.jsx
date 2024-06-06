import { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGen() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = ""; // Initialize an empty string to store the generated password.
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Initialize a string with all the uppercase and lowercase letters.

    if (numberAllowed) string += "123456789"; // If numbers are allowed, add digits to the string.
    if (charAllowed) string += "!@#$%^&*"; // If special characters are allowed, add them to the string.

    // For loop to collect the characters based on the length
    for (let i = 1; i < length; i++) {
      let character = Math.floor(Math.random() * string.length + 1); // Generate a random index within the length of the string.
      pass += string.charAt(character); // Append the character at the random index to the password.
    }

    setPassword(pass); // Set the generated password to the password state.
  }, [length, numberAllowed, charAllowed, setPassword]);

  //To copy the password to the clipboard
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);
  return (
    <div className="w-full h-screen bg-gray-700 text-white flex items-center justify-center">
      <div className="max-w-screen-md mx-auto py-10 bg-black px-5">
        <div className="flex items-center">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="w-full bg-gray-300  py-3 px-5 rounded-md text-orange-700 font-medium"
            readOnly
            placeholder="Generate Password"
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="bg-blue-600 text-white py-3 rounded-md px-3"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-between pt-5 gap-10">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="8"
              max="30"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <p className=" w-20"> length: {length}</p>
          </div>
          <div>
            <input
              type="checkbox"
              onClick={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              onClick={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}
