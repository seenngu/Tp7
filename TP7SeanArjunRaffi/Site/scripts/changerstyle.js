// Éléments
var elem = document.getElementById('change');
var glo = document.getElementById('global');
var cop = document.getElementById('copyright');
var pie = cop.parentNode;
var sec = document.getElementById('secondaire');
var cbi = document.getElementById('centre-bis');
var pri = document.getElementById('principal');

// Ajout d'une evenement sur le clic.
elem.addEventListener('click', function() {
	// Passe d'une style à une autre selon le style disponible + Change texte du menu pour montrer feuille de style disponible + Change lieu de copyright + Inverse secondaire et principal.
	cbi.removeChild(pri);
	cbi.removeChild(sec);
	if (elem.innerHTML == "Change le style du page au modèle 8") {
		cbi.appendChild(pri);
		cbi.appendChild(sec);
		lien.setAttribute('href', 'styles/modele08.css');
		elem.innerHTML = "Change le style du page au modèle 11";
		glo.removeChild(pie);
		sec.appendChild(cop);
	} else {
		cbi.appendChild(sec);
		cbi.appendChild(pri);
		lien.setAttribute('href', 'styles/modele11.css');
		elem.innerHTML = "Change le style du page au modèle 8";
		glo.appendChild(pie);
		pie.appendChild(cop);
	}
}, false);