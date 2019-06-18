function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
function retrieveEmployeeInformation(){
  return document.body.querySelector('input').value
}
function addNewElementAsLi(){
  const name = retrieveEmployeeInformation()
  let targetUl = document.querySelector('.employee-list')
  let element = document.createElement('li')
  element.innerHTML = name
  targetUl.appendChild(element)
}
function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  let input = document.querySelector('input[type="text"]')
  submit.addEventListener('click', function(){
    addNewElementAsLi()
    input.value = ''
   })
}
function clearEmployeeListOnLinkClick(){
  let clearLink = document.querySelector('a')
  let employeeList = document.querySelector('ul.employee-list')
  clearLink.addEventListener('click',function(){
    employeeList.innerHTML = ''
  })
}
