const express = require("express");
const otpGenerator = require("otp-generator");
const client = require("./client");
const { setOtp, getOtpForUser } = require("./utils");

const app = express();

const otp = otpGenerator.generate(6, {
  upperCaseAlphabets: false,
  lowerCaseAlphabets: false,
  specialChars: false,
});

console.log("user id", otp);

for (let i = 0; i < 5; i++) { 
  setOtp(`766900735${i}`,otp)
}


app.listen(8008, () => {});


