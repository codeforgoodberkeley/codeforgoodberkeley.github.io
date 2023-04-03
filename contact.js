const studentsTab = document.getElementById('tab');
studentsTab.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'salmon';
});

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