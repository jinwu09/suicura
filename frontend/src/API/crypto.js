import CryptoJS from "crypto-js";
import { SECRET_KEY } from "./Config";
const data_encrpyt = (plain) => {
  const bytes = CryptoJS.AES.encrypt(
    JSON.stringify(plain),
    SECRET_KEY
  ).toString();
  return bytes;
  //   plaintext = JSON.stringify(plaintext);
  //   const key = CryptoJS.SHA256(SECRET_KEY).toString();
  //   const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
  //   var ciphertest = CryptoJS.AES.encrypt(plaintext, key, { iv: iv }).toString();
  //   const hash = CryptoJS.HmacSHA256(ciphertest, key).toString();
  //   const output = {
  //     m: hash,
  //   };
  //   return output;
  //   return JSON.stringify(output);
};

const data_decrypt = (cipher) => {
  const bytes = CryptoJS.AES.decrypt(cipher, SECRET_KEY);
  const plain = JSON.parse(CryptoJS.enc.Utf8.stringify(bytes));
  return plain;
};
export { data_encrpyt, data_decrypt };
