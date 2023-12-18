<a name="readme-top"></a>
<br />
  <h3 align="center">theScore App Test</h3>

  <p align="center">
    Automated Test Cases for theScore App
    <br />
    <a href="https://get.thescore.com/"><strong>theScore apps downloads »</strong></a>
    <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

An automated test written for Android device that finds a sport team within theScore app and verify the specified steps.

1. Set up theSocre app for the first time
2. Open a team (e.g. Toronto Maple Leaf)
3. Verify expected page opens correctly.
4. Tap on a sub-tab for TEAM STATUS
5. Verify the correct tab and corresponding data is displayed correctly and corresponds to the team selected in step 2.
6. Verify that back navigation returns user to the previous page correctly.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

1. Appium
2. JavaScript
3. Android UI Automator
4. Gradle

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Instructions on setting up test project locally. To get a local copy up and running, please follow the following steps.

### Prerequisites
* MacOS or UNIX/Linux environment
* npm
  ```sh
  npm install npm@latest -g
  ```
* Appium
* theScore app from Google Play
* (Optional) Android Debug Bridge (ADB)
* (Optional) Android Studio

### Installation

1. Install and start appium server [https://appium.io/docs/en/2.1/quickstart/install/](https://appium.io/docs/en/2.1/quickstart/install/)
2. Clone the repo
   ```sh
   git clone https://github.com/pyclam626/theScoreTest.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Install `webdriverio` package via NPM
   ```sh
   npm i --save-dev webdriverio
   ```
5. Install theScore app on Android device or Emulator

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Using Gradle: run `gradlew testScore` to execute
2. Using node.js: run `node lib/src/test/js/test.js` to execute

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Patrick Lam - [@LinkedIn](https://www.linkedin.com/in/patrick-lam-a0a46b10a/) - plam626@gmail.com

Project Link: [https://github.com/pyclam626/theScoreTest](https://github.com/pyclam626/theScoreTest)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments
* [Best-READNE-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
