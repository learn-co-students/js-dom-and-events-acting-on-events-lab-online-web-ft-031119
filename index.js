function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
	return document.querySelector('input').value
};

function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
};

function addNewLiOnClick(){
	document.querySelector('input[type="submit"]').addEventListener('click', function(event){
    addNewElementAsLi()
    clearInputValue()
  })
}

function clearInputValue(){
	document.querySelector('input').value = ""
}

function clearEmployeeListOnLinkClick(){
	document.querySelector('a').addEventListener('click', function(event){
		document.querySelector('ul').innerHTML = ''
	})
}