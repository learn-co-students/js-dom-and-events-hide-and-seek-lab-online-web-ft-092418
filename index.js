const getFirstSelector = selector => document.querySelector(selector);

const nestedTarget = () => document.querySelector('#nested .target');

const deepestChild = () => {
  let node = document.getElementById('grand-node');  
  let child = node.children[0];

  while (child) {
    node = child;
    child = node.children[0];
  }
  return node;
}

const increaseRankBy = n => {
  const lists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lists.length; i++) {
    let list = lists[i].children

    for (let j = 0; j < list.length; j++) {
      list[j].innerHTML = parseInt(list[j].innerHTML) + n
    }
  }
}