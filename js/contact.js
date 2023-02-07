jQuery("#formc").validate({
  rules: {
    name: {
      required: true,
      minlength: 3,
    },
    email: {
      email: "Please enter valid email",
      required: true,
    },
    subtext: {
      required: true,
      minlength: 8,
    },

    messtext: {
      required: true,
      minlength: 10,
    },
  },

  messages: {
    required: "Required input",
    minlength: "Please, at least {0} characters are necessary",
  },

  submitHandler : function(form){
    form.submit();
  }
});

