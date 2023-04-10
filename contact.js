var studentsTab = document.getElementById('student');
studentsTab.addEventListener("click", studentClicked);
var nonprofitTab = document.getElementById('nonprofit');
nonprofitTab.addEventListener("click", nonprofitClicked);

var studentContactForm = document.getElementById('studentForm');
var nonprofitContactForm = document.getElementById('contactForm');

nonprofitContactForm.style.display = "none";

function studentClicked(){
    studentsTab.style.backgroundColor = "#A7D6D0"
    nonprofitTab.style.backgroundColor = "#D8F2EF"
    nonprofitContactForm.style.display = "none"
    studentContactForm.style.display = "block"
}

function nonprofitClicked(){
    studentsTab.style.backgroundColor = "#D8F2EF"
    nonprofitTab.style.backgroundColor = "#A7D6D0"
    nonprofitContactForm.style.display = "block"
    studentContactForm.style.display = "none"
}


/*var studentsTab = document.getElementById('tab');
studentsTab.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'salmon';
});*/



/*const orgTab = document.getElementById('tab.organization');
studentsTab.addEventListener('click', function onClick(event) {
    var selectedClass = 'is-tab-selected';
    orgTab.removeClass(selectedClass);
    event.target.addClass(selectedClass);
});*/

/*var $tabs = $('.tabs .tab');

$tabs.click(function(event) {
  var selectedClass = 'is-tab-selected';
  $tabs.removeClass(selectedClass);
  $(event.target).addClass(selectedClass);
});*/

