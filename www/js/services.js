 var myservices = angular.module('servicos', []);


myservices.factory('getResult', function($http){
  return function(val1, val2, tipo, done) {
   if(tipo == 'soma'){
	   done(val1+val2);
	}
	if(tipo == 'divisao'){
		done(val1/val2);
	}
	if(tipo == 'multi'){
		done(val1*val2);
	}
	if(tipo == 'subtracao'){
		done(val1/val2);
	}
  };
});