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
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]
}
