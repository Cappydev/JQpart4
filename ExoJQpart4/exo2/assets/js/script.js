$(function(){

  $('#yurAverage').click(function() {

    var noteRegex = /^([0-9]{1,2})([\.,]{1}[0-9]{1,2}){0,1}$/;
    var note1 = parseFloat($('#firstNote').val());
    var note2 = parseFloat($('#secondNote').val());
    var note3 = parseFloat($('#thirdNote').val());
    var note4 = parseFloat($('#fourthNote').val());
    var note5 = parseFloat($('#fifthNote').val());
    if(note1.match(noteRegex) && note2.match(noteRegex))
    var myAverage = (note1 + note2 + note3 + note4 + note5)/5;
    console.log(myAverage);
  if (note1 > 20 || note2 > 20 || note3 > 20 || note4 > 20 || note5 > 20) {
    alert('Impossible d\'avoir une note audessus de 20 tricheur !');
    }
  if (note1 < 0 || note2 < 0 || note3 < 0 || note4 < 0 || note5 < 0) {
    alert('pas de nombre négatif !!!');
    }else if(myAverage < 10 ){
      alert('Appréciation : "En dessous de la moyenne".\nMoyenne : '+myAverage);
    }else if (myAverage >= 10 && myAverage < 13){
      alert('Appréciation :"Moyen".\nMoyenne : '+myAverage);
    }else if (myAverage >= 13 && myAverage < 16){
      alert('Appréciation :"Bien".\nMoyenne : '+myAverage);
    }else if (myAverage >= 16 && myAverage < 20){
      alert('Appréciation :"Très bien".\nMoyenne : '+myAverage);
    }
  else{
      alert('Appréciation :"Excellent."\nMoyenne : '+myAverage);
    }


  });
});
