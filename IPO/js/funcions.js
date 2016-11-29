// JavaScript Document
$("#mostrar").click(function(){
	"use strict";
	$("#recuperarPassword").toggle("slow");
});

$("#txtEmail").keypress(function(e){
	"use strict";
	if(e.which===13){
		alert("S'ha enviat una password temporal al correu indicat");
		location.reload();
	}
});

$("#registre").click(function(){
	"use strict";
	var incompletes=0;
	if($("#Usuari").val()===""){
		incompletes++;
	}
	if($("#Password").val()===""){
		incompletes++;
	}
	if($("#Nom").val()===""){
		incompletes++;
	}
	if($("#Cognom").val()===""){
		incompletes++;
	}
	if($("#Neixement").val()===""){
		incompletes++;
	}
	if($("#Telefon").val()===""){
		incompletes++;
	}
	if($("#Movil").val()===""){
		incompletes++;
	}
	if($("#Email").val()===""){
		incompletes++;
	}
	if($("#Direccio").val()===""){
		incompletes++;
	}
	if($("#Provincia").val()===""){
		incompletes++;
	}
	if($("#Municipi").val()===""){
		incompletes++;
	}
	
	
	
	if(incompletes===0){
		alert("Usuari registrat amb exit. S'ha enviat un e-mail de confirmació");
		return true;
	}
	else{
		alert("Hi han camps incomplerts");
		return false;
	}
});




$('#dirDefecte').change(function() {
		"use strict";
        if($(this).is(":checked")) {
			$("#direccio").attr("disabled", "disabled");
		}
		else{
			$("#direccio").removeAttr("disabled");
		}
});


$('#pagament').click(function(){
	"use strict";
	var incompletes=0;
	if($("#Nom").val()===""){
		incompletes++;
	}
	if($("#Num").val()===""){
		incompletes++;
	}
	if($("#NumSeg").val()===""){
		incompletes++;
	}
	if($("#caducitat").val()===""){
		incompletes++;
	}
	
	if(incompletes > 0){
		alert("S'han d'omplir tots el camps");
		return false;
	}else{
		alert("Pagament realitzat correctament");
		return true;
		/*$('#pagament').attr("disabled", "disabled");
		$('#progres').show("slow");
		setTimeout(function(){
			alert("Pagament realitzat correctament");
		},3500);*/
	}
});


$("#cercar").click(function(){
	"use strict";
	$("#loading").show();
	setTimeout(function(){
		$("#loading").toggle();		   
	}, 1500);
});

$("#xarxes").click(function(){
	"use strict";
	alert("EL comentari s'ha publicat correctament");
});

$("#entrar").click(function(){
	"use strict";
	if ($("#user").val()==="" || $("#psw").val()===""){
		$("#error").show();
		return false;
	}
	else{
		return true;
	}
});


function carregaModal(id){
	"use strict";
	var producte= "producte"+id;
	$("#modalTitle").html(productes[producte].nom);
	$("#modalDesc").html(productes[producte].resum);
	$("#modalText").html(productes[producte].descripció);
	$("#modalShop").attr('href','pagament.html?id='+id);
	$("#item-display").attr('src', productes[producte].imatge);
	$(".modal-min").attr('src', productes[producte].imatge);
}

$("#modalWish").click(function(){
	"use strict";
	alert("El producte s'ha afegit a la llista de dessitjos correctament");
});