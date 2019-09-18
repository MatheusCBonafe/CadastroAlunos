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
	var myForm = document.forms["formulario"];

	var sex;

	var nome = myForm["firstName"].value;

	var ra = myForm["ra"].value;

	var idade = myForm["age"].value;

	var tel = myForm["tel"].value;

	var end = myForm["end"].value;

	var email = myForm["email"].value;


	var radios = myForm["sex"];
	if (radios[0].checked)
		sex = "Masculino"
		else if (radios[1].checked)
				sex = "Feminino";
		else
			sex = "Não definido";

	var student = new Aluno (nome, ra, sex, idade, tel, end, email)
	arrayAlunos.push(student);
}



function showAll() {
	document.getElementById("alunos").innerHTML = "Alunos";

	document.getElementById('test').innerHTML = JSON.stringify(arrayAlunos, null, 1);


	return false;
}
