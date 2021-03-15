console.log ('Is this working?');

var nb1 = 0, nb2 = 0;

var op = 'null';
var cpt = 0;

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}
function ajouteChiffre(form,val)
{
	form.texte.value += val;
}

function ajoutePoint(form)
{
	if (form.texte.value.length == 0)
	{
		form.texte.value = "0.";
	}
	else 
	{
		var j = 0;
		for (var i=0;i<form.texte.value.length;i++)
		{
			if (form.texte.value.charAt(i) == ".")
			{
				j = 1;
				break;
			}
		}
		(j == 0) ? (form.texte.value += ".") : (alert("D\'éj\340 entr\351."));
	} 
}

function setOp(opType)
{
	if (op == 'null')
	{
		op = opType;
	}
	else
	{
		alert("Vous \352tes d\351j\340 en train de faire une " + op + ".");
		form.texte.value = "";
	}
}

function  eff(form)
{
	form.texte.value = "";
	form.affichage.value = "";
	nb1 = 0, nb2 = 0;
	op = 'null';
	cpt = 0;
}

function store(form)
{
	if ((form.texte.value != "") && (op == 'null') && (cpt == 0)) 
	{
		nb1 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	else if ((form.texte.value != "") && (op != 'null') && (cpt == 1))
	{
		nb2 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	
}


function storeEq(form)
{
	if (cpt == 1)
	{
		store(form);
	}
}


function cal(form)
{
	
	if (cpt < 2)
	{
		alert("Il faut deux nombres pour pouvoir faire un calcul.");
	}
	else
	{
		if (op == "somme")
		{
			form.affichage.value = parseInt(nb1) + parseInt(nb2);
		}
		else if (op == "soustraction")
		{
			form.affichage.value = parseInt(nb1) - parseInt(nb2);
		}
		else if (op == "multiplication")
		{
			form.affichage.value = nb1 * nb2;
		}
		else if (op == "division")
		{
			if (nb2 == 0)
			{
				alert("On ne peut pas diviser par z\351ro.");
			}
			else
			{
				form.affichage.value = nb1 / nb2;
			}
		}
        else if (op == "log")
        {
            form.affichage.value = Math.log(nb2) / Math.log(nb1);
        }
	}
}
