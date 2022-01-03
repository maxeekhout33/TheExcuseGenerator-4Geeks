window.onload = function Excuse() {
	
	let myDog = ['espadachin', 'renacuajo', 'extraterrestre','pitufo'];
	let ate = ['se resvaló en', 'se atravesó en', 'invadió', 'atacó'];
	let myHomework = ['la ciudad', 'el pueblo', 'la calle', 'el baño', 'la casita del perro'];
	let lastnight = ['esta mañana', 'esta tarde', 'a mediodía', 'antes de salir', 'cuando me bañaba'];
	
	let who = myDog[Math.round(Math.random()*(myDog.length-1))];
	let did = ate[Math.round(Math.random()*(ate.length-1))];
	let what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	let when = lastnight[Math.round(Math.random()*(lastnight.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>Disculpa, llegué tarde porque un ' + who + ' ' + did +' '+ what +' '+ when + '.</div>'
	
}