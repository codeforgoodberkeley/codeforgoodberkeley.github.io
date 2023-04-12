$(document).ready(function(){
    //console.log($('.carousel'))
    $('.carousel').carousel("cycle")
});

project_data = {
    "Spring 2023": [
        ["MESA", "Description", "url1", "url2", "url3"]
    ]
};

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
Carousel Template

For each semester:

<div class="carousel slide" data-ride="carousel" data-pause="false">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#proj-sp23-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#proj-sp23-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#proj-sp23-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        
        For each project:

        <div class="carousel-item active">
            <div class="proj-item-left">
                <h1> [ Title ]</h1>
                <p>
                    [ Description ]
                </p>
            </div>
            <div class="proj-item-right">
                <div class="proj-item-bkg-blob"></div>
                <div class="proj-item-img1"></div>
                <div class="proj-item-img2"></div>
                <div class="proj-item-img3"></div>
            </div>
        </div>
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


