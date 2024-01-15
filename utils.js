const client = require("./client");

async function setOtp(userId, otp) {
  try {
    const currentKey = `otp:user:${userId}`;
    const result = await client.set(currentKey, otp);
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getOtpForUser(userId) {
  const currentKey = `otp:user:${userId}`;
  const result = await client.get(currentKey);
  console.log(result, "result of otp from redis");
}

module.exports = { setOtp, getOtpForUser };
