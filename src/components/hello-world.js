window.addEventListener("DOMContentLoaded", (event) => {
  const iframeLink = "https://aniket.codes";

  //initial rendering of feedBack popup
  let iFramePopup = document.createElement("iframe");
  iFramePopup.setAttribute("src", iframeLink);

  if (iFramePopup) {
    iFramePopup.style.display = "none";
    iFramePopup.style.position = "absolute";
  }

  document.body.appendChild(iFramePopup);

  //===========activate and display the popup================================
  //clickedButton
  const getParentButtonId = document.getElementById("getParentButtonId");
  console.log(getParentButtonId);

  if (getParentButtonId && iFramePopup) {
    getParentButtonId.addEventListener("click", function () {
      console.log(iFramePopup);
      console.log("iFramePopup");

      iFramePopup.style.display = "block";
      iFramePopup.style.left = `${
        getParentButtonId.getBoundingClientRect().left
      }px`;
      iFramePopup.style.top = `${
        getParentButtonId.getBoundingClientRect().top
      }+${getParentButtonId.getBoundingClientRect().height}px`;
    });
  }
});
