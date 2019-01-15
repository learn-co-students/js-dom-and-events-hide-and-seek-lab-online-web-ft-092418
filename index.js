function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const ranked = Array.from(document.getElementsByClassName("ranked-list"))
  console.log(ranked)
  ranked.forEach(function(list) {
    Array.from(list.querySelectorAll("li")).forEach(function(obj){
      let num = parseInt(obj.innerHTML);
      obj.innerHTML = num + n;
    })
  })
}

function deepestChild() {
  // const root = document.getElementById("grand-node");
  // let depth = 0
  // let deepestNode = {node: root, depth: 0};
  // const search = function(searchKey, depth) {
  //   let children = searchKey.children
  //   console.log(children)
  //   let i;
  //   for (i = 0; i < children.length; i++){
  //     let child2 = children[i].children
  //     if (child2.length > 0){
  //       search(children[i], ++depth)
  //       console.log("recursed")
  //     } else{
  //       if (deepestNode.depth < depth){
  //         deepestNode.node = children[i]
  //         console.log("assigned")
  //       }
  //     }
  //   }
  // }
  // search(root);
  // console.log(deepestNode.node)
  // console.log(deepestNode.depth)
  // return deepestNode.node
  const root = document.getElementById("grand-node")
  let child = root.children[0]
  console.log(child)
  console.log(typeof(child) == "object")
  let bool = true;
  while (bool == true){
    if (typeof(child) != "object"){
      bool = false
      break
    }else {
      let newchild = child.children[0]
      if (typeof(newchild) != "object"){
        bool = false
        break
      }else {
        child = newchild;
      }
      console.log(child)
    }
  }

  return child
 }
