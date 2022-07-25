//select all elements
const list = document.querySelector('#list')
const form = document.querySelector('#new-item-form')
const input = document.querySelector('#item-input')
//when add item button is clicked add new item to list
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //create a new item
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')
    console.log(item)

    //add item to list
    list.appendChild(item)
    //clear input field
    input.value = ''
    //remove item from list
    item.addEventListener('click', () => item.remove())

})

//create a new list item
