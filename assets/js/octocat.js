
//
// $(function () {
//
//   $('.user-form').on('submit', function (e) {
//     e.preventDefault();
//     console.log('submit');
//
//     var ghLogin = $('input[name="gh-login"]').val();
//     $.getJSON('https://api.github.com/users/' + ghLogin)
//       .done(showUser)
//       .fail(showError);
//   });
//
//   function showUser(user) {
//     show('gh-user-template', user);
//   }
//
//   function showError(req, status, err) {
//     err = err || {};
//     err.message = err.message || status;
//     console.log(err);
//     show('gh-error-template', { message: err });
//   }
//
//   function show(template, model) {
//     var fn = _.template($('#' + template).html(), { variable: 'm' });
//     $('#profile').html(fn(model));
//   }
//
// });


$('.contribution').click(function (){
    $('.list-list').toggleClass("breaker");
    console.log("breaker-breaker-1-2")
});




$(function () {

  $('.user-form').on('submit', function (e) {
    e.preventDefault();
    console.log('submit-repo');

    var ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin + "/repos")
      .done(showRepo)
      .fail(showError);
  });

  function showRepo(repo) {
    show('gh-repo-template', repo);
    console.log("progress");
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
