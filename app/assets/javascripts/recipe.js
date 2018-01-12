$(document).on('turbolinks:load', function() {

  $('#recipe_strain_name').focusout(function(){
    var strainText = $('#recipe_strain_name').val();
    $.ajax({
      url: $('#recipe_strain_name').data('autocomplete-source'),
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
      for (var key in responseData)
      {
        if ( responseData[key].toLowerCase() === strainText.toLowerCase()) {
          $('#strainId').val(key);
        }
      }
    }).fail(function() {
      console.log(`fail to get strains info`)
    })

  })

  $('#recipe_strain_name').autocomplete({
  source: $('#recipe_strain_name').data('autocomplete-source')
});

});

  var now = new Date().getTime();
  var askAt = window.localStorage.getItem('ageVerification');
  if( !askAt || now > parseInt(askAt) ){
    $("#dialog").dialog ({
      draggable: false,
      modal: true,
    dialogClass: "no-close",
    buttons: {
        'Yes': function() {

          var now = new Date().getTime();
          var askAt = now + (24*60*60*1000); // current time + 24 hrs
          window.localStorage.setItem('ageVerification', askAt);
           $("#dialog").dialog("close");
        },
        'No': function() {
            window.location.replace("http://www.google.com"),
            $("#dialog").dialog("close");
        }
      }
    })
    var dialogContent = document.querySelector('.ui-dialog-content')
    console.log(dialogContent);
    dialogContent.innerText = 'Are you over 19 years old?'
  }



function hideConcentrateLink() {
  var addConcentrate = document.querySelector('a#addConcentrate')

  addConcentrate.addEventListener('click', function(e) {
    e.preventDefault();
  })
  addConcentrate.style.display = 'none';
}

function addConcentrateLink() {
  addConcentrate.style.display = 'inline';
}
