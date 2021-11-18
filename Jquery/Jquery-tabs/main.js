$( function() {
    $( "#tabs" ).tabs({
        active: function( event, ui ) {
            var selected = $("#tabs").tabs("option", "selected");
        },
        active: 1
    });
    
  } );