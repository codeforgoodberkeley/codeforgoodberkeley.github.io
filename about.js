data_strings = [
    "Abram Tan	abramtan@berkeley.edu	https://www.linkedin.com/in/abramtan	OneSky	photo_2023-03-15 16.24.35 - Abram Jia Han Tan.jpeg	Hey there! I love rock climbing, photography and the outdoors!",
    "Warren Lim	warrenlim_@berkeley.edu	https://www.linkedin.com/in/warren-lim-735605242/	OneSky	IMG_6213 - Warren Lim.JPG	Hey there! I like hanging out with friends, dancing, playing volleyball & basketball, working out, roller coasters, anything really (except coconuts).",
    "Alexander DeRouen	aderouen@berkeley.edu	https://www.linkedin.com/in/alexander-derouen/	SFSYO	20220511_172130_2 - Alexander DeRouen.jpg	hello there, i'm on a journey to make the world a better place while exploring everything life has to offer: from anime, music, and puzzles to building cool stuff, coding, and more.",
    "Kevin Chandra	kepin@berkeley.edu	https://www.linkedin.com/in/kevin-chandraa	MESA	99AE591E-932D-473C-83D8-6C1328EFC26D - Kevin Chandra.jpeg	hi! i love meeting new people, playing sports, seeing LeBron James, and not thinking about bios.",
    "Kelly Tang	ygtang@berkeley.edu	https://www.linkedin.com/in/kelly-tang-ba0149261/	OneSky	IMG_8796 - Kelly Tang.JPG	Hi! I like dancing (Chinese traditional dance, jazz, and tap), mystery movies, traveling, and trying all types of cuisine.  ",
    "Thomas Culhane	thomasjculhane@berkeley.edu	https://www.linkedin.com/in/thomas-culhane-904836231	Internal	PXL_20211124_065937553~2 - Thomas Culhane.jpg	Hi, I'm Thomas! You can find me procrastinating homework by playing games with friends, watching TV, exploring new music, or all of the above!",
    "Alex Pease	alexpease04@berkeley.edu	https://www.linkedin.com/in/alexpease04/	SFSYO	IMG_4016 - Alex Pease.heic	Hi, I'm Alex! I enjoy singing, eating at Crossroads Dining Hall, sleeping, and spending time with friends.",
    "Boris Tomov	boristomov@berkeley.edu	https://www.linkedin.com/in/boris-tomov-b45a53238/	OneSky	IMG_20230314_221740 - Boris Tomov.jpg	Hi there! I am a second year software development enthusiast, passionate about playing the guitar, participating in sport activities and going to music festivals and concerts.",
    "Kristy Chu	kristyc@berkeley.edu	https://www.linkedin.com/in/kristy-chu-769a8b1b3	SFSYO	3411B55A-9378-4EF1-9066-7FD4A3485D8D - Kristy Chu.jpeg	hi i’m Kristy i live laugh CFG and nap. i also like broccoli, playing piano and violin, my dog Zuko, and my rooster Snowball",
    "Esha Puri	eshapuri@berkeley.edu	https://www.linkedin.com/in/esha-puri	OneSky	emilynoellephotography-2970 - Esha Puri.jpg	hi! i like to spend my free time playing tennis, baking, and listening to true crime podcasts ",
    "Dhruv Chowdhary	dhruvchowdhary@berkeley.edu	https://www.linkedin.com/in/dhruv-chowdhary/	Internal	IMG_7842_Original - Dhruv Chowdhary.heic	Hi, I'm Dhruv! I love playing spikeball and eating croutons :)",
    "Joanne Tran 	tranjoanne@berkeley.edu	https://www.linkedin.com/in/tranjoanne/	MESA	IMG_1296 - Joanne Tran.JPG	What's up? I'm Joanne, and in my free time I love going on spontaneous adventures and playing video games like LoL, VALORANT, and Overwatch.",
    "Matteo Keller	matteo.keller@berkeley.edu	https://www.linkedin.com/in/matteokeller/	MESA	MK_Photo - Matteo Keller.png	Hey!! I'm a business student with strong interest in AI technology :) I'm from Switzerland and I enjoy playing golf, the bass guitar, and spending quality time with friends.",
    "Tanya Agrawal	tanya.agrawal@berkeley.edu	 	SFSYO	profile pic - Tanya Agrawal.jpg	Hi! I enjoy reading, drawing, trying out new food places, and exploring places in and around Berkeley!",
    "Buvi Vinothasha 	buvinnash@berkeley.edu	https://www.linkedin.com/in/buvinnash	SFSYO	CFGpic - Buvi Vinothasha.jpg	Hey everyone, my name is Buvi. I love playing tennis, trying new food, travelling, and hanging out with friends.",
    "Pranitha Rao	pranitha_rao@berkeley.edu	linkedin.com/in/pranitha-r-3129541b0	Internal	IMG_2462 - Pranitha Rao.JPG	hi i'm Pranitha! in my free time i like watching basketball, crocheting, and cooking :) ",
    "Nazar Ospanov	aimogenius@berkeley.edu	https://www.linkedin.com/in/nazar-ospanov-860694205	Internal	EBD2251B-EA25-43E9-9E73-194D99029670 - Nazar Ospanov.jpeg	Hi, I’m Nazar, and I like getting absolutely obliterated by every CS midterm and getting over this pain by playing lots of video games🥶🥶",
    "Yixin Huang	yixinhuang1@berkeley.edu 	https://www.linkedin.com/in/yixin-huang-91b7781aa/	SFSYO	IMG_0849 - Yixin Huang.HEIC	Hi! I enjoy running as well as playing ping pong. ",
    "Kay Wee Tan	kay_wee@berkeley.edu	https://www.linkedin.com/in/kay-wee-tan/	Internal	photo_2023-04-17_09-42-35 - Tan Kay Wee.jpg	hi! i like rock climbing, skating, and playing the guitar/piano! i also really love boba tea, so hmu if you're a fellow boba tea lover :)",
    "Shivan Patel	shivanpatel@berkeley.edu	www.linkedin.com/in/shivan-patel	OneSky	IMG_0015 - Code For Good.HEIC	hi, I'm Shivan! I love cats, sushi, and napping -- in no particular order :)"
]

function shuffle( arr ) { //array,placeholder,placeholder,placeholder
    ct = arr.length;
    while(ct) {
        b = Math.random() * ct-- | 0
        d = arr[ct]
        arr[ct] = arr[b]
        arr[b] = d
    }
}
shuffle(data_strings)

/*

Instructions for adding team member data from the google form:

If not already done, select column G (picture link) of all new entries, right click, and select Smart Chips -> File.
Select and copy the relevant rows for members to add from columns B-G (name to bio).

Paste in a new line inside the data_strings array. (Works best in my VSCode if this is pasted in a line with no indentation)

Add quotation marks onto the beginning and end of each new line and add commas to the ends (except the last element of the list).
    \-> this can be done in VSCode by selecting the start of the lines with Alt + click or Alt + Shift + click, and then getting to the end of the lines by navigating left and one down
Make sure to add a comma to the string before the one(s) you pasted in.

Go to the form's image folder in google drive (can be accessed through the form) and then copy all relevant images into the team_images folder

If applicable, run any HEIC files through this converter:
https://heictojpg.com/
Don't update the file names in the strings, this will be done automatically. 

*/

team_data = []
officer_data = []

const officer_names = ["Dhruv Chowdhary", "Esha Puri", "Kristy Chu", "Shivan Patel"]

for (const data_string of data_strings) {
    split_data = data_string.split('\t')
    if(split_data[4].includes(".heic") || split_data[4].includes(".HEIC")) {
        split_data[4] = split_data[4].replace("\.heic", ".jpg").replace("\.HEIC", ".jpg").replaceAll(" ", "_");
    }
    if(officer_names.includes(split_data[0])) {
        officer_data.push(split_data)
    } else {
        team_data.push(split_data)
    }
}

function make(tag, classes, children) {
    var node = document.createElement(tag);
    node.setAttribute("class", classes)
    if(children) {
        for(const child of children) {
            node.appendChild(child)
        }
    }
    return node
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
            make("div", "card-face-holder", [
                make("img", "card-face")
            ]),
            make("div", "card-title", [
                make("p", "card-title-text")
            ])
        ]),
        make("div", "card-back", [
            make("p", "card-bio"),
            make("a", "card-link-li card-link"),
            make("a", "card-link-em card-link")
        ])
    ])
])

function populate_row_with_cards(node, card_data) {
    for (const data of card_data) {
        if(data.length == 6) {
            let name = data[0]
            let title = data[3]
            let img_src = data[4]
            let bio = data[5]
            let linkedin = data[2]
            let email = data[1]

            card_element = template_element.cloneNode(true)
            front_text_element = card_element.getElementsByClassName("card-title-text")[0]
            face_element = card_element.getElementsByClassName("card-face")[0]
            bio_element = card_element.getElementsByClassName("card-bio")[0]
            linkedin_element = card_element.getElementsByClassName("card-link-li")[0]
            email_element = card_element.getElementsByClassName("card-link-em")[0]

            front_text_element.innerHTML = "<b>" + name + "</b> <br>" + title
            face_element.setAttribute("src", "team_images/" + img_src)
            bio_element.innerHTML = bio
            linkedin_element.setAttribute("href", linkedin)
            email_element.setAttribute("href", email)

            node.appendChild(card_element)
        } else {
            console.error("Malformed card data: " + data)
        }
    }
}

populate_row_with_cards(document.getElementById("about-officer-row"), officer_data)
populate_row_with_cards(document.getElementById("about-team-row"), team_data)