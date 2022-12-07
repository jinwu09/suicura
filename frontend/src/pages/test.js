import { useState } from "react";
import { data_encrpyt, data_decrypt } from "../API/crypto";

const Test = () => {
  const [ciphertest, setCiphertext] = useState("");
  const [plaintext, setPlaintext] = useState("");
  return (
    <div>
      <p>CipherText / Decryption</p>
      <input type="text" onChange={(e) => setCiphertext(e.target.value)} />
      <button
        onClick={() => {
          console.log(data_decrypt(ciphertest));
        }}
      >
        Decrypt
      </button>
      <p>Plain text / Encryption</p>
      <input type="text" onChange={(e) => setPlaintext(e.target.value)} />
      <button
        onClick={() => {
          console.log(data_encrpyt(plaintext));
        }}
      >
        Encryption
      </button>
    </div>
  );
};
export default Test;
