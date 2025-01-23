/*

Instructions for adding new semesters:

Add another entry into the project_data dictionary with the semester name as the key and an array as the value
    e.g. add "Fall 2024": []

For each project, add a sublist. Each list is of the form:
    [Project Name, Image URL 1, Image URL 2, Image URL 3, Description]
    Each entry is a string. Do not include the url() css command.

Make sure there are commas between each semester entry and each project sublist.

*/


project_data = {
  /*"Spring 2025": [

  ],
  "Fall 2024": [
    [
        "The Bread Project",
        "tbp1.jpg",
        "tbp2.jpg",
        "tbp3.jpg",
        "The Bread Project is a non-profit organization that aims to train low/no-income Californians the skills needed to start a career in the food industry. To help them improve outreach, we designed and implemented a new website that allowed their staff to easily make updates. This new website will boost user engagement, allowing for more applicants and volunteers."
    ],
    [ 
        "SNAPKids",
        "snap1.png",
        "snap2.jpg",
        "snap3.jpg",
        ""
    ],
    [ 
        "Think of Us",
        "tou1.jpg",
        "tou2.jpg",
        "tou3.jpg",
        ""
    ],
    [ 
        "Career Pathway Institute",
        "cpi1.jpg",
        "cpi2.jpg",
        "cpi3.jpg",
        ""
    ],
    [ 
        "Daly City Youth Health Center",
        "dcyhc1.jpg",
        "dcyhc2.jpg",
        "dcyhc3.jpg",
        ""
    ],
    [ 
        "Berkeley Art Center",
        "bac1.jpg",
        "bac2.jpg",
        "bac3.jpg",
        "Berkeley Art Center supports and showcases Bay Area artists through accessible exhibitions, events, and programs, while promoting equity, inclusivity, and social change through art. We are automating the updating of their Member Artist Directory and newsletter platform, and updating their front-end design to maximize their reach."
    ]
  ],
  "Spring 2024": [
    [ 
        "Linens and Love",
        "lal1.jpg",
        "lal2.jpg",
        "lal3.jpg",
        "description"
    ],
    [ 
        "Plastic Ocean Project",
        "pop1.jpg",
        "pop2.jpg",
        "pop3.jpg",
        "The Plastic Ocean Project is a nonprofit organization focused on removing pollution from the ocean. We created a website for the Plastic Ocean Project's new documentary, 356, about the effects of plastics had on killing a baby whale. They are still working on getting the documentary finished up, but when they do our website will serve as a space for their trailer, credits, and any announcements or release information."
    ],
    [ 
        "Golden Gate Bird Alliance",
        "ggba1.jpg",
        "ggba2.jpg",
        "ggba3.jpg",
        "description"
    ],
    [ 
        "Berkeley Free Clinic",
        "bfc1.jpg",
        "bfc2.jpg",
        "bfc3.jpg",
        "description"
    ],
    [ 
        "Undergraduate Street Medicine Outreach",
        "usmo1.jpg",
        "usmo2.jpg",
        "usmo3.jpg",
        "description"
    ],
    [ 
        "Guide Dogs for the Blind",
        "gdfb1.jpg",
        "gdfb2.jpg",
        "gdfb3.jpg",
        "description"
    ]

  ],*/
  "Fall 2023": [
    [
      "BABEC",
      "babec1.jpg",
      "babec2.png",
      "babec3.png",
      "BABEC is a Bay Area-based nonprofit focused on providing lab equipment and biotech curricula to schools all around the country. We helped them rebuild a website and database to track and display student-gathered data from their Wolbachia PCR lesson.",
    ],
    [
      "Beat The Streets",
      "beatthestreets1.jpg",
      "beatthestreets2.jpg",
      "beatthestreets3.jpg",
      "Beat The Streets is a non-profit organization created to guide and motivate youth people to achieve personal goals and find success in their professional life. In order to help their cause, we developed a web platform for mental health assessment, which will be essential in bridging the communication gap between incoming members and their mentors.",
    ],
    [
      "Strength ’N Me",
      "snm1.png",
      "snm2.png",
      "snm3.png",
      "Strength ’N Me Community Project, located in the Bay Area, provides essential items like clothing, food, and toiletries for free to families in need and the unhoused. Our work included a comprehensive redesign of their logo and the creation of their website, focusing on functionality and usability to effectively connect with their intended audience.",
    ],
    [
      "Artist Magnet",
      "am1.png",
      "am2.png",
      "am3.jpg",
      "Artist Magnet is a web service that provides resume-building and social media tools to artists of all stripes, connecting them to each other and to local opportunities. We provided much-needed technical fixes and a sleek, cohesive design upgrade to hopefully expand the site's reach and efficacy.",
    ],
  ],
  "Spring 2023": [
    [
      "MESA",
      "mesa1.png",
      "mesa2.png",
      "mesa3.png",
      "Year-round, MESA sponsors international trainees (“Stewards”) to learn and share sustainable agriculture practices with U.S. Host mentors. MESA matches Stewards with suitable U.S. hosts to create unique experiences. To help with this application matchmaking process, we built and integrated two features: an interview scheduler and a steward-host express interest option.",
    ],
    [
      "OneSky",
      "onesky1.jpg",
      "onesky2.jpg",
      "onesky3.jpg",
      "OneSky is an international nonprofit that envisions a world where every young child has access to quality care and education. OneSky partners with communities and caregivers to provide nurturing responsive care and early education that unlocks the vast hidden potential in our world’s vulnerable children. We redesigned and updated their website to improve overall usability  and navigation.",
    ],
    [
      "SF Symphony Youth Orchestra",
      "sfsyo1.png",
      "sfsyo2.png",
      "sfsyo3.png",
      "The SFSYO provides pre-professional training to Bay Area’s most talented young musicians free of cost. The ensemble has toured around the world, from Berlin’s Philharmonie to Amsterdam’s Concertgebouw. We assisted them by building an internal platform for rehearsal and concert calendars, video audition submissions, and orchestra policies.",
    ],
  ],
};


var tl_contents = $('.tl-content').toArray();
var tl_sections = $('.tl-section').toArray();

function hoverSection(hover_index) {
    old_index = tl_contents[hover_index].getAttribute("hover_index")
    if(old_index != hover_index) {
        let W = 0.65
        let offset = 0.5
        for ( i = 0; i < 4; i++ ) {
            tl_contents[i].setAttribute("hover_index", hover_index)
            if(i == hover_index) {
                tl_contents[i].style.left = (1 + offset) * -100 * W * i / (5+W) + "%";
            } else if(i <= hover_index) {
                tl_contents[i].style.left = -100*W*i/(5+W) + "%";
            } else {
                tl_contents[i].style.left = 100*((5-i)*W/(5 + W)) + "%"
            }
        }
    }
}

function leaveSection(hover_index) {
    old_index = tl_contents[hover_index].getAttribute("hover_index")
    if(old_index != null) {
        for ( i = 0; i < 4; i++ ) {
            tl_contents[i].setAttribute("hover_index", null);
            tl_contents[i].style.left = 0;
        }
    }
}

for ( i = 0; i < 5; i++ ) {
    ((i) => {
        tl_contents[i].setAttribute("hover_index", null)
        tl_sections[i].addEventListener("mouseover", () => hoverSection(i))
        tl_sections[i].addEventListener("mouseleave", () => leaveSection(i))
    })(i)
}

$(document).ready(function(){
    $('.carousel').carousel("cycle");
});

function make(tag, classes, children) {
    var node = document.createElement(tag);
    if(classes) {
        node.setAttribute("class", classes)
    }
    if(children) {
        for(const child of children) {
            node.appendChild(child)
        }
    }
    return node
}

/*

CAROUSEL ITEM TEMPLATE

<div class="carousel-item">
    <div class="proj-item-left">
        <h1> [Project Name] </h1>
        <p>
            [Project Description]
        </p>
    </div>
    <div class="proj-item-right">
        <div class="proj-item-bkg-blob">
            
        </div>
        <div class="proj-item-img1">
        </div>
        <div class="proj-item-img2">
            
        </div>
        <div class="proj-item-img3">
            
        </div>
    </div>
</div>

*/

project_item_template = make("div", "carousel-item", [
    make("div", "proj-item-left", [
        make("h1"),
        make("p")
    ]),
    make("div", "proj-item-right", [
        make("div", "proj-item-bkg-blob"),
        make("div", "proj-item-img1"),
        make("div", "proj-item-img2"),
        make("div", "proj-item-img3")
    ])

])

function make_project_item(project_data, semester) {
    console.log(semester)
    element = project_item_template.cloneNode(true);
    let left = element.getElementsByClassName("proj-item-left")[0]
    left.children[0].innerHTML = project_data[0]
    left.children[1].innerHTML = project_data[4]
    let right = element.getElementsByClassName("proj-item-right")[0]
    let shortSemester = semester.slice(0, 2) + semester.slice(-2)
    let prefix = "images/projects/" + shortSemester.toLowerCase() + "/"
    for (let i = 1; i <= 3; i++) {
        right.children[i].style.backgroundImage = "url('" + prefix + project_data[i] + "')"
        right.children[i].style.backgroundPosition = "center"
    }
    return element
}

/*

Carousel Template

For each semester:

<p class="carousel-title">Spring 2023</p>
<div class="carousel slide" data-ride="carousel" data-pause="false">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#proj-sp23-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#proj-sp23-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#proj-sp23-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        
        PROJECT ITEMS

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#proj-sp23-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#proj-sp23-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
*/

var carousel_template_element = make("div", "carousel slide", [
    make("div", "carousel-indicators", []),
    make("div", "carousel-inner"),
    make("button", "carousel-control-prev needsTarget", [
        make("span", "carousel-control-prev-icon"),
        make("span", "visually-hidden")
    ]),
    make("button", "carousel-control-next needsTarget", [
        make("span", "carousel-control-next-icon"),
        make("span", "visually-hidden")
    ])
]);

carousel_template_element.setAttribute("data-ride", "carousel");
carousel_template_element.setAttribute("data-pause", "false");

let prev = carousel_template_element.getElementsByClassName("carousel-control-prev")[0];
prev.setAttribute("type", "button");
prev.setAttribute("data-bs-slide", "prev");
prev.children[0].setAttribute("aria-hidden", "true");
prev.children[1].innerHTML = "Previous";
let next = carousel_template_element.getElementsByClassName("carousel-control-next")[0];
next.setAttribute("type", "button");
next.setAttribute("data-bs-slide", "next");
next.children[0].setAttribute("aria-hidden", "true");
next.children[1].innerHTML = "Next";

var idNum = 0;

function make_semester_carousel(semester_data, semester) {
    carousel = carousel_template_element.cloneNode(true);

    carousel_id = "proj-carousel-" + idNum;
    idNum++;

    carousel.id = carousel_id;

    inner = carousel.getElementsByClassName("carousel-inner")[0];
    for(proj of semester_data) {
        inner.appendChild(make_project_item(proj, semester))
    }
    inner.children[0].className += " active"

    indicators = carousel.getElementsByClassName("carousel-indicators")[0];
    for(i = 0; i < semester_data.length; i++) {
        indicator = make("button", "needsTarget");
        if(i == 0)
        indicator.setAttribute("type", "button");
        indicator.setAttribute("data-bs-slide-to", i);
        indicator.setAttribute("aria-label", "Slide " + i);
        if(i == 0) {
            indicator.setAttribute("aria-current", "true");
            indicator.className += " active"
        }
        indicators.appendChild(indicator);
    }
    make("button", "active needsTarget"),
    make("button", "needsTarget"),
    make("button", "needsTarget")


    allNeedsTarget = carousel.getElementsByClassName("needsTarget")
    for(elem of allNeedsTarget) {
        elem.setAttribute("data-bs-target", "#" + carousel_id)
    }

    return carousel;
}

carousels_section = document.getElementById("proj-carousels-section")
for(var semester in project_data) {
    console.log(semester)
    semester_data = project_data[semester]
    title_text = make("p", "carousel-title hidden-fast")
    title_text.innerHTML = semester
    carousels_section.appendChild(title_text)
    carousels_section.appendChild(make_semester_carousel(semester_data, semester))
}