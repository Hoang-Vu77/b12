    // The DOM element you wish to replace with Tagify
    var input = document.querySelector('input[name=tags]');

    // initialize Tagify on the above input node reference
    new Tagify(input)
  
  // get the Tagify instance assigned for this jQuery input object 
   // so its methods could be accessed
  var jqTagify = $input.data('tagify');
  
  // bind the "click" event on the "remove all tags" button
  $('.tags-jquery--removeAllBtn').on('click', jqTagify.removeAllTags.bind(jqTagify))