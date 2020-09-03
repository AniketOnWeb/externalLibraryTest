export default class {
  static log() {
    window.addEventListener("DOMContentLoaded", (event) => {
      const iframeLink = "https://aniket.codes";

      //initial rendering of feedBack popup
      let iFramePopup = document
        .createElement("iframe")
        .setAttribute("src", iframeLink);
      if (iFramePopup) {
        iFramePopup.style.display = "none";
        iFramePopup.style.position = "absolute";
      }
      console.log(document);
      console.log(document);
      console.log("document");
      console.log(iFramePopup);

      //===========activate and display the popup================================
      //clickedButton
      const getParentButtonId = document.getElementById("getParentButtonId");
      // console.log(getParentButtonId);

      if (getParentButtonId && iFramePopup) {
        iFramePopup.style.display = "block";
        iFramePopup.style.left = `${
          getParentButtonId.getBoundingClientRect().left
        }px`;
        iFramePopup.style.top = `${
          getParentButtonId.getBoundingClientRect().top
        }+${getParentButtonId.getBoundingClientRect().height}px`;
      }
    });
  }

  static write() {
    document.body.append("Hello World!");
  }
}
