var abilitiesValue = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0};
var abilitiesMod = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0};
var abilitiesRacial = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0};

//Generar dropdown

function dropdrownGenerator($scope) {
  $scope.alignment = catalogAlignment;
  $scope.races = catalogRaces;
}

var charRace = $('[name="charRace"]');
//Actualizar los rasgos raciales
  charRace.change( function(){
  	var race = $(this).val().toLowerCase();
  	var raceIndex = "";
  	for (var i = 0; i < catalogRaces.length; i++) {
      	if (catalogRaces[i].raceName == race) {
      		raceIndex = i;
      	}
  	}

  	$('[name="charSize"]').val(catalogRaces[raceIndex].raceSize);
  	$('[name="Speed"]').val(catalogRaces[raceIndex].baseSpeed);

    var raceSizeIndex = "";
    for (var i = 0; i < catalogSize.length; i++) {
        if (catalogSize[i][0] == race) {
          raceSizeIndex = i;
        }
  }

  $('[name$="-size-mod"]').val(catalogSize[raceSizeIndex][2]);
	//AC
});

//Actualizar los modificadores de atributos
$('[name="STR-score"]').change( function () { 
  abilitiesValue[STR] = $(this).val();
  abilitiesMod[STR]	= Math.floor((abilitiesValue[STR]/2)-5) + abilitiesRacial[STR];
  $('[name$="STR-mod"]').val(abilitiesMod[STR]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'STR')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[STR])}
	});
  //grapple
}); 

$('[name="DEX-score"]').change( function () { 
  abilitiesValue[DEX] = $(this).val();
  abilitiesMod[DEX]	= Math.floor((abilitiesValue[DEX]/2)-5);
  $('[name$="DEX-mod"]').val(abilitiesMod[DEX]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'DEX')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[DEX])}
	});
  //armorclass + iniciative + reflex
});

$('[name="CON-score"]').change( function () { 
  abilitiesValue[CON] = $(this).val();
  abilitiesMod[CON]	= Math.floor((abilitiesValue[CON]/2)-5);
  $('[name$="CON-mod"]').val(abilitiesMod[CON]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'CON')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[CON])}
	});
  //fortitude
});

$('[name="INT-score"]').change( function () { 
  abilitiesValue[INT] = $(this).val();
  abilitiesMod[INT]	= Math.floor((abilitiesValue[INT]/2)-5);
  $('[name$="INT-mod"]').val(abilitiesMod[INT]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'INT')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[INT])}
	});
});

$('[name="WIS-score"]').change( function () { 
  abilitiesValue[WIS] = $(this).val();
  abilitiesMod[WIS]	= Math.floor((abilitiesValue[WIS]/2)-5);
  $('[name$="WIS-mod"]').val(abilitiesMod[WIS]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'WIS')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[WIS])}
	});
});

$('[name="CHA-score"]').change( function () { 
  abilitiesValue[CHA] = $(this).val();
  abilitiesMod[CHA]	= Math.floor((abilitiesValue[CHA]/2)-5);
  $('[name$="CHA-mod"]').val(abilitiesMod[CHA]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'CHA')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[CHA])}
	});
});

//AC update
$('[name="CHA-score"]')

