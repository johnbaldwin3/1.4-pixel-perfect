// used knowledge from Team Treehouse, looked up idea in google - saw this:
//http://stackoverflow.com/questions/6910049/on-a-css-hover-event-can-i-change-another-divs-styling
//because I couldn't figure how to link these two events without a function to help...
$(function() {
  $('.read-comments').hover(function() {
    // console.log("selected");
    $('.fa-comment').css('background-color', '#083452');
  }, function() {
    $('.fa-comment').css('background-color', '');
  });
});

$(function() {
  $('.read-later').hover(function() {
    // console.log("selected");
    $('.fa-cloud-download').css('background-color', '#083452');
  }, function() {
    $('.fa-cloud-download').css('background-color', '');
  });
});

$(function() {
  $('.share-post').hover(function() {
    // console.log("selected");
    $('.fa-share-square-o').css('background-color', '#083452');
  }, function() {
    $('.fa-share-square-o').css('background-color', '');
  });
});
