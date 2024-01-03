function adjustVerticalLines() {
  // Get all the timeline rows
  var timelineRows = document.querySelectorAll(".timeline-row");

  // Loop through each row
  timelineRows.forEach((row) => {
    // Find the vertical line in this row
    var verticalLine = row.querySelector(".vertical-line");

    // Find the paragraph within the 'text-start' class in the same row
    var textStartParagraph = row.querySelector(".text-start");

    var date = row.querySelector(".timeline-date");

    if (verticalLine && textStartParagraph) {
      // Reset the height of the vertical line to its default or initial state
      verticalLine.style.height = `${0}px`;

      // Get the current height of the paragraph
      var paragraphHeight = textStartParagraph.offsetHeight;
      var dateHeight = date.offsetHeight;
      console.log(dateHeight);

      // Set the new height of the vertical line
      verticalLine.style.height = `${
        0.0045 * paragraphHeight * paragraphHeight + 29 - dateHeight * 0.8
        // 0.5*paragraphHeight
      }px`;
    }
  });
}

// Call the function when the window loads and when it's resized
// window.onloadstart = adjustVerticalLines;
window.onmousemove = adjustVerticalLines;
// window.onscroll = adjustVerticalLines;
window.onresize = adjustVerticalLines;
