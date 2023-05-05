function skillsMember() {
  // 1. Get the data from the API
  $.ajax({
    url: 'https://skillsapi.azurewebsites.net/api/member',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      // 2. Loop through the data
      var output = '';
      for (var i in data) {
        output += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
        output += '<div class="member">';
        output += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">';
        output += '<img class="img-responsive" src="images/' + data[i].image + '" alt="" />';
        output += '</div>';
        output += '<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">';
        output += '<h3>' + data[i].name + '</h3>';
        output += '<h4>' + data[i].title + '</h4>';
        output += '<p>' + data[i].description + '</p>';
        output += '<div class="social">';
        output += '<a href="' + data[i].facebook + '" target="_blank"><i class="fa fa-facebook"></i></a>';
        output += '<a href="' + data[i].twitter + '" target="_blank"><i class="fa fa-twitter"></i></a>';
        output += '<a href="' + data[i].linkedin + '" target="_blank"><i class="fa fa-linkedin"></i></a>';
        output += '</div>';
        output += '</div>';
        output += '<div class="clearfix"></div>';
        output += '</div>';
        output += '</div>';
      }
      // 3. Inject the data into the page
      $('#member').html(output);
    },
    error: function (error) {
      console.log(error);
    }
  });
}