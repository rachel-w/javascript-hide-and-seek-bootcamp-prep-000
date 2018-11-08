function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
    return document.getElementById("nested").querySelector(".target")
}

function deepestChild(){
  var li = document.getElementById("grand-node").querySelectorAll("div")
  var child

  for (let i=0; i < li.length; i++){
    child = li[i].querySelector("div")
  }
  return child
}
