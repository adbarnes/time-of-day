function load() {
  const html = document.querySelector("html");
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const imgMoon = document.createElement("img");
  const imgSun = document.createElement("img");
  time = getTime();

  function getTime() {
    let time = new Date().toLocaleTimeString();
    //const time = "13:00:00";
    return time;
  }

  console.log(time);
  setInterval(function () {
    currentTime = getTime();
    div.textContent = currentTime;
  }, 1000);

  html.appendChild(body);
  body.appendChild(container);

  body.classList.add("bg-gray-200");

  title.textContent = "The current time is:";
  container.appendChild(title);
  title.classList.add(
    "text-xl",
    "text-gray-900",
    "leading-tight",
    "text-center",
    "mb-4",
    "font-bold"
  );
  // function timer() {
  //   time = new Date().toLocaleTimeString();
  //   div.textContent = time;
  // }

  container.appendChild(div);
  container.classList.add(
    "w-1/4",
    "text-center",
    "mx-auto",
    "p-6",
    "bg-white",
    "rounded-lg",
    "shadow-xl",
    "order-last"
  );

  if (time >= "06:00:00" && time <= "20:00:00") {
    // alert("true");
    body.classList.remove("bg-gray-900");
    body.classList.add("bg-blue-200");
    imgSun.setAttribute("src", "images/sun.svg");
    body.appendChild(imgSun);
  } else {
    // alert("false");
    body.classList.remove("bg-blue-200");
    body.classList.add("bg-gray-900");
    imgMoon.setAttribute("src", "images/moon.svg");
    body.appendChild(imgMoon);
  }
}

document.addEventListener("DOMContentLoaded", load());
