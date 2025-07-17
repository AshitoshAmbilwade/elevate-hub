import tokenService from './token.service.js';

const mockUser = {
  _id: '64f2e34e83b3be1abc123456' // Replace with a valid MongoDB ObjectId if needed
};

async function testTokens() {
  try {
    console.log("▶️ Starting token generation test...");

    const accessToken = await tokenService.generateAuthTokens(mockUser);
    console.log("✅ Access Token:", accessToken);

    const verificationToken = await tokenService.generateVerificationToken(mockUser._id);
    console.log("✅ Verification Token:", verificationToken);

    const decodedAccess = await tokenService.verifyToken(accessToken, 'accessToken');
    console.log("🔓 Decoded Access Token:", decodedAccess);

    const decodedVerify = await tokenService.verifyToken(verificationToken, 'verify');
    console.log("🔓 Decoded Verification Token:", decodedVerify);

    console.log("🎉 All token functions ran successfully!");
  } catch (err) {
    console.error("❌ Error testing tokens:", err);
  }
}

testTokens();
