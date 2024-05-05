"use strict";
// import
const calcBtn = document.querySelector(".size-calc__btn");
const calcScreen = document.querySelector(".size-calc__screen");
let screenHeight = 0;
let screenWidth = 0;
// for iphones
let screenHeightIphone = 0;
let screenWidthIphone = 0;
calcBtn.addEventListener("click", (e) => {
    const target = e.target;
    target.classList.add("__active");
    calcScreen.classList.add("__active");
    screenHeight = document.documentElement.clientHeight;
    screenWidth = document.documentElement.clientWidth;

    screenHeightIphone = window.innerHeight;
    screenWidthIphone = window.innerWidth;
    console.log(screenHeightIphone, screenWidthIphone);
    calcScreen.innerHTML = `
    <span>Your sizes :</span> 
    <span>ScreenHeight : ${screenHeight} px,</span> 
    <span>ScreenWidth : ${screenWidth} px</span>
    <span>heightOf Iphone : ${screenHeightIphone} px,</span> 
    <span>widthOf Iphone : ${screenWidthIphone} px</span>
    <span></span>
    <span>After 7sec result will disappear</span>
    `;
    //console.log(screenHeight);
    setTimeout(() => {
        target.classList.remove("__active");
        calcScreen.classList.remove("__active");
    }, 1000 * 7);
});
