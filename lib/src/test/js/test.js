const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.fivemobile.thescore',
  'appium:appActivity': 'com.fivemobile.thescore.ui.MainActivity',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    //Setup up theScores app for the first time
    const allowAction = await driver.$('//*[@text="Allow"]');
    await allowAction.click();
    await driver.pause(1000);

    const getStarted = await driver.$('//*[@text="Get Started"]');
    await getStarted.click();
    await driver.pause(1000);

    const pickHockey = await driver.$('//*[@text="NHL Hockey"]');
    await pickHockey.click();
    await driver.pause(1000);

    const selectContinue = await driver.$('//*[@text="Continue"]');
    await selectContinue.click();
    await driver.pause(1000);
    
    const allowLoc = await driver.$('//*[@text="Allow Location"]');
    await allowLoc.click();
    await driver.pause(1000);

    const usingApp = await driver.$('//*[@text="While using the app"]');
    await usingApp.click();
    await driver.pause(1000);

    const pickTeam = await driver.$('//*[@text="Toronto Maple Leafs"]');
    await pickTeam.click();
    await driver.pause(1000);

    await selectContinue.click();
    await driver.pause(1000);

    const selectDone = await driver.$('//*[@text="Done"]');
    await selectDone.click();
    await driver.pause(1000);

    const downloadNow = await driver.$('//*[@text="Download Now"]');
    await downloadNow.click();
    await driver.pause(3000);

    //Open TEAM STATS tab
    await driver.activateApp("com.fivemobile.thescore");
    const selectFavTeam = await driver.$('//*[@text="TOR"]');
    await selectFavTeam.click();
    await driver.pause(1000);

    const selectTeamStats = await driver.$('//*[@text="TEAM STATS"]');
    await selectTeamStats.click();
    await driver.pause(1000);

    //Verify correct tab displayed
    const selectGoalStat = (await driver.$('//*[@text="Goals"]'));
    await selectGoalStat.isDisplayed() == true;

    //Return to previous page with back navigation
    await driver.pressKeyCode(4);
    await driver.pause(1000);

    //Verify back navigation returns to previous page
    const selectFavSport = await driver.$('//*[@text="NHL"]');
    await selectFavSport.click();
    await driver.pause(1000);
    await selectFavTeam.isDisplayed() == ture;

  } finally {
    await driver.pause(1000);

    //Teardown
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
