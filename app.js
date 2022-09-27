let val;

val = document.getElementById('task-form')
val = document.getElementById('task-form').id
val = document.getElementById('task-form').className

const taskTitle = document
    .getElementById('task-title')

taskTitle.style.background = '#333'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '15px'
// taskTitle.style.display = 'none'

taskTitle.textContent = 'Defined Tasks'
taskTitle.innerText = 'My Favourite Tasks'
taskTitle.innerHTML = '<b style="color: red">My Tasks</b>'

val = document.querySelector('#task-title')
val = document.querySelector('.card-title')
val = document.querySelector('ul')

//document.querySelector('li').style.color = '#2ea71c'

val = document.querySelector('li:last-child')
oddLi = document.querySelectorAll('li:nth-child(odd)')

oddLi.forEach((li) => {
    li.style.background = '#ddd'
})

console.log(val)