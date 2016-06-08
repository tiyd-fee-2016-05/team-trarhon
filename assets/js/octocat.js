

$(function () {

  $('.user-form').on('submit', function (e) {
    e.preventDefault();
    console.log('submit');

    var ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin)
      .done(showUser)
      .fail(showError);
  });

  function showUser(user) {
    show('gh-user-template', user);
  }

  function showError(req, status, err) {
    err = err || {};
    err.message = err.message || status;
    console.log(err);
    show('gh-error-template', { message: err });
  }

  function show(template, model) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    $('#profile').html(fn(model));
  }

});


// $('.snackz').click(function (){
//   var menu = $(this).siblings().toggleClass("activate"); //here i target the class "activate" which then toggles the "display" property and sets it to "block".
//   $("h3").not(menu).removeClass("activate");  // 'not'removes elements from the set of matched elements.
// });




$(function () {

  $('.user-form').on('submit', function (e) {
    e.preventDefault();
    console.log('submit');

    var ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin)
      .done(showUser)
      .fail(showError);
  });

  function showRepo(repo) {
    show('gh-repo-template', repo);
  }

  function showError(req, status, err) {
    err = err || {};
    err.message = err.message || status;
    console.log(err);
    show('gh-error-template', { message: err });
  }

  function show(template, model) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    $('#repo-list').html(fn(model));
  }

});
