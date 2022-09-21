const firstname = 'Erki'
const surname = 'P2rna'
const email = 'erki.parna@voco.ee'
const department = 'IKT'

let result = '<ul>' +
    '<li><b>Name: </b>' + firstname + '</li>' +
    '<li><b>Surname: </b>' + surname + '</li>' +
    '<li><b>Email: </b>' + email + '</li>' +
    '<li><b>Department: </b>' + department + '</li>' +
    '</ul>'

result = `
<ul>
    <li><b>Name: </b>${firstname}</li>
    <li><b>Surname: </b>${surname}</li>
    <li><b>Email: </b>${email}</li>
    <li><b>Department: </b>${department}</li>
</ul>`

console.log(result)
document.body.innerHTML = result