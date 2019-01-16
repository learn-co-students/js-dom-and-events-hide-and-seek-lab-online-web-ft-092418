function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div.target')
}

function deepestChild(){
  return document.querySelector(`div#grand-node div div div div`)
}

function increaseRankBy(n){
  let list = [...document.querySelectorAll('ul.ranked-list li')]
  list.forEach(li => { li.innerHTML = parseInt(li.innerHTML) + n})
}
