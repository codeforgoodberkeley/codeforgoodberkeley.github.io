const FOLDER_NAME = "sp26team";

// Fall 2026 leadership roster. Order is display order.
const team = [
  {
    name: "Shayla He",
    role: "President",
    photo: "images/team/shayla-he.jpg",
    message:
      "Hi, I'm Shayla! I love to sing, dance, play badminton, and get food/boba/dessert with friends :)",
    linkedin: "https://www.linkedin.com/in/shayla-he-70348b2b7/",
    email: "shaylahe@berkeley.edu",
  },
  {
    name: "Aadhi Balasubramanian",
    role: "Internal Vice President",
    photo: "CE6D5FC2-F7C7-4F83-BF81-9074DAAD743B - Aadhi Balasubramanian.jpeg",
    message:
      "Hey, I’m Aadhi!! I like hiking, rating restaurants on Beli, traveling, and watching Bollywood movies.",
    linkedin: "https://www.linkedin.com/in/adhitya-balasubramanian/",
    email: "aadhibala10@gmail.com",
  },
  {
    name: "Julianna Martinez",
    role: "External Vice President",
    photo: "images/team/julianna-martinez.jpg",
    message: "",
    linkedin: "https://www.linkedin.com/in/julianna-jolynn-martinez-ab7a22350/",
    email: "julianna.jolynn@berkeley.edu",
  },
  {
    name: "Aashi Malik",
    role: "New Member Program Head",
    photo: "images/team/aashi-malik.jpg",
    message: "",
    linkedin: "https://www.linkedin.com/in/aashi-malik07/",
    email: "aashimalik07@gmail.com",
  },
  {
    name: "Winston Ling",
    role: "New Member Program Head",
    photo: "images/team/winston-ling.jpg",
    message: "",
    linkedin: "https://www.linkedin.com/in/winston-ling-083o/",
    email: "winston.ling0830@gmail.com",
  },
  {
    name: "Saanvi Deb",
    role: "Recruitment Chair",
    photo: "images/team/saanvi-deb.jpg",
    message:
      "I enjoy watching movies with friends, taking walks on the beach, spending time with my family, and cooking with my roommates.",
    linkedin: "https://www.linkedin.com/in/saanvideb/",
    email: "saanvi.deb@gmail.com",
  },
  {
    name: "Ashwin Kalyan",
    role: "Recruitment Chair & Project Manager",
    photo: "images/team/ashwin-kalyan.jpg",
    message:
      "Hi, I'm Ashwin! I like iced coffee, Wingstop, traveling abroad, and playing Game Pigeon!",
    linkedin: "https://www.linkedin.com/in/ashwinkalyan2/",
    email: "ashwinkalyan@berkeley.edu",
  },
  {
    name: "Ariana Ghimire",
    role: "Social Chair",
    photo: "images/team/ariana-ghimire.jpg",
    message: "Hi! I’m Ariana l like cooking, long drives, and camping.",
    linkedin: "https://www.linkedin.com/in/ariana-ghimire/",
    email: "arianaghimire27@berkeley.edu",
  },
  {
    name: "Aryan Das",
    role: "Project Manager & Social Chair",
    photo: "images/team/aryan-das.jpg",
    message:
      "Hey, I'm Aryan! I love to thrift, fish, work out, and eat lots of really good food.",
    linkedin: "https://www.linkedin.com/in/aryandas1/",
    email: "aryandas@berkeley.edu",
  },
  {
    name: "Aniket Gupta",
    role: "Project Manager",
    photo: "images/team/aniket-gupta.jpg",
    message:
      "Hey, I'm Aniket and I'm a third year M.E.T. major (EECS + Business). I love playing tennis, pickleball, and a good amount of poker. My favorite food spots are Taco Bell and Chipotle so hit me up.",
    linkedin: "https://www.linkedin.com/in/aniket-gupta-95385826b/",
    email: "aniket_gupta@berkeley.edu",
  },
  {
    name: "Michelle Bao",
    role: "Project Manager",
    photo: "images/team/michelle-bao.jpg",
    message:
      "Hi, I'm Michelle! I enjoy matcha, going on hikes, exploring the SF area, and ranking boba places :)",
    linkedin: "https://www.linkedin.com/in/michellebao-ds/",
    email: "michelle_bao@berkeley.edu",
  },
  {
    name: "Beste Karatas",
    role: "Project Manager",
    photo: "images/team/beste-karatas.jpg",
    message:
      "Hi, I'm Beste! I love cafe hopping, taking free trials for workout classes, reading, and spontaneous trips <3",
    linkedin: "https://www.linkedin.com/in/bestekaratas-/",
    email: "bestekaratas@berkeley.edu",
  },
  {
    name: "Rajan Tavathia",
    role: "Project Manager",
    photo: "images/team/rajan-tavathia.jpg",
    message:
      "Hi, I'm Rajan! I love tennis, kayaking, binging shows, and trying new restaurants.",
    linkedin: "https://www.linkedin.com/in/rajan-tavathia-0278b6281/",
    email: "rtavathia@berkeley.edu",
  },
  {
    name: "Riya Khasnis",
    role: "Project Manager",
    photo: "images/team/riya-khasnis.jpg",
    message:
      "Hi, I'm Riya! I love to dance, attend concerts, go on hikes, try new cafes and matcha spots, and go on random side quests!",
    linkedin: "https://www.linkedin.com/in/riya-khasnis-in/",
    email: "riya_khasnis@berkeley.edu",
  },
  {
    name: "Neel Panchumarthi",
    role: "Project Manager",
    photo: "images/team/neel-panchumarthi.jpg",
    message:
      "Hi, I'm Neel! I like playing pool and ping pong, traveling, and trying new food.",
    linkedin: "https://www.linkedin.com/in/neelpanch/",
    email: "neelpanch@gmail.com",
  },
  {
    name: "Ethan Jang",
    role: "Project Manager",
    photo: "images/team/ethan-jang.jpg",
    message:
      "Halloo, I'm Ethan. A few of my hobbies include singing, watching k-media, and café hopping around the bay. Can't wait to meet you and have you join the CFG family!",
    linkedin: "https://www.linkedin.com/in/ethan-jang-917b95345/",
    email: "eef.jang@berkeley.edu",
  },
  {
    name: "Srikala Munukutla",
    role: "Project Manager",
    photo: "images/team/srikala-munukutla.jpg",
    message:
      "Hi, I'm Srikala! I love singing, traveling, and trying new food spots in Berkeley.",
    linkedin: "https://www.linkedin.com/in/srikalamunukutla/",
    email: "srikala.v.munukutla@berkeley.edu",
  },
  {
    name: "Edwin Lee",
    role: "Finance Chair",
    photo: "images/team/edwin-lee.jpg",
    message:
      "Hi, I'm Edwin! I'm studying Data Science, and I like cooking, doing fun projects, hanging out, and trying out new things!",
    linkedin: "https://www.linkedin.com/in/edwin-j-lee/",
    email: "jlee121@berkeley.edu",
  },
  {
    name: "Takenosuke Nagata",
    role: "Outreach Chair",
    photo: "images/team/takenosuke-nagata.jpg",
    message: "",
    linkedin: "https://www.linkedin.com/in/takenagata/",
    email: "takenagata@berkeley.edu",
  },
  {
    name: "Manasi Narsina",
    role: "Publicity Chair",
    photo: "images/team/manasi-narsina.jpg",
    message: "",
    linkedin: "https://www.linkedin.com/in/manasi-narsina-24b406261/",
    email: "mnarsina@berkeley.edu",
  },
];

function make(tag, classes, children) {
  var node = document.createElement(tag);
  node.setAttribute("class", classes);
  if (children) {
    for (const child of children) {
      node.appendChild(child);
    }
  }
  return node;
}

function resolvePhoto(photo) {
  if (!photo) {
    return "";
  }
  if (photo.startsWith("images/")) {
    return photo;
  }
  return "images/" + FOLDER_NAME + "/" + photo.replace(/\.jpeg$/i, ".jpg");
}

const template_element = make("div", "col about-card-holder", [
  make("div", "about-card", [
    make("div", "card-front", [
      make("div", "card-face-holder", [make("img", "card-face")]),
      make("div", "card-title", [make("p", "card-title-text")]),
    ]),
    make("div", "card-back", [
      make("p", "card-bio"),
      make("a", "card-link-li card-link"),
      make("a", "card-link-em card-link"),
    ]),
  ]),
]);

function populate_row_with_cards(node, card_data) {
  if (!node) {
    return;
  }
  for (const data of card_data) {
    const name = data.name;
    const title = data.role;
    const img_src = resolvePhoto(data.photo);
    const bio = (data.message || "").trim();
    const linkedin = data.linkedin;
    const email = "mailto:" + data.email;

    const card_element = template_element.cloneNode(true);
    const front_text_element =
      card_element.getElementsByClassName("card-title-text")[0];
    const face_element = card_element.getElementsByClassName("card-face")[0];
    const bio_element = card_element.getElementsByClassName("card-bio")[0];
    const linkedin_element =
      card_element.getElementsByClassName("card-link-li")[0];
    const email_element = card_element.getElementsByClassName("card-link-em")[0];
    const card_back = card_element.querySelector(".card-back");

    linkedin_element.setAttribute("href", linkedin);

    if (!bio) {
      card_back.removeChild(bio_element);
    } else {
      bio_element.innerHTML = bio;
    }

    front_text_element.innerHTML = "<b>" + name + "</b> <br>" + title;
    face_element.setAttribute("src", img_src);
    email_element.setAttribute("href", email);

    node.appendChild(card_element);
  }
}

const exec_data = team.filter((member) => member.role.includes("President"));
const leadership_data = team.filter(
  (member) => !member.role.includes("President")
);

populate_row_with_cards(document.getElementById("about-exec-row"), exec_data);
populate_row_with_cards(
  document.getElementById("about-officer-row"),
  leadership_data
);
