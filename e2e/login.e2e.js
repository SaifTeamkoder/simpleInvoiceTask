describe("Login flow test", () => {
  beforeEach(async () => {
    //await device.reloadReactNative();
  });

  it("should have login screen", async () => {
    await expect(element(by.id("loginView"))).toBeVisible();
  });

  it("should fill login form", async () => {
    await element(by.id("emailInput")).typeText("dung+octopus4@101digital.io");
    await element(by.id("passwordInput")).typeText("Abc@123456\n");
    await element(by.id("loginButton")).tap();
  });
});
