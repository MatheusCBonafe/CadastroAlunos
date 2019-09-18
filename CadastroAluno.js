var arrayAlunos = [];

class Aluno {
	constructor(nome, ra, sexo, idade, tel, end, email) {
		this.nome = nome;
		this.ra = ra;
		this.sexo = sexo;
		this.idade = idade;
		this.tel = tel;
		this.end = end;
		this.email = email;
	}

}
function registerStudent() {

	var sexo;

	var radios = myForm["sexo"];

	var nome = document.getElementById("firstName").innerHTML;

	var ra = document.getElementById("ra").innerHTML;

	var idade = document.getElementById("age").innerHTML;

	var tel = document.getElementById("tel").innerHTML;

	var end = document.getElementById("end").innerHTML;

	var email = document.getElementById("email").innerHTML;

	if (radios[0].checked)
		sexo = "Masculino"
		else if (radios[1].checked)
				sexo = "Feminino";
		else
			sexo = "Não definido";



	var student = new Aluno (nome, ra, sexo, idade, tel, end, email)
	arrayAlunos.push(student);
}



function showAll() {

	document.getElementById("campos").innerHTML = "Alunos";

	for (var aux = 0; aux < arrayAlunos.length; aux++) {
		document.getElementById("show_nome").innerHTML = "Nome: " + arrayAlunos[aux].nome;

		document.getElementById("show_ra").innerHTML = 	"RA: " + arrayAlunos[aux].ra;

		document.getElementById("show_sexo").innerHTML = 	"Sexo: " + arrayAlunos[aux].sexo;

		document.getElementById("show_idade").innerHTML = "Idade: " + arrayAlunos[aux].idade;

		document.getElementById("show_tel").innerHTML = "Telefone: " + arrayAlunos[aux].tel;

		document.getElementById("show_end").innerHTML = "Endereço: " + arrayAlunos[aux].end;

		document.getElementById("show_email").innerHTML = "E-Mail: " + arrayAlunos[aux].email;

	}


/*	var myForm = document.forms["formulario"];

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
	return false;*/
}
