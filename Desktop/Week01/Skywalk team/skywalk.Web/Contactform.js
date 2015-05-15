fuction validateContactForm()
{
  var fromwho = document.ContactForm.fromtxt;
  var subject = document.ContactForm.subjecttxt;
  var content = document.ContactForm.contenttxt;

  if(fromwho.value=="")
  {
    alert("Please enter your email address");
    fromwho.focus();
    return false;
  }
  if(fromwho.value.indexof("@",0)<0)
  {
    window.alert("Please enter a valid email address");
    fromwho.focus();
    return false;
  }
  if(fromwho.value.indexof(".",0)<0)
  {
    window.alert("Please enter a valid email address");
    fromwho.focus();
    return false;
  }
  if(content.value=="")
  {
    alert("Please enter the content of the email");
    content.focus();
    return false;
  }
  return true;
}
