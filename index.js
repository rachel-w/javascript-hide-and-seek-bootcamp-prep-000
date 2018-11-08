function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
    return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

    for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children

      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
}

function deepestChild(){
  var grandNode = document.querySelector('#grand-node');
    var deepestNode = grandNode.children[0];
    for (var i = 0; !deepestNode.children[i]; i) {
      deepestNode = deepestNode.children[0]
    }
    return deepestNode;
}
