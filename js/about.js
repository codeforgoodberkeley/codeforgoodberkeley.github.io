/*
Instructions for adding team member data from the google form:

If not already done, select column G (picture link) of all new entries, right click, and select Smart Chips -> File.
Select and copy the relevant rows for members to add from columns B-G (name to bio).

Paste in a new line inside the data_strings array. (Works best in my VSCode if this is pasted in a line with no indentation)

Add quotation marks onto the beginning and end of each new line and add commas to the ends (except the last element of the list).
    \-> this can be done in VSCode by selecting the start of the lines with Alt + click or Alt + Shift + click, and then getting to the end of the lines by navigating left and one down
Make sure to add a comma to the string before the one(s) you pasted in.

Go to the form's image folder in google drive (can be accessed through the form) and then copy all relevant images into the fa23team folder (the respective semester's folder).

If applicable, run any HEIC files through this converter:
https://heictojpg.com/
Don't update the file names in the strings, this will be done automatically. 

If images are not centered, crop them to be centered around the face:
https://imageresizer.com/crop-image

If images are too large (>500 KB), resize to be around 1000x1000 or less:
https://imageresizer.com/bulk-resize
*/

data_strings = [
  "Riley Horita	rileyhorita@berkeley.edu	linkedin.com/rileyhorita	Publicity Chair	DSCN0374 - Riley Horita.jpeg	HI, im Riley. I love cats, clothes, and chumming",
  "Saarth Gaonkar	saarthgao@berkeley.edu	www.linkedin.com/in/saarth-gaonkar-0495b0286	Artist Magnet	profile - Saarth Gaonkar.jpg	Hi, I'm Saarth! I enjoy playing tennis, working out, listening to music, and hanging out with friends.",
  "Mira Ercingöz	dercingoz@berkeley.edu	https://www.linkedin.com/in/mira-ercing%C3%B6z-68518b248/	Recruitment Chair	4000X3000 - Mira Ercingoz.png	Hi, I'm Mira! I love experimental music and shows, anything related to the verb “making” (with some exceptions), and learning a new thing or two. I also like cats =^._.^= !!",
  "Kelly Tang	ygtang@berkeley.edu	www.linkedin.com/in/kelly-yuguo-tang	Artist Magnet	IMG_0947 - Kelly Tang.jpeg	Hi, I'm Kelly:) I like dancing and watching detective movies/TV series. My favorite is Dial M for Murder, directed by Alfred Hitchcock.",
  "Nirathi Cherukuri	nirathicherukuri@berkeley.edu	https://www.linkedin.com/in/nirathi-cherukuri/	Artist Magnet	Screenshot 2023-08-23 at 9.26.38 AM - Nirathi Cherukuri.png	I'm Nirathi, a freshman at Cal. I joined Code For Good to explore the real applications of my work and to explore the website/app side of it all. For fun, I enjoy singing and watching movies.",
  "Xay Hanmonty	Visitxay_hanmonty@berkeley.edu	https://www.linkedin.com/in/visitxay-hanmonty	Artist Magnet	IMG_5917 - Xay Hanmonty.jpeg	I love cooking, basketball and volleyball",
  "Nazar Ospanov	aimogenius@berkeley.edu	https://www.linkedin.com/in/nazar-ospanov-860694205	Artist Magnet	IMG_5080 - Nazar Ospanov.jpeg	Hi, I’m Nazar! I love playing soccer, coding, drumming, and helping people! Hit me up if you are up to play soccer / jazz something up ;)",
  "Emi Sakamoto	esakamoto@berkeley.edu	www.linkedin.com/in/emi-sakamoto-113506271	BABEC	IMG_9490 - Emi Sakamoto.png	I'm Emi! I like good weather, learning random facts, and video games.",
  "Hyojeong Emily Yoon	emilyyoon3107@berkeley.edu	https://www.linkedin.com/in/hyojeong-yoon-b72628280	BABEC	1690019897301 - Hyojeong Yoon.jpg	Hi, I'm Hyojeong! People usually know me as Emily. I like escape rooms, cat videos, and vibing to music :)",
  "Alexander DeRouen	aderouen@berkeley.edu	https://www.linkedin.com/in/alexander-derouen/	BABEC	20220511_172130_2 (2) - Alexander DeRouen.jpg	Hello! My name is Alexander. I love to learn and always aim to give back to others, especially through my passions in STEM and education.",
  "Calvin Duong	calvinduong11@berkeley.edu	https://www.linkedin.com/in/calvinduong11/	BABEC	CalvinPFP - Calvin Duong.jpg	Hello, I'm Calvin ! I love going to the gym,  spending time with friends, and playing ARAM.",
  "Matteo Keller	matteo.keller@berkeley.edu	https://www.linkedin.com/in/matteokeller/	BABEC	MK_Photo - Matteo Stephen Keller.jpeg	Hey!! I'm a business student with strong interest in AI technology :) I'm from Switzerland, and I enjoy playing golf, the bass guitar, and spending quality time with friends.",
  "Abdalla Eltayeb	a.eltayeb@berkeley.edu	https://www.linkedin.com/in/abdalla-mahgoub-eltayeb	BABEC	c00aca3e-9bff-4066-afed-cc6c812eea9e - Abdalla Eltayeb.jpg	Hi, I'm Abdalla! I like hiking, soccer, table tennis and eating good food.",
  "Chami Sagara	chamisagara260@gmail.com	https://www.linkedin.com/in/chamisagara/	BABEC	20221104_181844~4 - Chami Sagara.jpg	Hi I'm Chami and in my free time I like to (attempt to) bake, watch movies, and sleep :)",
  "Jun-Hyung Lee	meatjun@berkeley.edu	https://www.linkedin.com/in/meatjun	Project Manager	20230919_184116 - Jun Hyung Lee.jpg	Aloha, I'm Jun Hyung! When I'm not hard at work you can find me practicing ukulele and guitar, headbanging at metal concerts, programming video games, bodysurfing at the beach, or playing board games with friends.",
  "Sophia Sung	sophiasung@berkeley.edu	www.linkedin.com/in/sophiasung000	Social Chair	IMG_2491 - Sophia Sung.jpg	Hi, I'm Sophia! I love spontaneous adventures, skateboarding, traveling, drawing, and concerts.",
  "Jason Chan	jcshun@berkeley.edu	https://www.linkedin.com/in/jason-lok-c/	Beat The Streets	jason - Jason Chan.jpg	Hey! I love listening to music, playing video games, and trying out new places to eat, so hmu!",
  "Alex Luu	alexluu@berkeley.edu	https://www.linkedin.com/in/alexluu8/	Beat The Streets	AlexLuu - Alex Luu.png	Hey there, I'm Alex! I enjoy camping, hiking, swimming, and being outdoors.",
  "Nirali Shah	nirali.shah@berkeley.edu	www.linkedin.com/in/niralishah05	Beat The Streets	IMG_9866 - Nirali Shah.jpeg	Hi, I'm Nirali! I like working out, going to coffee shops with friends, and watching New Girl!",
  "Miranda Zhu	mirandazhu@berkeley.edu	no linkin	Beat The Streets	IMG_4046 2 - Miranda Zhu.jpg	Hi, I'm Miranda! I like dancing, singing, listening to Kpop, and napping!",
  "Stone Wu	yixuanstonewu@berkeley.edu	www.linkedin.com/in/yixuan-stone-wu-2b751025b	Beat The Streets	66ac8d_9d2d3ee270c142c19bf8748dfc0cc4a8_mv2 - Stone Wu.jpg	An ordinary kid who loves a good poem.",
  "Tanya Agrawal	tanya.agrawal@berkeley.edu	https://www.linkedin.com/in/tanya-agrawal-2b58b5214/	Beat The Streets	Headshot - Tanya Agrawal.jpg	Hi, I'm Tanya! I enjoy reading books, watching sitcoms, going on hikes and drawing.",
  "Buvi Vinothasha	Buvinnash@berkeley.edu	http://linkedin.com/in/buvinnash	Project Manager	FullSizeRender - Buvi Vinothasha.jpeg	Hi, I’m Buvi! I love playing tennis, trying new food, travelling, going on late night drives, and hanging out with friends.",
  "Dhruv Chowdhary	dhruvchowdhary@berkeley.edu	https://www.linkedin.com/in/dhruv-chowdhary/	President	IMG_7842_Original_-_Dhruv_Chowdhary.jpg	Hi, I'm Dhruv! I'm studying CS and DS, and I love playing pickleball, eating croutons, and exploring!",
  "Shivan Patel	shivanpatel@berkeley.edu	www.linkedin.com/in/shivan-patel	External Vice President	DSC_8739 - Shivan Rahil Patel.jpg	hi, I'm Shivan! I love cats, sushi, and napping -- in no particular order :)",
  "Kristy Chu	kristyc@berkeley.edu	https://www.linkedin.com/in/kristy-chu-769a8b1b3/	Recruitment & Curriculum Chairs	IMG_9726 - Kristy Chu.jpg	Hellooo, I'm Kristy! I like taking care of my plants, going out to eat, and traveling. I also like my dog and Code For Good.",
  "Esha Puri	eshapuri@berkeley.edu	www.linkedin.com/in/esha-puri	Internal Vice President	7614A71B-2FB2-4F77-AFAF-FF31F3608E8E - Esha Puri.jpeg	hi! I'm Esha, an exec officer for CFG! I enjoy playing zelda, making new recipes, and exploring local coffee shops.",
  "Kevin Chandra	kepin@berkeley.edu	www.linkedin.com/in/kevin-chandraa	Head of Curriculum	DSC_8749 - Kevin Chandra.jpg	Hi I'm Kevin! I love playing badminton, basketball, scrolling through TikTok, going on spontaneous trips, and going to the gym (I bench 135 🫣).",
  "Alex Pease	alexpease04@berkeley.edu	https://www.linkedin.com/in/alexpease04/	Project Manager	20230829_194104 - Alex Pease.jpg	Hi, I'm Alex! I like singing, martial arts, playing video games, and being the only CoC student in CFG (for now...)",
  "Thomas Culhane	thomasjculhane@berkeley.edu	www.linkedin.com/in/tculhane	Project Manager	thomas-culhane - Thomas Culhane.jpg	Hii, I'm Thomas! You can find me teaching, playing games with friends, exploring new music, stressing over cs162 projects, or all of the above! :3",
  "Boris Tomov	boristomov@berkeley.edu	https://www.linkedin.com/in/boris-tomov-b45a53238/	Project Manager	IMG_20230314_221740 - Boris Tomov.jpeg	Hello, hello! I am a third year CS & DS enthusiast from Bulgaria. I am passionate about playing the guitar, swimming and any sort of outdoor adventures!",
  "Joanne Tran	tranjoanne@berkeley.edu	https://www.linkedin.com/in/tranjoanne/	Social Chair	IMG_1296 (1) - Joanne Tran.jpg	Hey, I'm Joanne! I'm from SoCal, and I like to play video games like LoL and VALORANT. I've recently been into cars and am slowly migrating towards motorcycles. Maybe you'll see me riding one!",
  "Tyler Lam	tylerlam@berkeley.edu	https://www.linkedin.com/in/tylerlam/	Strength 'N Me	tyler-lam(1) - Tyler Lam.png	Hello everybody! I'm Tyler. Catch me running, playing strategy games, or sleeping.",
  "Cameron Leung	cameronleung@berkeley.edu	https://www.linkedin.com/in/cameron-leung-7a826717a/ 	Strength 'N Me	IMG_7593 - Cameron Leung.jpeg	I'm a sophomore in CS and <3 food! (cooking), TRAVELING, art, meeting people, & fashion ✈️🌎👩🏻‍🎨👩🏻‍🍳🤘",
  "Johan Ko	drjoyo@berkeley.edu	https://www.linkedin.com/in/kojohan/	Treasurer	IMG_0383_-_Johan_Ko.jpg	Hi, I'm Johan! In my free time, I enjoy playing poker, programming simple games, and binge eating chips and salsa.",
  "Pranitha Rao	pranitha_rao@berkeley.edu	https://www.linkedin.com/in/pranitharao/	Project Manager	IMG_2094 - Pranitha Rao.jpg	hi i'm Pranitha! in my free time i like watching basketball, crocheting, and cooking :)",
  "Prisha Raj	merisa.prisha.raj@berkeley.edu	www.linkedin.com/in/prisha-raj-70b63b277	Strength 'N Me	pic - Prisha Raj.jpg	hi, i'm prisha! i like collecting blind boxes, baking, and playing video games!",
  "Amitesh Gargapati	amitgarg9@berkeley.edu	https://www.linkedin.com/in/amitg1235/	Strength 'N Me	0 - Amitesh Gargapati.jpeg	Hi, I'm Amitesh! I enjoy tennis, rejuvenating naps, and discovering new and exciting food places to eat. Additionally, I'm a big fan of board games for some fun and friendly competition.",
  "Seungyeon Kim	sykim@berkeley.edu	n/a	Strength 'N Me	IMG_5566 - Seungyeon Kim.jpg	Hi I'm Kimmy! I love movies, music, decorating, and bonding with my cat!",
];

function shuffle(arr) {
  //array,placeholder,placeholder,placeholder
  ct = arr.length;
  while (ct) {
    b = (Math.random() * ct--) | 0;
    d = arr[ct];
    arr[ct] = arr[b];
    arr[b] = d;
  }
}

team_data = [];
officer_data = [];

const officer_names = [
  "Dhruv Chowdhary",
  "Esha Puri",
  "Shivan Patel",
  "Kristy Chu",
  "Kevin Chandra",
  "Mira Ercingöz",
  "Joanne Tran",
  "Sophia Sung",
  "Riley Horita",
  "Johan Ko",
  "Alex Pease",
  "Thomas Culhane",
  "Boris Tomov",
  "Buvi Vinothasha",
  "Jun-Hyung Lee",
  "Pranitha Rao",
];

officer_data = data_strings
  .map((data_string) => data_string.split("\t"))
  .filter((split_data) => officer_names.includes(split_data[0]))
  .sort((a, b) => officer_names.indexOf(a[0]) - officer_names.indexOf(b[0]));

for (const data_string of data_strings) {
  split_data = data_string.split("\t");
  if (split_data[4].includes(".heic") || split_data[4].includes(".HEIC")) {
    split_data[4] = split_data[4]
      .replace(".heic", ".jpg")
      .replace(".HEIC", ".jpg")
      .replaceAll(" ", "_");
  }
  if (officer_names.includes(split_data[0])) {
    officer_data.push(split_data);
  } else {
    team_data.push(split_data);
  }
}

shuffle(team_data);

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

/*
Card Template

<div class="col about-card-holder">
    <div class="about-card">
        <div class="card-front">
            <div class="card-face-holder">
                <img class="card-face" src="[Image Source]" />
            </div>
            <div class="card-title">
                <p> <b>[Name]</b> <br> [Title]</p>
            </div>
            
        </div>
        <div class="card-back">
            <p class="card-bio"> </p>
            <a href="[LinkedIn Link]" class="card-link-li"> </a>
            <a href="[Email Link]" class="card-link-em"> </a>
        </div>
    </div>
</div>
*/

template_element = make("div", "col about-card-holder", [
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

const officer_data_row1 = officer_data.slice(0, 10);
// const officer_data_row2 = officer_data.slice(5, 10);
const officer_data_row3 = officer_data.slice(10, 16);

function populate_row_with_cards(node, card_data) {
  for (const data of card_data) {
    if (data.length == 6) {
      let name = data[0];
      let title = data[3];
      let img_src = data[4];
      let bio = data[5];
      let linkedin = data[2];
      if (linkedin.length > 2 && !linkedin.startsWith("https://")) {
        if (!linkedin.startsWith("www.")) {
          linkedin = "www." + linkedin;
        }
        linkedin = "https://" + linkedin;
      }

      let email = "mailto: " + data[1];

      card_element = template_element.cloneNode(true);
      front_text_element =
        card_element.getElementsByClassName("card-title-text")[0];
      face_element = card_element.getElementsByClassName("card-face")[0];
      bio_element = card_element.getElementsByClassName("card-bio")[0];
      linkedin_element = card_element.getElementsByClassName("card-link-li")[0];
      email_element = card_element.getElementsByClassName("card-link-em")[0];

      if (linkedin.length < 3) {
        card_element.firstChild.lastChild.removeChild(linkedin_element);
        email_element.className += " link-center";
      }

      front_text_element.innerHTML = "<b>" + name + "</b> <br>" + title;
      face_element.setAttribute("src", "images/fa23team/" + img_src);
      bio_element.innerHTML = bio;
      linkedin_element.setAttribute("href", linkedin);
      email_element.setAttribute("href", email);

      node.appendChild(card_element);
    } else {
      console.error("Malformed card data: " + data);
    }
  }
}

populate_row_with_cards(document.getElementById("about-officer-row-1"), officer_data_row1);
// populate_row_with_cards(document.getElementById("about-officer-row-2"), officer_data_row2);
populate_row_with_cards(document.getElementById("about-officer-row-3"), officer_data_row3);
populate_row_with_cards(document.getElementById("about-team-row"), team_data);
