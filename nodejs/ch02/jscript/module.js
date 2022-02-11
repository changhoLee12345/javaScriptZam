export function createTable(titleAry, dataAry) {

    function makeTr(obj) {
        let tr = document.createElement('tr');
        for (let field of titleAry) {
            let td = document.createElement('td');
            td.textContent = obj[field];
            tr.appendChild(td);
        }
        return tr;
    }

    // [id, name, age]
    let table = document.createElement('table');
    table.setAttribute('border', '1');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    titleAry.forEach(item => {
        let th = document.createElement('th');
        th.textContent = item;
        thead.appendChild(th);
    });

    dataAry.forEach(item => {
        tbody.appendChild(makeTr(item));
    })

    table.append(thead, tbody);

    return table;
}