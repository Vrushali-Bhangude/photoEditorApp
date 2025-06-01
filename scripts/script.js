
// all element

let inputImage = document.getElementById("main-img");
let mainEdiTableImg = document.getElementById("img-main");
let imgUploader = document.getElementById("img-uploader")
let imgContainer = document.getElementById("img-container")

let pannelSettingHandler = document.getElementById("paint-btn");
let settiingMainPannel = document.getElementById("setting");
let settingPannel = document.getElementById("setting-pannel");
let loaderBody= document.getElementById("loader");

//all img setting

let brightness = document.getElementById("brightness");
let contrast = document.getElementById("contrast");
let saturate = document.getElementById("saturation");
let grayscale = document.getElementById("grayscale");
let sepia = document.getElementById("sepia");
let hue = document.getElementById("hue");
let invert = document.getElementById("invert");
let blur = document.getElementById("blur");
let opacity = document.getElementById("opacity");




//event

inputImage.addEventListener("change", () => {

  let imgObj = inputImage.files[0]
  if (!imgObj) return;
  let imgUrl = URL.createObjectURL(imgObj)
  mainEdiTableImg.src = imgUrl

  imgUploader.style.display = "none"
  imgContainer.style.display = "block"
  console.log(mainEdiTableImg)


})

pannelSettingHandler.addEventListener("click", () => {
  settiingMainPannel.style.display = "block";

});

settiingMainPannel.addEventListener("click", () => {
  settiingMainPannel.style.display = "none";
})

console.log(settingPannel)
settingPannel.addEventListener("click", (e) => {
  e.stopPropagation();

})

//seeting event

brightness.addEventListener("change", () => {
  mainEdiTableImg.style.filter = `brightness(${brightness.value}%)`
})

contrast.addEventListener("change", () => {
  mainEdiTableImg.style.filter = `contrast(${contrast.value}%)`
})

saturate.addEventListener("change", () => {
  mainEdiTableImg.style.filter = `saturate(${saturate.value}%)`
})

grayscale.addEventListener("change", () => {
  mainEdiTableImg.style.filter = `grayscale(${grayscale.value}%)`
})

sepia.addEventListener("change", () => {
  mainEdiTableImg.style.filter = `sepia(${sepia.value}%)`
})
hue.addEventListener("change", () => {
  mainEdiTableImg.style.filter = `hue-rotate(${hue.value}deg)`
})

invert.addEventListener("change", () => {
  mainEdiTableImg.style.filter = `invert(${invert.value}%)`
})

blur.addEventListener("change", () => {
  mainEdiTableImg.style.filter = `blur(${blur.value}%)`
})


// setTimeout(() => {
//   loaderBody.style.display = "none";
// },5000)