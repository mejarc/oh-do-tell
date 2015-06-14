$(function(){
  'use strict';
  // polyfill for older browsers that don't support
  // modern form input types
  var inputForm = document.forms[0];

  // H5F.setup(inputForm, {
  //   requiredClass: 'required',
  //   placeholderClass: 'placeholder'
  // });

  $(inputForm).validator().on('submit', function(e){
    if (e.isDefaultPrevented()){
      $('#errorAlert').show();
    }
    else {
      $('#successAlert').show();
      e.preventDefault();
    }
  });
});