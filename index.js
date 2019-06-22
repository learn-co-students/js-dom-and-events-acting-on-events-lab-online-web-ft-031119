function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value

}

function addNewElementAsLi(){
  let li= document.createElement('li');
  li.innerHTML= retrieveEmployeeInformation();
  let ul= document.querySelector('ul');
  ul.appendChild(li);
}

function addNewLiOnClick(){
  let input= document.querySelector('input[value="Add Employee"]');
  input.addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value= "";
  });
}

function clearEmployeeListOnLinkClick(){
  let button= document.querySelector('a');
  let ul= document.querySelector('ul');

  button.addEventListener('click', function(e){
    while(ul.firstChild){
      ul.removeChild(ul.firstChild);
    }
  });
}
