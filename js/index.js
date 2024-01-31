/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};
showMenu("nav-toggle", "nav-menu");

//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
  //after window loaded
  filterItem.onclick = (selectedItem) => {
    //if user click on filterItem div
    if (selectedItem.target.classList.contains("item")) {
      //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        } else {
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  };
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
};

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_l93ejop",
      "template_osh27jm",
      "#contact-form",
      "1GY65p7IUOQlmMSl_"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully.";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error).";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// const coords = { x: 0, y: 0 };
// const circles = document.querySelectorAll(".circle");

// const colors = [
//   "#ffb56b",
//   "#fdaf69",
//   "#f89d63",
//   "#f59761",
//   "#ef865e",
//   "#ec805d",
//   "#e36e5c",
//   "#df685c",
//   "#d5585c",
//   "#d1525c",
//   "#c5415d",
//   "#c03b5d",
//   "#b22c5e",
//   "#ac265e",
//   "#9c155f",
//   "#950f5f",
//   "#830060",
//   "#7c0060",
//   "#ff8faf",
//   "#ff729a",
//   "#ff5a88",
//   "#ff4378",
//   "#7c0060",
//   "#ff8faf",
//   "#ff729a",
//   "#ff5a88",
//   "#ff4378",
// ];

// circles.forEach(function (circle, index) {
//   circle.x = 0;
//   circle.y = 0;
//   circle.style.backgroundColor = colors[index % colors.length];
// });

// window.addEventListener("mousemove", function (e) {
//   coords.x = e.clientX;
//   coords.y = e.clientY;
// });

// function animateCircles() {
//   let x = coords.x;
//   let y = coords.y;

//   circles.forEach(function (circle, index) {
//     circle.style.left = x - 12 + "px";
//     circle.style.top = y - 12 + "px";

//     circle.style.scale = (circles.length - index) / circles.length;

//     circle.x = x;
//     circle.y = y;

//     const nextCircle = circles[index + 1] || circles[0];
//     x += (nextCircle.x - x) * 0.3;
//     y += (nextCircle.y - y) * 0.3;
//   });

//   requestAnimationFrame(animateCircles);
// }

// animateCircles();

var wrapper = document.getElementsByClassName("text-animation")[0];
wrapper.style.opacity = "1";
wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

for (var i = 0; i < spans.length; i++) {
  spans[i].style.animationDelay = i * 80 + "ms";
}

const counterAnimation = (el, initialNum, finalNum) => {
  if (Number.isInteger(finalNum)) {
    let interval = setInterval(function () {
      el.innerHTML = initialNum;
      initialNum >= finalNum ? clearInterval(interval) : "";
      initialNum++;
    }, 50);
  } else {
    let intInitialNum = Math.floor(initialNum);
    let intFinalNum = Math.floor(finalNum);
    let interval = setInterval(function () {
      el.innerHTML = intInitialNum;
      if (intInitialNum >= intFinalNum) {
        clearInterval(interval);
        el.innerHTML = `${finalNum.toString().replace(".", ",")}`;
      }
      intInitialNum++;
    }, 1000);
  }
};

counterAnimation(document.querySelector("#EXPERIENCE"), 0, 4);
counterAnimation(document.querySelector("#PROJECTS"), 0, 35);
