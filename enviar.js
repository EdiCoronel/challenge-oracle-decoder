/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function enviarTexto(){
    var texto = document.getElementById("inputText2").value;
    texto1 = texto.replace("e/gi", "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("inputText").value = texto1;
    inputText2.value = "";
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function enviarTexto1(){
    var texto = document.getElementById("inputText2").value;
    texto2 = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("inputText").value = texto2;
    inputText2.value = "";
}

function copyToClipBoard() {
    var content = document.getElementById("inputText");
    content.select();
    document.execCommand("copy");
    inputText.value = "";
    alert("Copiado al Portapapeles!");
}

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) {
        return true;
    }
    patron = /[a-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}




