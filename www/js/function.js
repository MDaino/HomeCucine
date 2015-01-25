 function checkLanguage() {
      navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
      );
    }
//per sapere in che lingua è impostato il dispositivo
