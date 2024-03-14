/*
Instructions for adding team member data from the google form:

If not already done, select column O (picture link) of all new entries, right click, and select Smart Chips -> File.
Select and copy the relevant rows for members to add from columns K-P (name to bio).

Paste in a new line inside the data_strings array. (Works best in my VSCode if this is pasted in a line with no indentation)

Add quotation marks onto the beginning and end of each new line and add commas to the ends (except the last element of the list).
    \-> this can be done in VSCode by selecting the start of the lines with Alt + click or Alt + Shift + click, and then getting to the end of the lines by navigating left and one down
Make sure to add a comma to the string before the one(s) you pasted in.

Go to the form's image folder in google drive (can be accessed through the form) and then download all images.
Go to https://redketchup.io/bulk-image-resizer and "Resize By File Size" to have "Max. File Size 200KB" and download all. This is to ensure that the website loads quickly.
Upload all the images to the images/sp24team folder (respective semester's folder).

If applicable, run any HEIC files through this converter:
https://heictojpg.com/
Don't update the file names in the strings, this will be done automatically. 

If images are not centered, crop them to be centered around the face:
https://imageresizer.com/crop-image
*/

data_strings = [
  "Nathan Kim	n33937@berkeley.edu	https://www.linkedin.com/in/lnathankim/	Curriculum Member	nathankimpfp1 - Nathan Kim.jpg	Hi, I'm Nathan. I love exploring random hobbies, cafes, clothes, and cats (even though im allergic sadly).",
  "Jun Hyung Lee	meatjun@berkeley.edu	https://www.linkedin.com/in/meatjun	Project Manager	Screenshot 2024-02-20 at 4.59.19 PM - Jun Hyung Lee.png	Hi, I'm Jun-Hyung! I love playing ukulele, bodysurfing, and playing board games with friends.",
  "Sophie Tau	sophietau6@berkeley.edu	www.linkedin.com/in/sophie-tau-419350279	Curriculum Member	Screen Shot 2024-02-07 at 8.58.27 AM - Sophie Tau.png	hi i'm sophie and i love lebron james, christopher nolan movies and long runs on the beach",
  "Kevin Chandra	kepin@berkeley.edu	www.linkedin.com/in/kevin-chandraa	Curriculum Chair	DSC05496 - Kevin Chandra.jpg	Hi I'm Kevin! I love playing badminton, basketball, scrolling through TikTok, going on spontaneous trips, and going to the gym (I bench 135 🫣).",
  "Thomas Culhane	thomasjculhane@berkeley.edu	https://www.linkedin.com/in/tculhane/	Project Manager	thomas-culhane - Thomas James Culhane.jpg	Hi, I'm Thomas, a CS/Linguistics student from New Jersey! In my spare time, you can find me making bad jokes, eating too much cheese, or trying to talk like Tony Soprano.",
  "Kelly Tang	ygtang@berkeley.edu	www.linkedin.com/in/kelly-yuguo-tang	Plastic Ocean Project	pict - Kelly Tang.jpg	Hi, I'm Kelly:) I like traveling, dancing, musicals, and mystery movies. ",
  "Neha Haresh	neha.haresh@berkeley.edu	https://www.linkedin.com/in/neha-haresh/	Curriculum Member	IMG_0122 - Neha Haresh.jpg	hii, i'm neha - freshman majoring in cs! i <3 cats, going to concerts, baking for my friends & working in museums + curating art💌🖼️",
  "Emi Sakamoto	esakamoto@berkeley.edu	https://www.linkedin.com/in/emi-sakamoto-113506271/	Undergraduate Street Medicine Outreach	IMG_5511 - Emi Joelle Sakamoto.jpg	Hi I'm Emi! I love nice weather, friendly competition, and good food. ",
  "Buvinnash Vinothasha	buvinnash@berkeley.edu	https://www.linkedin.com/in/buvinnash	Project Manager	IMG_0224 - Buvi Vinothasha.jpg	Hi, I’m Buvi! I love playing tennis, trying new food, travelling, going on late night drives, watching the Lakers, and hanging out with friends.",
  "Eric Zeng	ciregenz@berkeley.edu	linkedin.com/in/eric-zeng-a3957a210/	Undergraduate Street Medicine Outreach	Headshot - Eric F Zeng.png	Hi I’m Eric! I like volleyball, gymming and “culinary-touring”. ",
  "Arjun Lakhanpal	Alakhanpal@berkeley.edu	https://www.linkedin.com/in/arjun-lak/	Plastic Ocean Project	panda - Arjun Lakhanpal.jpg	Wsp I'm Arjun, I enjoy lifting and listening to music.",
  "Pranitha Rao	pranitha_rao@berkeley.edu	https://www.linkedin.com/in/pranitharao/	Project Manager	IMG_2661 - Pranitha Rao.jpg	hi i'm Pranitha! in my free time i like watching basketball, crocheting, and cooking :)",
  "Prisha Raj	merisa.prisha.raj@berkeley.edu	www.linkedin.com/in/prisharaj	Undergraduate Street Medicine Outreach	pic - Prisha Raj.jpg	Hi, I’m Prisha! I like journaling, collecting blind boxes, and reading!",
  "Edward Zhang	edwardzhongweizhang@berkeley.edu	https://www.linkedin.com/in/edward-z-0b5995209/	Plastic Ocean Project	Edward_Picture_3 - Edward Zhongwei Zhang.jpg	Hi, I am Edward! I enjoy playing Go (a kind of chess), calligraphy, classical music, and flying airplanes as a pilot. ",
  "Atharss Prasath	atharss.prasath@berkeley.edu	linkedin.com/in/atharss-prasath/	Curriculum Member	IMG_1820 - Atharss Prasath.jpg	I like sports, listening to music, and the outdoors",
  "Anshika Ojha	anshikaojha@berkeley.edu	https://www.linkedin.com/in/anshikaojha	Berkeley Free Clinic	IMG_0018 - Anshika Ojha.jpg	Hi, I’m Anshika! I like singing, dancing, and playing the guitar. I’m super extroverted and down for spontaneous adventures :)",
  "Sophia Sung	Sophiasung@berkeley.edu	https://www.linkedin.com/in/sophiasung000?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Social Chair	2B574489-555A-47E3-8EB2-2A1371F2A2B6 - Sophia Mei-En Sung.jpg	Hi, I'm Sophia! I love spontaneous adventures, skateboarding, traveling, drawing, and concerts.",
  "Miranda Zhu	Mirandazhu@berkeley.edu	linkedin.com/in/zhu-miranda	Berkeley Free Clinic	IMG_0105 - Miranda Zhu.jpg	Hi I'm a sophomore in DS :). I like dancing, singing, listening to Kpop, and napping ofc. ",
  "Sejal Bilwar	sejalbilwar@berkeley.edu	https://www.linkedin.com/in/sejal-bilwar/	Guide Dogs for the Blind	profile-pic - Sejal Bilwar.png	Hey, I'm Sejal! I love trying out new coffee shops and restaurants, spending time with friends, and dancing :)",
  "Alex Luu	alexluu@berkeley.edu	https://www.linkedin.com/in/alexluu8/	Plastic Ocean Project	IMG_3115 - Alex Luu.jpg	Hey there, I'm Alex! I enjoy camping, hiking, swimming, and being outdoors.",
  "Calvin Duong	calvinduong11@berkeley.edu	https://www.linkedin.com/in/calvinduong11/	Guide Dogs for the Blind	calvin - Calvin T Duong.jpg	Hello, I'm Calvin ! I love going to the gym, spending time with friends, and playing ARAM.",
  "Seungyeon Kim	sykim@berkeley.edu	https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav	Golden Gate Bird Alliance	Screenshot 2024-02-20 at 8.48.41 PM - Seungyeon Kim.png	Hi, I’m Kimmy! I’m a CogSci major studying data science and design. I like watching movies, cooking, and training my cat to do tricks!",
  "Maixin Zhang	maixin77@berkeley.edu	https://www.linkedin.com/in/maixin-zhang/	Curriculum Member	IMG_9198 - Maixin Zhang.jpg	Hi, I'm Maixin!! I like makeup, pop music, and Thai food. Hit me up if you want to play Avalon or Mahjong!!",
  "Esha Puri	eshapuri@berkeley.edu	https://www.linkedin.com/in/esha-puri	Internal Vice President	7614A71B-2FB2-4F77-AFAF-FF31F3608E8E - Esha Puri.jpg	Hi, I’m Esha! I love exploring cafes around Berkeley and spending time with friends.",
  "Dhruv Chowdhary	dhruvchowdhary@berkeley.edu	https://www.linkedin.com/in/dhruv-chowdhary/	President	IMG_7842_Original - Dhruv Chowdhary.jpg	Hi, I'm Dhruv! I'm studying CS and DS, and I love playing pickleball, eating croutons, and exploring!",
  "Cameron Leung	cameronleung@berkeley.edu	https://www.linkedin.com/in/cameron-leung-7a826717a/	Guide Dogs for the Blind	IMG_2881 - Cameron M Leung.jpg	I'm Cameron! I love reading, fashion, and traveling 🤸🏻‍♀️🛩️🤠",
  "Saarth Gaonkar	saarthgao@berkeley.edu	https://www.linkedin.com/in/saarth-gaonkar/	Linens N Love	profile - Saarth Gaonkar.jpg	Hi, I'm Saarth! I enjoy playing tennis, working out, listening to music, and hanging out with friends.",
  "Juyeon Ma	jyma0218@berkeley.edu	https://www.linkedin.com/in/juyeon-ma-5652821b7/	Undergraduate Street Medicine Outreach	9F470E76-BA53-458D-A980-93CB93E1AB4A - Juyeon Ma.jpg	Hi, I’m Juyeon! I like writing and spacing out in a peaceful spot.",
  "Alif Satyawan	alif.satyawan@berkeley.edu	linkedin.com/in/alifsatyawan	Plastic Ocean Project	linkedin3pic - Alif Pratama Satyawan.png	Hi, I'm Alif! And I like to Code For Good.",
  "Jason Chan	jcshun@berkeley.edu	https://www.linkedin.com/in/jason-lok-c/	Linens N Love	jason - Jason Chan.jpg	Hey! I like listening to music, playing games, and trying out new places to eat!",
  "Sofia Garcia	sofia.garcia@berkeley.edu	www.linkedin.com/in/sofia-valeria-garcia-quintana	Golden Gate Bird Alliance	IMG_3679 - Sofia Valeria Garcia.jpg	Hi! My favorite things in the world are podcasts, chocolate and music.",
  "Garima Upadhyay	garimau@berkeley.edu	https://www.linkedin.com/in/garimaupadhyay35/	Golden Gate Bird Alliance	Garima_Upadhyay - Garima Upadhyay.png	Hey, I'm Garima! In my free time, I enjoy making niche playlists, reading, and trying out new food places with my friends. :D",
  "Yixin Huang	yixinhuang1@berkeley.edu	https://www.linkedin.com/in/yixin-huang-91b7781aa/	Plastic Ocean Project	my_photo - Yixin Huang.jpg	Hi, I am Yixin! I like traveling around random places in Berkeley and sf, drinking coffee(favorite is matcha latte), and trying out new food.",
  "Tanya Agrawal	tanya.agrawal@berkeley.edu	 	Undergraduate Street Medicine Outreach	IMG_9237 - Tanya Agrawal.jpg	Hi, I'm Tanya! I enjoy solving puzzles, reading, and exploring new places. ",
  "Shivan Patel	shivanpatel@berkeley.edu	www.linkedin.com/in/shivan-patel	External Vice President	DSC_8739 - Shivan Rahil Patel.jpg	hi, I'm Shivan! I love cats, sushi, and napping -- in no particular order :)",
  "Reya Vir	reyavir@berkeley.edu	https://linkedin.com/in/reyavir	Linens N Love	DSC06913 copy - Reya Vir.jpg	hi, im reya! i like weightlifting, hanging out w friends, and visiting new places :)",
  "Nirathi Cherukuri	nirathicherukuri@berkeley.edu	https://www.linkedin.com/in/nirathi-cherukuri/	Golden Gate Bird Alliance	Screenshot 2023-08-23 at 9.26.38 AM - Nirathi Cherukuri.png	Hey, my name is Nirathi and I'm a first year student at Cal. Alongside programming and technology, I enjoying singing, watching Bollywood films, and (attempting to) draw.",
  "Brittney Chan	brittneychan@berkeley.edu		Berkeley Free Clinic	IMG_4628 - Brittney Pui-Ting Chan.png	hi, i'm brittney!! i <3 cats, boba, spicy food, and rotting in bed :)",
  "Vinay Vellore	vinay_vellore@berkeley.edu	https://www.linkedin.com/in/vinay-vellore-a017731bb/	Curriculum Member	0C0A1107 - Vinay Vellore.jpg	Hi, my name is Vinay and I'm a junior at Cal studying Data Science and Economics! In my free time, I enjoy golfing, snowboarding, and playing poker.",
  "Boris Tomov	boristomov@berkeley.edu	https://www.linkedin.com/in/boris-tomov-b45a53238/	Project Manager	IMG_20230314_221740 - Boris Boyanov Tomov.jpg	Hello, hello! I am a third year CS & DS enthusiast from Bulgaria. I am passionate about playing the guitar, swimming and any sort of outdoor adventures!",
  "Nazar Ospanov	nospanov@berkeley.edu	https://www.linkedin.com/in/nazar-ospanov-860694205	Berkeley Free Clinic	IMG_5693 - Nazar Niyazbekovich Ospanov.jpg	Hey hey, I’m Nazar!! I like playing music, sports, and love to go to the gym! ",
  "Joanne Tran	tranjoanne@berkeley.edu	https://www.linkedin.com/in/tranjoanne/	Social Chair	joanne headshot - Joanne Tran.jpg	Hey hey! I'm Joanne and in my free time I love playing video games (e.g. League of Legends, VALORANT, Minecraft, etc..), grabbing food with friends, and djing.",
  "David Xu	rav4@berkeley.edu		Undergraduate Street Medicine Outreach	1D9AD771-3435-4C0B-86D1-8550630E4C6D - David Xu.jpg	Hello, I’m David :D! I love music, cooking and sleeping 12 hours on weekends 🥰",
  "Sunghyun Kim	andrew49875@berkeley.edu	https://www.linkedin.com/in/sunghyun-kim-24696229a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Curriculum Member	Sunghyun Kim.jpg	HELLO, I'm Sunghyun(Jason) Kim. I like playing sports such as bowling, table tennis, soccer and I love Korean BBQ!!",
  "WenWen Gu	wenwengu@berkeley.edu	https://www.linkedin.com/in/wenwen-gu/	Guide Dogs for the Blind	IMG_6362 - WenWen Gu.jpg	Hi I am WenWen! I love to EAT EAT AND EAT. Aside from eating I love to SLEEP SLEEP AND SLEEP. Oh yes, I love to code as well!",
  "Ivan Apodaca	ivanapodaca04@berkeley.edu	https://www.linkedin.com/in/ivanapodaca/	Guide Dogs for the Blind	IMG_7171 - Ivan Joseph Apodaca.jpg	Hi, I'm Ivan! I throughly enjoy going out with friends, listening to music, gaming, sports, and just existing on this Earth in general.",
  "Stone Wu	yixuanstonewu@berkeley.edu	https://www.linkedin.com/in/yixuan-stone-wu-2b751025b/	Linens N Love	stone-wu - Stone Wu.png	A sophomore who loves love poems",
  "Sara Jangid	sarajangid@berkeley.edu	https://www.linkedin.com/in/sara-jangid-62968b2b3/ 	Curriculum Member	IMG_5786 - Sara Jangid.jpg	Hii i’m Sara! I love watching sitcoms, listening to music and playing board/card games.",
  "Nirali Shah	nirali.shah@berkeley.edu	https://www.linkedin.com/in/niralishah05/	Guide Dogs for the Blind	niralishah - Nirali Shah.jpg	Hi, I’m Nirali! I like working out, napping, and drinking coffee!",
  "Riley Horita	rileyhorita@berkeley.edu	LinkedIn.com/rileyhorita	Publicity Chair	B9C39AFC-E2C6-4021-8546-1F862616F395 - Riley Linh Horita.jpg	HI, im Riley. I love cats, clothes, and chumming",
  "Alex Pease	alexpease04@berkeley.edu	https://www.linkedin.com/in/alexpease04/	Project Manager	20230829_194104 - Alex Pease.jpg	Hi, I'm Alex! I love singing, gaming, and finally not being the only member of CFG in the College of Chemistry!",
  "Richard Yu	richardyu@berkeley.edu	https://www.linkedin.com/in/rrichardyu/	Linens N Love	IMG_0901 - Richard Yu.jpg	Hi, I'm Richard! I love cooking, trying out new restaurants, and going on hikes!",
  "Johan Ko	drjoyo@berkeley.edu	linkedin.com/in/kojohan	Treasurer	IMG_1177 - Johan Youngchan Ko.jpg	Hi, I’m Johan. In my spare time, I enjoy playing poker, coding simple games, and binge eating chips and salsa.",
  "Chami Sagara	chamisagara@berkeley.edu	https://www.linkedin.com/in/chamisagara	Golden Gate Bird Alliance	20221104_181844~4 - Chami Sagara.jpg	Hi, I'm Chami and in my free time I like to (attempt to) bake, watch movies, and sleep :)",
  "Kristy Chu	kristyc@berkeley.edu	https://www.linkedin.com/in/kristy-chu-769a8b1b3/	Recruitment & Curriculum Chair	7026949F-D54F-4089-A140-DC8604BA23AF_1_105_c - Kristy Chu.jpg	Hi, I'm Kristy. I love plants, my dog, and traveling! ",
  "Richard Villagomez	richard.villagomez@berkeley.edu	https://www.linkedin.com/in/richardmvillagomez/	Berkeley Free Clinic	Screenshot 2024-02-13 at 5.17.05 PM - Richard Mafnas Villagomez.png	Hi, I'm Richard! I like cafe-hopping, shopping, and playing on my guitar.",
  "Mira Ercingöz	dercingoz@berkeley.edu	https://www.linkedin.com/in/mira-ercing%C3%B6z-68518b248/	Recruitment Chair	4000X3000 - Mira Ercingoz.png	Hi, I'm Mira! I love experimental music and shows, anything related to the verb “making” (with some exceptions), and learning a new thing or two. I also like cats =^._.^= !!",
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
  "Buvinnash Vinothasha",
  "Jun Hyung Lee",
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

// To change the rows of leadership
const officer_data_row1 = officer_data.slice(0, 4);
// const officer_data_row2 = officer_data.slice(5, 10);
const officer_data_row3 = officer_data.slice(4, 16);

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
      face_element.setAttribute("src", "images/sp24team/" + img_src);
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
