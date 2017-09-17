function getFirstSelector(selector) {
  var id = document.querySelector(selector);
  return id;
}

function nestedTarget(target) {
  var id = document.getElementById('nested').querySelector('.target')
  return id;
}

function deepestChild(child) {
  var id = document.getElementById('grand-node').querySelectorAll('div');
  console.log(id);
  return id [id.length-1];
}



function increaseRankBy(n){
 var li = document.querySelectorAll('ul.ranked-list li');
 for (var i=0; i < li.length; i++){
   var temp = li[i].innerHTML;
   var rank = parseInt(temp, 10);
   li[i].innerHTML = rank + n;
 }
 }