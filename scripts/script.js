
// all element

let inputImage = document.getElementById("main-img");
let mainEdiTableImg = document.getElementById("img-main");
let imgUploader = document.getElementById("img-uploader")
let imgContainer = document.getElementById("img-container")


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