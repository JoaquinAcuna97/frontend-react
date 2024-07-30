//con var se pueden redefinir las variables
var var1 = 3;
var var1 = 4;
console.log(var1);

//se pueden usar las variables antes de definirlas, el resultado es indefinido
console.log(var2);
var var2 = 1;
console.log(var2);

//var mantiene el alcance al scope de la function
function alcanceVar() {
    var var3 = 3;
    console.log(var3, "dentro");
}
alcanceVar();
console.log(var3, "fuera"); //esto no compila porque la variable se mantiene en el scope de la funcion


var var4 = 4
if (var4 == 4) {
    var4 = "cambiado";
    var var5 = 5;
}
//dentro del if se creo var5 y se modifico va