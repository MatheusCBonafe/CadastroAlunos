var studentArray = new Array();

class Aluno {

  constructor(name, ra, sex, age, end, tel, email) {
    this.name = name;
    this.ra = ra;
    this.sex = sex;
    this.age = age;
    this.end = end;
    this.tel = tel;
    this.email = email;
  }

}

function clearFields(){
  var field1 = document.getElementById("name");
  var field2 = document.getElementById("ra");
  var field3 = document.getElementById("sex");
  var field4 = document.getElementById("age");
  var field5 = document.getElementById("end");
  var field6 = document.getElementById("tel");
  var field7 = document.getElementById("email");

  field1.value = "";
  field2.value = "";
  field3.value = "";
  field4.value = "";
  field5.value = "";
  field6.value = "";
  field7.value = "";
}


function registerStudent(name, ra, sex, age, end, tel, email) {

  var name = document.getElementById("name");
  var ra = document.getElementById("ra");
  var sex = document.getElementById("sex");
  var age = document.getElementById("age");
  var end = document.getElementById("end");
  var tel = document.getElementById("tel");
  var email = document.getElementById("email");

  var student = new Aluno(name, ra, sex, age, end, tel, email);

  studentArray.push(student);

  clearFields();
}

function showStudents() {
}
