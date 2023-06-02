/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-plusplus */

// mobile-menu

const hamburger = document.querySelector(".menu");
const links = document.querySelectorAll(".mobile-menu a");
hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    document.querySelector(".mobile-menu").style.display = "none";
  } else {
    hamburger.classList.add("active");
    document.querySelector(".mobile-menu").style.display = "block";
  }
});

links.forEach((a) => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("active");
    document.querySelector(".mobile-menu").style.display = "none";
  });
});

// popupwindow

const cardObject = [
  {
    id: 1,
    title: "Leaderboard",
    subTitle: "",
    imageMobile: "./img/Snapshoot-Portfolio.png",
    imageDesktop:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/37457094/242920147-219af2ea-df75-4391-9267-95f7d2729940.png",
    details: ["Front End Dev", "2022"],
    description:
      "The leaderboard website displays scores submitted by different users and all data are preserved in local storage ",
    langs: ["html", "css", "javaScript"],
    gitLink: "https://ismailakinkunmi.github.io/Leaderboard/dist/",
    srcLink: "https://github.com/ismailakinkunmi/Leaderboard",
  },
  {
    id: 2,
    title: "Capstone",
    subTitle: "Youth week",
    imageMobile:
      "https://user-images.githubusercontent.com/37457094/151452576-3913218f-03d0-491a-8ee9-ccbb652de73f.png",
    imageDesktop:
      "https://user-images.githubusercontent.com/37457094/151452601-fb501a21-e1fe-47be-8f32-083a6fb3e023.png",

    details: ["Front End Dev", "2022"],
    description: "Responsive app that  render some popular people on earth",
    langs: ["html", "javascript", "css"],
    gitLink: "https://ismailakinkunmi.github.io/Capstone1/#",
    srcLink: "https://github.com/ismailakinkunmi/Capstone1",
  },
  {
    id: 3,
    title: "Library",
    subTitle: "Awesome book",
    imageMobile: "./img/Snapshoot-Portfolio.png",
    imageDesktop:
      "https://user-images.githubusercontent.com/37457094/151448634-c359557e-e991-4ad0-8773-bda7d9827343.png",

    details: ["Front End Dev", "2022"],
    description:
      "Allow users to add book and author and data are preserved in the local storage.",
    langs: ["html", "javascript", "css"],
    gitLink: "https://ismailakinkunmi.github.io/AwesomeBook-ES6/",
    srcLink: "https://github.com/ismailakinkunmi/AwesomeBook-ES6",
  },
  {
    id: 4,
    title: "Space Travlers' Hub",
    subTitle: "",
    imageMobile:
      "https://user-images.githubusercontent.com/37457094/189049737-69d1bb57-cd15-477a-af04-68771c9d7654.png",
    imageDesktop:
      "https://user-images.githubusercontent.com/37457094/189049737-69d1bb57-cd15-477a-af04-68771c9d7654.png",
    details: ["Front End Dev", "2022"],
    description:
      "Space Travelers' Hub is working with the real live data from the SpaceX API.",
    langs: ["html", "css", "React", "Redux"],
    gitLink: "#",
    srcLink: "https://github.com/ismailakinkunmi/space-travelers-hub",
  },
  {
    id: 5,
    title: "World-pandemic: Covid-19",
    subTitle: "",
    imageMobile:
      "https://user-images.githubusercontent.com/37457094/170477032-5b19dd99-5ba1-422b-a486-405167302610.png",

    imageDesktop:
      "https://user-images.githubusercontent.com/37457094/170477032-5b19dd99-5ba1-422b-a486-405167302610.png",
    details: ["Front End Dev", "2022"],
    description:
      "The application allow users to check covid-19 daily updated cases from around the world.It is working with the real live data disease.sh - Open Disease Data API. ",
    langs: ["html", "css", "react", "redux"],
    gitLink: "https://covid19-world-panemic.herokuapp.com/",
    srcLink: "https://github.com/ismailakinkunmi/covid-19-world-pandemic",
  },
];

for (let i = 0; i < cardObject.length; i++) {
  const element = cardObject[i];

  document.querySelector(
    ".main-section"
  ).innerHTML += `<section class="tonic-section" id="tonic">
        <ul class="images">
          <li>
            <img
              src="${element.imageDesktop}"
              alt="nature card"
              class="desktop-images"
            />
          </li>
          <li>
            <img
              src="${element.imageMobile}"
              alt="tarnner christensen from high school dropout to product designer at facebook"
              class="mobile-images"
            />
          </li>
        </ul>

        <div class="tonic">
          <h3>${element.title}</h3>
          <div class="date">
            <h3>${element.subTitle}</h3>
                ${element.details
                  .map(
                    (
                      x
                    ) => ` <img src="img/Counter.png" alt="" class="counter" />
            <p>${x}</p>`
                  )
                  .join("")}           
          </div>
          <p class="daily">
           ${element.description}
          </p>      
          
          <div>           
            ${element.langs
              .map((x) => `<button type="button">${x}</button>`)
              .join("")}           
          </div>
          <button id='${element.id}' class="see-project">See Project</button>
        </div>
      </section>`;
}

document.querySelectorAll(".see-project").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = Number(btn.id);
    const project = cardObject.find((p) => p.id === id);

    document.querySelector(".pop").innerHTML = `
      
    <section class="modal-wrapper">
      <div class="modal">
        <div class="modal-title">
          <h2>${project.title}</h2>
          <div class='close-modal'>
          <span class="iconify" data-icon="ep:close-bold"></span>
          </div>
        </div>
        <div class="date">
            <h3>${project.subTitle}</h3>
                ${project.details
                  .map(
                    (
                      x
                    ) => ` <img src="img/Counter.png" alt="" class="counter" />
            <p>${x}</p>`
                  )
                  .join("")}           
          </div>
        <img src="${project.imageDesktop}"/>
        <div class="modal-content">
          <p>
            ${project.description}
          </p>
          <div>
             <div>           
            ${project.langs
              .map((x) => `<button type="button">${x}</button>`)
              .join("")}           
          </div>
            <div class="modal-btns">
              <a href="${project.gitLink}" class="btn github-link">
                See live
                <span class="iconify iconbtnlink" data-icon="line-md:external-link-rounded"></span>                                                                                    
              </a>
              <a href="${project.srcLink}" class="btn source-link">
                See source                                  
                
                <span class="iconify iconbtn" data-icon="teenyicons:github-solid"></span>                        
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>  

    `;
    document.querySelector(".close-modal").addEventListener("click", () => {
      document.querySelector(".modal-wrapper").remove();
    });
  });
});

// validation
const form = document.querySelector("#contact form");
const { email } = form.elements;

function showMsg(input, msg) {
  const small = document.createElement("small");
  small.classList.add("error");
  small.textContent = msg;
  input = document.getElementById("#getBtn");
  form.insertBefore(small, input);
}

function resetMsg() {
  document.querySelectorAll("small").forEach((s) => s.remove());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetMsg();
  if (email.value !== email.value.toLowerCase()) {
    showMsg(email, "Please enter your email in lowercase");
    return false;
  }
  form.submit();
  return true;
});
