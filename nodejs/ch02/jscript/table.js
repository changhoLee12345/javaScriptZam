import {
    createTable as ctable
} from './module.js'

let fields = ['id', 'first_name', 'last_name', 'email', 'gender', 'score'];

fetch('MOCK_DATA.json')
    .then(resolve => {
        console.log(resolve)
        return resolve.json();
    })
    .then(result => {
        console.log(result);
        let table = ctable(fields, result);
        document.getElementById('show').append(table);
    })
    .catch(error => {
        console.error(error);
    })