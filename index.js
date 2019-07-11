function preventRefreshOnSubmit() {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
  let employeeInfo = retrieveEmployeeInformation()
  document.querySelector('ul.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeInfo}</li>`)
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener(
    'click',
    function (e) {
      addNewElementAsLi()
      document.querySelector('input').value = ""
    }
  )
}


function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function (e) {
    ul.innerHTML = ''
  })
}