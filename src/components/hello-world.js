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
    iFramePopup.style.opacity = 0;
    iFramePopup.style.transform = "translateY(-1rem)";
    iFramePopup.style.transition =
      "opacity 150ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, transform 161ms cubic - bezier(0.4, 0, 0.2, 1) 0ms";
  }

  //   .date - picker - enter {
  //     opacity: 0;
  //     transform: translateY(-1rem);
  //   }
  // .date - picker - enter - active {
  //     opacity: 1;
  //     transition: opacity 150ms cubic - bezier(0.4, 0, 0.2, 1) 0ms,
  //       transform 161ms cubic - bezier(0.4, 0, 0.2, 1) 0ms;
  //     transform: translateY(0);
  //   }
  // .date - picker - exit {
  //     opacity: 1;
  //   }
  // .date - picker - exit - active {
  //     opacity: 0;
  //     transform: translateY(-0.3rem);
  //     transition: opacity 241ms cubic - bezier(0.4, 0, 0.2, 1) 0ms,
  //       transform 161ms cubic - bezier(0.4, 0, 0.2, 1) 0ms;
  //   }

  document.body.appendChild(iFramePopup);

  //===========activate and display the popup================================
  //clickedButton
  const getParentButtonId = document.getElementById("getParentButtonId");

  if (getParentButtonId && iFramePopup) {
    getParentButtonId.addEventListener("click", function () {
      iFramePopup.style.display = "block";
      iFramePopup.style.opacity = 1;
      iFramePopup.style.transform = "translateY(0)";
      iFramePopup.style.left = `${
        getParentButtonId.getBoundingClientRect().left
      }px`;
      iFramePopup.style.top = `${
        getParentButtonId.getBoundingClientRect().top +
        getParentButtonId.getBoundingClientRect().height +
        3
      }px`;

      console.log(getParentButtonId.getBoundingClientRect());
    });
  }
});
