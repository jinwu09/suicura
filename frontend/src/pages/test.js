import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import { data_encrpyt, data_decrypt } from "../API/crypto";
import { useHomeContext } from "../components/context/useHomeContext";

const Test = () => {
  const [ciphertest, setCiphertext] = useState("");
  const [plaintext, setPlaintext] = useState("");
  const { onlogout, onsessionout, chartData, ongetstatus, value } =
    useHomeContext();
  useEffect(() => {
    ongetstatus();
  }, [value]);
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
      <button
        onClick={() => {
          onlogout();
        }}
      >
        lougout test
      </button>

      <button
        onClick={() => {
          onsessionout();
        }}
      >
        onsessionout test
      </button>

      <br />
      <p>assd</p>
      {moment().weekday()}
      {/* <p>{moment().day(chartData.labels[0])}</p> */}
    </div>
  );
};
export default Test;
