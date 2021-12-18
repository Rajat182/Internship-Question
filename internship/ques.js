
var score = {
  'p1' : 0,
  'p2' : 0
}
var round_count = 1;
// alert('hello')

function myFunction () {
  document.querySelector('body').style.color = 'red';
  var randomNumber1 = Math.floor(Math.random() * 5) ; //1-6
  var randomNumber2 = Math.floor(Math.random() * 5) ;


  var p1_score = score.p1;
  var p2_score = score.p2;
  var game_id = 'game'+round_count.toString();
  if (randomNumber1 > randomNumber2){
    score.p1 +=1;
    document.getElementById(game_id).innerHTML = "P1 wins";

  }else{
    score.p2 +=1;
    document.getElementById(game_id).innerHTML = "P2 wins";
  }
  round_count +=1;
  document.getElementById("1_score").innerHTML = 'Player 1: '+score.p1;
  document.getElementById("2_score").innerHTML = 'Player 2: '+score.p2;

}
