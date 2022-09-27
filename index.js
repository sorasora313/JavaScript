window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("lists")
  const pullDownParents = this.document.getElementById("pull-down")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('click', function() {
  
    if (pullDownParents.getAttribute("style") == "display:block;") {
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
    }
  })
  pullDownChild.forEach(function(list) {
    list.addEventListener('click', function(){
      console.log(list)
    })
  })
})