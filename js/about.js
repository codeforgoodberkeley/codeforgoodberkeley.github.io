/*
Instructions for adding team member data from a google form:

We assume that the data is arranged in columns: Name | Email | LinkedIn | Role | Picture | Bio

If not already done, select the picture link of all new entries, right click, and select Smart Chips -> File.

Select and copy the relevant rows for the aforementioned 6 columns (name to bio).

Paste this data in a new line inside the data_strings array. (Works best in my VSCode if this is pasted in a line with no indentation)

Add quotation marks onto the beginning and end of each new line and add commas to the ends of each line.
    \-> this can be done in VSCode by selecting the start of the lines with Alt + click or Alt + Shift + click, and then getting to the end of the lines by navigating left and one down
Make sure to add a comma to the string before the one(s) you pasted in.

If applicable, run any HEIC files through this converter:
https://heictojpg.com/
Don't update the file names in the strings, this will be done automatically. 

Go to the form's image folder in google drive (can be accessed through the form) and then download all images.
Go to https://redketchup.io/bulk-image-resizer and "Resize By File Size" to have "Max. File Size 200KB" and download all. This is to ensure that the website loads quickly.
Upload all the images to the images/[SEMESTER]team folder (respective semester's folder).

If images are not centered, crop them to be centered around the face:
https://imageresizer.com/crop-image
*/

data_multiline_string = `Yixin Huang	yixinhuang1@berkeley.edu	https://www.linkedin.com/in/yixin-huang-91b7781aa/	Project Manager	my_photo - Yixin Huang.jpg	Hi, I am Yixin! I enjoy playing ping pong, jogging, trying out new food, and explore interesting places.
Kelly Tang	ygtang@berkeley.edu	https://www.linkedin.com/in/kelly-yuguo-tang	Project Manager	27c14fb402ad28284c03863c05967afe - Kelly Tang.jpeg	Hi, I’m Kelly ;) I like dancing, anime, detective fictions, trying gooood fooooood, and traveling.
Nathan Kim	n33937@berkeley.edu	https://www.linkedin.com/in/lnathankim/	Treasurer	IMG_1814 - Nathan Kim.jpeg	Hi, I'm Nathan! I love to hang out with friends, cook, and learn about all things tech and finance related. Feel free to reach out.
Garima Upadhyay	garimau@berkeley.edu	www.linkedin.com/in/garimaupadhyay35	Project Manager	Garima_Upadhyay - Garima Upadhyay.png	Hey, I'm Garima! In my free time, I enjoy making niche playlists, reading, and trying out new food places with my friends!
Seungyeon Kim	sykim@berkeley.edu	https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav	Client Track Member	IMG_3695 - Seungyeon Kim.jpeg	hi call me Kimmy! I like to cook, solve puzzles, and annoy my cat :3
Alex Luu	alexluu@berkeley.edu	https://www.linkedin.com/in/alexluu1	Project Manager	IMG_3115 - Alex Luu - Alex Luu.jpg	Hey there, I'm Alex! I enjoy camping, hiking, swimming, and being outdoors.
Buvi Vinothasha	buvinnash@berkeley.edu	https://www.linkedin.com/in/buvinnash	Senior Advisor	IMG_0224 - Buvi Vinothasha.jpeg	Hi, I’m Buvi! I love playing tennis, going on late night drives, and watching the Lakers.
Nirali Shah	nirali.shah@berkeley.edu	https://www.linkedin.com/in/nirali-shah-b23810221	Recruitment Chair	IMG_0094 - Nirali Shah.jpeg	Hi! My name is Nirali. I love coffee, baked goods, and watching New Girl!
Cameron Leung	cameronleung@berkeley.edu	https://www.linkedin.com/in/cameron-leung-7a826717a	Publicity Chair	IMG_2134 - Cameron M Leung.heic	Hii, I’m Cameron :) I love traveling, hawaiin tropic sunscreen, and exploring SF
Juyeon Ma	jyma0218@berkeley.edu	https://www.linkedin.com/in/juyeon-ma-5652821b7	Client Track Member	89EFC5E8-C33F-40B3-B45D-2433E831DB41 - Juyeon Ma.jpeg	Hi, I’m Juyeon! I like burgers from any brands.
Edward  Zhang	edwardzhongweizhang@berkeley.edu	https://www.linkedin.com/in/edward-z-0b5995209	Client Track Member	27023b564a982bf1c860a8a968ce2da9 - Edward Zhongwei Zhang.jpeg	Hi, I am Edward! I enjoy playing Go (a kind of chess), calligraphy, classical music, and flying airplanes as a pilot.
Maixin Zhang	maixin77@berkeley.edu	https://www.linkedin.com/in/maixin-zhang	Client Track Member	IMG_9782 - Maixin Zhang.jpeg	Hi, I'm Maixin!! I like makeup, pop music, and Thai food. Hit me up if you want to play Avalon or Mahjong!!
Sejal Bilwar	sejalbilwar@berkeley.edu	https://www.linkedin.com/in/sejal-bilwar?trk=contact-info	Client Track Member	IMG_9938 - Sejal Bilwar.jpeg	Hey, I'm Sejal! I love trying out new coffee shops and restaurants, spending time with friends, and dancing :)
Prisha Raj	merisa.prisha.raj@berkeley.edu	https://www.linkedin.com/in/prisharaj	Client Track Member	pic - Prisha Raj.heic	Hi, I’m Prisha! I like collecting smiskis, junk journaling, and baking!
Miranda Zhu	mirandazhu@berkeley.edu	http://linkedin.com/in/zhu-miranda	Project Manager	IMG_4630 - Miranda Zhu.jpeg	Hi, I’m Miranda! I’m a junior studying Data Science and Stats. I like singing, dancing, napping and watching a lot of dramas.
Emi Sakamoto	Esakamoto@berkeley.edu	https://www.linkedin.com/in/emi-sakamoto-113506271	Project Manager	IMG_1587 - Emi Sakamoto.jpeg	Hi I’m Emi! I like being outside, cats, and puzzles and trivia. 
Nazar Ospanov	nospanov@berkeley.edu	https://www.linkedin.com/in/nazar-ospanov-860694205	Project Manager	IMG_0164 - Nazar Ospanov.jpeg	Can you guys keep my existing one please🙏🏼🙏🏼🙏🏼
Alex Pease	alexpease04@berkeley.edu	https://www.linkedin.com/in/alexpease04	Curriculum Chair	DSC_1215 - Alexander Pease.JPG	Hi, I'm Alex! I like social and good and code, but my favorite part of CFG is For.
David Xu	rav4@berkeley.edu		Client Track Member	IMG_0509 - David Xu.jpeg	Hello! Nice to meet you, my name is David. We’re big fans of cooking, taking long walks, and listening to good music :D
Mikayla Acosta	macosta28@berkeley.edu	https://www.linkedin.com/in/mikayla-acosta-89636a247	Curriculum Member	IMG_3616 - Mikayla Acosta.jpeg	Hi, I’m Mikayla and I like to hang out with friends and eat lots of food!!
Tyler Lam	tylerlam@berkeley.edu	https://www.linkedin.com/in/tylerlam	Client Track Member	IMG_2748 - Tyler Lam.jpeg	Hello everybody, I’m Tyler! I enjoy traveling, playing strategy games, and swimming.
Sophia Sung	Sophiasung@berkeley.edu	https://www.linkedin.com/in/sophiasung000	Social Chair	11095DEA-06AB-4797-93D7-7FE376B7B800 - Sophia Mei-En Sung.jpeg	Hi :3 I’m Sophia! I like chilling with the homies and chilling by myself. 
Ethan Jang	eef.jang@berkeley.edu	I dont have linkedin lmao	Curriculum Member	20240924_212416 - Ethan Jang.jpg	Hi, I'm Ethan! I like infodumping about things I learned off the Internet, singing, and believing in Java/JS supremacy even though Data C88C is making me learn Python!
Divij Muthu 	divij_muthu@berkeley.edu	https://linkedin.com/in/divij-muthu-1a55b72aa/	Curriculum Member	Screenshot_2024-09-02_at_12.04.46_PM - Divij Muthu.png	Hey, I'm Divij! I enjoy playing badminton, video games, and trying new things.
Terry Chen	Terrychen13@berkeley.edu	http://linkedin.com/in/chenterry	Client Track Member	Sharpen Upscale Terry - Terry Chen.jpeg	Hi I’m Terry. I like surfing, listening to music, eating, and sleeping
Jun Hyung Lee	meatjun@berkeley.edu	https://www.linkedin.com/in/meatjun	Social Chair	IMG_2300 - Jun Hyung Lee.jpg	Hi I'm Jun-Hyung! I love jamming on my ukulele, playing board games, and bodysurfing.
Clinton Nguyen	clintonnguyen@berkeley.edu	https://www.linkedin.com/in/clintondnguyen	Client Track Member	Screenshot_20240924-213032 - Clinton Nguyen.png	My name is Clinton. I like eating, whistling and playing games 0_0
Yusrah Khan	yusrahk@berkeley.edu	https://www.linkedin.com/in/yusrah-khan	Client Track Member	IMG_6136 - Yusrah Khan.jpeg	Hi I’m Yusrah!! I love cats, binging kdramas and exploring new food places with my friends!
Johan Ko	drjoyo@berkeley.edu	linkedin.com/in/kojohan	Project Manager	IMG_0387 - Johan Ko.jpeg	Hi, I’m Johan. I like playing poker and video games and unfortunately eating fried foods. 
Daniel Lief	daniel_lief@berkeley.edu	https://www.linkedin.com/in/daniel-lief-356009314	Client Track Member	PXL_20240519_025556188 - Daniel W Lief.jpg	Hey, I'm Daniel! I like chess, games, and coding fun projects.
Krithika Singh	krithikasingh@berkeley.edu	https://www.linkedin.com/in/krithikasingh	Curriculum Member	IMG_3454 - Krithika Singh.jpeg	Hi, I’m Krithika! I enjoy exploring new places, playing the clarinet, and going hiking. 
Chase Graham	chase_graham@berkeley.edu		Client Track Member	IMG_2113 - Chase P Graham.jpeg	Hi, I’m Chase and I like playing guitar, eating ramen, hiking, and cats!
Raghav Nautiyal	nautiyal@berkeley.edu	http://linkedin.com/in/raghavnautiyal	Client Track Member	IMG_6887 - raghav nautiyal.jpeg	I’m Raghav, I’m a second year EECS major. I like lifting and running.
Shayla He	shaylahe@berkeley.edu	http://linkedin.com/in/shayla-he-70348b2b7	Client Track Member	IMG_5206 - Shayla He.jpeg	Hello, I'm Shayla! I really love singing, playing piano, making coffee, playing badminton, and getting food with friends :)
Zoey Yang	zy2004@berkeley.edu	http://www.linkedin.com/in/zoey-yang-90b5b9286	Client Track Member	96612D5F-2EBE-49FE-BA35-D307BEF230DC - Zoey Yang.jpeg	Hi, I’m Zoey. I am a huge durian and tropical fruit lover!
Stephen Park	s.park0@berkeley.edu	https://www.linkedin.com/in/stephen-s-park-53640332b/	Client Track Member	20240506_174449 - Stephen S Park.jpg	Hi, my name is Stephen! I enjoy archery, photography, and watching movies.
Anirra Kutty	anirra_kutty@berkeley.edu		Client Track Member	IMG_0779_Original - Anirra Nitiya Kutty.jpeg	Hi, I’m Anirra! I love cats, trying new restaurants, and making book nooks!
Hannah Dermawan	hannahdermawan@berkeley.edu	www.linkedin.com/in/hannah-dermawan	Curriculum Member	IMG_2307 - Hannah Dermawan.jpeg	Hi hi! I’m Hannah :) I love playing tennis, drinking boba, and going on spontaneous adventures! I also love good food so I’m always down to try out new restos!
Gavin Hongchi Lai	glai@berkeley.edu	www.linkedin.com/in/gavin-lai-39940b32b	Curriculum Member	IMG_0305 - Gavin Lai.jpeg	I love swimming (like a lot a lot)!!! Math is cool, coding is rad, and I also like playing clash of clans.
Shruti Vora	shruti.s.vora@berkeley.edu	https://www.linkedin.com/in/shruti-vora-bb8471241/	Client Track Member	IMG_5516 - Shruti Sujal Vora.jpeg	Hi, I am Shruti! I like baking/cooking, painting, traveling, spending time with family and friends, and love ice-cream!! :)
Sarah Zhang	sarahzh@berkeley.edu	linkedin.com/in/sarahwzhang	Client Track Member	IMG_9263 - Sarah Zhang.jpeg	Hello! I’m Sarah, and I like cats, watching movies, and playing minesweeper ^_^
Kuljit Uppal	kuljit@berkeley.edu	https://www.linkedin.com/in/kuljitu	Client Track Member	IMG_3589 - Kuljit Uppal.jpeg	Hey! My name is Kuljit and I like playing tennis, hiking, and watching movies.
Alex Toohey	alex_toohey@berkeley.edu	www.linkedin.com/in/alex-toohey-5712a0305	Curriculum Member	CFG Website Pic - Alex Toohey.jpg	Hi, I'm Alex! I like playing tennis, hiking, skiing, and watching sports.
Srikala Munukutla	srikala.v.munukutla@berkeley.edu	http://linkedin.com/in/srikala-munukutla-1229a626b	Curriculum Member	DSCN6745 - Srikala Munukutla.jpeg	Hey, I’m Srikala! I love singing, trying new food spots, hanging out with friends, and being spontaneous.
Madeline Louise Agusalim	Maddy11@berkeley.edu	https://www.linkedin.com/in/madeline-louise-agusalim/	Client Track Member	IMG_0337 - Madeline Louise Agusalim.jpeg	Hey, I’m Madeline! I love singing, meeting awesome people, trying exciting things, traveling, going on nature walks, and creating fun events to bring everyone together!
Ishanth Hombaiah	ihombaiah@berkeley.edu	https://www.linkedin.com/in/ishanth-hombaiah/	Curriculum Member	Ishanth_Picture - Ishanth Kiran Hombaiah.jpg	Hello, I'm Ishanth and I'm a freshman studying computer science. My hobbies are drawing, reading, and coding. 
Kristy Chu	kristyc@berkeley.edu	https://www.linkedin.com/in/kristy-chu-769a8b1b3/	Senior Advisor	camera_2024_09_24_13_01 - Kristy Chu.jpg	Hi, I'm Kristy. I love plants, my dog, and traveling!
Mohammed Alolefi	Mohammeda@berkeley.edu	https://www.linkedin.com/in/mohammed-alolefi/	Client Track Member	IMG_1787 - Mohammed Mohammed Alolefi.PNG	Hi, my name is Mohammed but you can also call me Moe. I really enjoy cooking and baking(especially cheesecake) and watching stand-up. 
Sara Jangid	sarajangid@berkeley.edu	https://www.linkedin.com/in/sara-jangid-62968b2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Client Track Member	IMG_9005 - Sara Jangid.jpg	Hii i’m Sara! I love watching sitcoms, listening to music and playing board/card games.
Jannah Sheriff	Jannah.sheriff@berkeley.edu	https://www.linkedin.com/in/jannahsheriff?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app	Curriculum Member	sf_image_edited - Jannah Sheriff.jpeg	Hi, I’m Jannah! I’m super into the outdoors and sports, and I love to birdwatch and play with my cats. I also love studying history! 
Thomas Culhane	thomasjculhane@berkeley.edu	https://www.linkedin.com/in/tculhane/	President	PXL_20211124_071143180 (1) - Thomas James Culhane.jpg	Hi, I'm Thomas, a CS/Linguistics student from New Jersey! In my spare time, you can find me making bad jokes, eating too much cheese, or trying to talk like Tony Soprano.
Kate Chu	kate_chu@berkeley.edu	linkedin.com/in/kate-chu-37ab59327	Curriculum Member	IMG_5267 - Kate Chu.heic	Hi, I'm Kate! I love spending time in nature, both listening to and making music, and trying new coffee shops!
Tanya Agrawal	tanya.agrawal@berkeley.edu	www.linkedin.com/in/tanya-agrawal-2b58b5214	Client Track Member	IMG_1622 - Tanya Agrawal.jpeg	Hi, I’m Tanya! I enjoy reading, watching sitcoms, solving puzzles and hiking!
Brittney Chan	brittneychan@berkeley.edu	https://www.linkedin.com/in/brittney-chan/	Client Track Member	Brittney - Brittney Chan.JPG	Hi! I'm Brittney! I love love love cats, eating, and any spicy!
Kevin Chandra	kepin@berkeley.edu	www.linkedin.com/in/kevin-chandraa	External Vice President	DSC05496 - Kevin Chandra.jpg	Hi I'm Kevin! I love playing badminton, basketball, scrolling through TikTok, going on spontaneous trips, and going to the gym (I bench 135 🫣).
Boris Tomov	boristomov@berkeley.edu	https://www.linkedin.com/in/boris-tomov-b45a53238/	Internal Vice President	IMG_20230314_221740 - Boris Boyanov Tomov.jpg	Hello, hello! I am a third year CS & DS enthusiast from Bulgaria. I am passionate about playing the guitar, swimming and any sort of outdoor adventures!
Esha Puri	eshapuri@berkeley.edu	https://www.linkedin.com/in/esha-puri	Senior Advisor	7614A71B-2FB2-4F77-AFAF-FF31F3608E8E - Esha Puri.jpg	Hi, I’m Esha! I love exploring cafes around Berkeley and spending time with friends.,
Dhruv Chowdhary	dhruvchowdhary@berkeley.edu	https://www.linkedin.com/in/dhruv-chowdhary/	Senior Advisor	IMG_7842_Original - Dhruv Chowdhary.jpg	Hi, I'm Dhruv! I'm studying CS and DS, and I love playing pickleball, eating croutons, and exploring!
Shivan Patel	shivanpatel@berkeley.edu	www.linkedin.com/in/shivan-patel	Senior Advisor	DSC_8739 - Shivan Rahil Patel.jpg	hi, I'm Shivan! I love cats, sushi, and napping -- in no particular order :)
Sophie Tau	sophietau6@berkeley.edu	https://www.linkedin.com/in/sophie-tau-419350279/	Recruitment Chair	IMG_9456 - Sophie Tau.HEIC	hi i'm sophie and i love morning runs, freshroll and JPEGMAFIA  
Neha Haresh	neha.haresh@berkeley.edu	www.linkedin.com/in/neha-haresh	Curriculum Chair	IMG_0122 3 - Neha Haresh.HEIC	hii, i'm neha! i'm studying cs+cog sci n i love cats, concert dates, and playing badminton :)
`;

FOLDER_NAME = "fa24team"

function shuffle(arr) {
  ct = arr.length;
  while (ct) {
    b = (Math.random() * ct--) | 0;
    d = arr[ct];
    arr[ct] = arr[b];
    arr[b] = d;
  }
}

const officer_names = [
  "Thomas Culhane",
  "Boris Tomov",
  "Kevin Chandra",
  "Alex Pease",
  "Neha Haresh",
  "Sophia Sung",
  "Jun Hyung Lee",
  "Cameron Leung",
  "Nirali Shah",
  "Sophie Tau",
  "Nathan Kim",
  "Nazar Ospanov",
  "Yixin Huang",
  "Alex Luu",
  "Emi Sakamoto",
  "Miranda Zhu",
  "Kelly Tang",
  "Richard Villagomez",
  "Garima Upadhyay",
  "Johan Ko"
];

exec_data = []
leadership_data = []
team_data = []

data_strings = data_multiline_string.split("\n")
for (const data_string of data_strings) {
  split_data = data_string.split("\t");
  if(split_data.length != 6) {
    continue;
  }
  if (split_data[4].includes(".heic") || split_data[4].includes(".HEIC")) {
    split_data[4] = split_data[4]
      .replace(".heic", ".jpg")
      .replace(".HEIC", ".jpg")
      .replaceAll(" ", "_");
  }
  split_data[4] = split_data[4].replace(".jpeg", ".jpg").replace(".JPG", ".jpg").replace(".PNG", ".png")

  if (officer_names.includes(split_data[0])) {
    if(split_data[3].includes("President")) {
      exec_data.push(split_data)
    } else {
      leadership_data.push(split_data);
    }
  } else {
    team_data.push(split_data);
  }
}

orderFunc = (a, b) => officer_names.indexOf(a[0]) - officer_names.indexOf(b[0])

//shuffle(exec_data);
exec_data.sort(orderFunc);

shuffle(leadership_data);
//leadership_data.sort(orderFunc);

shuffle(team_data);
//team_data.sort(orderFunc);

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
      face_element.setAttribute("src", "images/" + FOLDER_NAME + "/" + img_src);
      bio_element.innerHTML = bio;
      linkedin_element.setAttribute("href", linkedin);
      email_element.setAttribute("href", email);

      node.appendChild(card_element);
    } else {
      console.error("Malformed card data: " + data);
    }
  }
}

populate_row_with_cards(document.getElementById("about-exec-row"), exec_data);
populate_row_with_cards(document.getElementById("about-officer-row"), leadership_data);
populate_row_with_cards(document.getElementById("about-team-row"), team_data);
