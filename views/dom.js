let x = doocument.querySelectorAll('.edit');
x.forEach(edit => edit.addEventListener('click', () => {
    console.log(edit.parentElement.parentElement.children[1])

}))

document.body.parentElement