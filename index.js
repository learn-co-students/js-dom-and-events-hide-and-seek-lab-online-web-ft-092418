function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function deepestChild(){
  const mainNode = document.querySelector("div#grand-node");
  let myString = 'div' ;
  while (mainNode.querySelector(myString) != null){
    myString +=' div';
  }
  myString = myString.slice(0 , -4);
  return mainNode.querySelector(myString);
}


function increaseRankBy(n){
  let rankedList = document.querySelectorAll('.ranked-list');
  for (let ii = 0 ; ii < rankedList.length ; ii++){
    let branch = rankedList[ii].children
    for (let jj = 0 ; jj < branch.length ; jj++){
      branch[jj].innerHTML = parseInt(branch[jj].innerHTML) + n
    }
  }

}
