$(document).ready(function(){
  $("#paccueil").click(function(){
    $("#CT, #NA, #QS").hide('fast');
  });
  $("#paccueil").click(function(){
    $("#AC").show('slow');
  });
});

$(document).ready(function(){
  $("#paccueil").click(function(){
    $(".page4, .page2, .page3").hide('slow');
  });
  $("#paccueil").click(function(){
    $(".page1").show('slow');
  });
});
$(document).ready(function(){
  $("#pcontact").click(function(){
    $("#AC, #NA, #QS").hide('fast');
  });
  $("#pcontact").click(function(){
    $("#CT").show('slow');
  });
});

$(document).ready(function(){
  $("#pcontact").click(function(){
    $(".page1, .page2, .page3").hide('slow');
  });
  $("#pcontact").click(function(){
    $(".page4").show('slow');
  });
});

$(document).ready(function(){
  $("#paction").click(function(){
    $("#AC, #CT, #QS").hide('fast');
  });
  $("#paction").click(function(){
    $("#NA").show('slow');
  });
});

$(document).ready(function(){
  $("#paction").click(function(){
    $(".page4, .page1, .page3").hide('slow');
  });
  $("#paction").click(function(){
    $(".page2").show('slow');
  });
});

$(document).ready(function(){
  $("#pqsn").click(function(){
    $("#AC, #CT, #NA").removeAttr("style").hide('fast');
  });
  $("#pqsn").click(function(){
    $("#QS").show('slow');
  });
});

$(document).ready(function(){
  $("#pqsn").click(function(){
    $(".page4, .page1, .page2").hide('slow');
  });
  $("#pqsn").click(function(){
    $(".page3").show('slow');
  });
});