$(document).ready(function(){

  var userLang = navigator.language || navigator.userLanguage;
  var lang = $('html').attr('lang');

  if( userLang == "es-ES" || userLang == "es" || userLang == "ES"){
    if (lang !== "es"){
      window.location.href = '/es';
    }
  }
});
