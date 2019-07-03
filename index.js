function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
  let element = document.createElement('li');
  element.innerHTML=retrieveEmployeeInformation();
  let list=document.querySelector('.employee-list')
  list.appendChild(element);
}


function addNewLiOnClick(){
  document.querySelector('input[type="submit"]').addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener('click', function(event){
    var myNode = document.querySelector('ul')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
  })
}






