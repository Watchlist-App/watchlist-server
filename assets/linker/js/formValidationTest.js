$('#confirmation, #password').change(function(){
  var pass = $('#password').get(0).value;
  var conf = $('#confirmation').get(0).value;
  if (pass == conf){
    $('.btn').removeClass('btn-danger').addClass('btn-success').prop('disabled', false);
    $('.form-group').removeClass('has-error').addClass('has-success');
  } else{
    $('.form-group').removeClass('has-success').addClass('has-error');
    $('.btn').removeClass('btn-success').addClass('btn-danger').prop('disabled', true);
  }
});