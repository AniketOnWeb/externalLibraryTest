window.addEventListener("DOMContentLoaded", (event) => {
  const iframeLink = "https://aniket.codes";

  //initial rendering of feedBack popup
  let iFramePopup = document.createElement("iframe");
  iFramePopup.setAttribute("src", iframeLink);

  if (iFramePopup) {
    iFramePopup.style.display = "none";
    iFramePopup.style.position = "absolute";
    iFramePopup.style.height = "460px";
    iFramePopup.style.width = "460px";
    iFramePopup.style.border = "0";
  }

  document.body.appendChild(iFramePopup);

  //===========activate and display the popup================================
  //clickedButton
  const getParentButtonId = document.getElementById("getParentButtonId");

  if (getParentButtonId && iFramePopup) {
    getParentButtonId.addEventListener("click", function () {
      iFramePopup.style.display = "block";
      iFramePopup.style.left = `${
        getParentButtonId.getBoundingClientRect().left
      }px`;
      // iFramePopup.style.top = `${
      //   getParentButtonId.getBoundingClientRect().top
      // }+${getParentButtonId.getBoundingClientRect().height}px`;
      iFramePopup.style.top = `${
        getParentButtonId.getBoundingClientRect().top
      }px`;

      console.log(getParentButtonId.getBoundingClientRect());
    });
  }
});
