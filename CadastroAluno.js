function showAll() {
	var myForm = document.forms["formulario"];

	document.getElementById("campos").innerHTML = "Alunos";

	document.getElementById("show_nome").innerHTML = "Nome: " + myForm["firstName"].value;

	document.getElementById("show_ra").innerHTML = "RA: " + myForm["ra"].value;

	document.getElementById("show_idade").innerHTML = "Idade: " + myForm["age"].value;

	document.getElementById("show_tel").innerHTML = "Telefone: " + myForm["tel"].value;

	document.getElementById("show_end").innerHTML = "Endereço: " + myForm["end"].value;

	document.getElementById("show_email").innerHTML = "E-Mail: " + myForm["email"].value;


	// Verifica radioButtons:
	var radios = myForm["sexo"];
	if (radios[0].checked) {
		document.getElementById("show_sexo").innerHTML = "Sexo: Masculino";
	}
	else {
		if (radios[1].checked) {
			document.getElementById("show_sexo").innerHTML = "Sexo: Feminino";
		}
		else {
			document.getElementById("show_sexo").innerHTML = "Sexo: Não definido";
		}
	}
	return false;
}
