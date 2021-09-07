const puppeteer = require("puppeteer");

var belinks = [
  "https://www.behance.net/gallery/126639207/Ask-Philosophers-AI",
  "https://www.behance.net/gallery/125344841/Moodical-Build-Mood-Molecules",
  "https://www.behance.net/gallery/121871725/Wise-Old-Owl-NLP-Question-Answering-App",
  "https://www.behance.net/gallery/117924969/Antipode-Portal",
  "https://www.behance.net/gallery/114898795/AI-Box-Experiment-Implementation",
  "https://www.behance.net/gallery/103676817/Office-Chair-Ergonomics-Analyzer",
  "https://www.behance.net/gallery/111357947/Color-Cuber",
  "https://www.behance.net/gallery/105258753/AR-Eyewear-Design-Application",
  "https://www.behance.net/gallery/113858893/Deep-end-Developer",
  "https://www.behance.net/gallery/105869633/Custom-Medical-Mask-Platform",
  "https://www.behance.net/gallery/100351841/Eye-Tracking-Platform",
  "https://www.behance.net/gallery/112911761/Mars-Shots-Interface-concept-for-NASA-Open-APIs",
  "https://www.behance.net/gallery/103978475/Computer-vision-keyboard",
  "https://www.behance.net/gallery/104223993/Deep-Veins",
  "https://www.behance.net/gallery/104454043/Quadcopter-Drone-Controller",
  "https://www.behance.net/gallery/104357635/Camera-simulator",
  "https://www.behance.net/gallery/104287399/Deep-Image-Dataset-Scraper",
  "https://www.behance.net/gallery/112105005/Watch-Watcher-AI-powered-watch-identifier",
  "https://www.behance.net/gallery/104964275/Smart-Car-User-Interface",
  "https://www.behance.net/gallery/104712573/Car-Dashboard-User-Interface",
  "https://www.behance.net/gallery/113165249/Smart-Outfit-Advisor",
  "https://www.behance.net/gallery/110424815/Farsi-Sign-Board",
  "https://www.behance.net/gallery/112455075/Money-Visualizer",
  "https://www.behance.net/gallery/106745249/Visual-Fidget",
  "https://www.behance.net/gallery/113461993/Custom-AI-imitated-chat-app",
  "https://www.behance.net/gallery/112624207/Typing-speed-test-UI",
  "https://www.behance.net/gallery/103832977/Cam-Yab-Camera-recommendation-app",
  "https://www.behance.net/gallery/105428863/Minimal-Weather",
  "https://www.behance.net/gallery/111692525/The-Trolley-Problem",
  "https://www.behance.net/gallery/108988567/RGB-Master",
  "https://www.behance.net/gallery/107093939/Kooh-e-Noor-Diamond-Shop-Website",
  "https://www.behance.net/gallery/107001197/Conways-Game-of-Life-Implementation",
  "https://www.behance.net/gallery/103549521/Tehran-Tours-Website",
  "https://www.behance.net/gallery/98176045/Deep-Face-Generator",
  "https://www.behance.net/gallery/104487957/Full-feature-video-recording-mobile-app",
  "https://www.behance.net/gallery/101284557/T-Rex-Runner-Mod-Menu",
  "https://www.behance.net/gallery/98007477/Social-Tunnel",
  "https://www.behance.net/gallery/102255703/Neumorphism-UI-Kit-for-Axure-RP",
  "https://www.behance.net/gallery/99661385/_",
  "https://www.behance.net/gallery/97886245/_",
  "https://www.behance.net/gallery/97791597/_",
];

var blinksshort = [
  "https://www.behance.net/gallery/126639207/Ask-Philosophers-AI",
  "https://www.behance.net/gallery/125344841/Moodical-Build-Mood-Molecules",
  "https://www.behance.net/gallery/121871725/Wise-Old-Owl-NLP-Question-Answering-App",
  "https://www.behance.net/gallery/117924969/Antipode-Portal",
  "https://www.behance.net/gallery/114898795/AI-Box-Experiment-Implementation",
];

async function visitpages() {
  for (let step = 0; step <= belinks.length; step++) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(belinks[step]);
    console.log(`page ${step} opened`);
    await sleep(15000);
    await browser.close();
    console.log("page closed");
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

visitpages();
