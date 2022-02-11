class Student {
    constructor(sno, sname, score) {
        this._sno = sno;
        this._sname = sname;
        this._score = score;
    }
    set sno(sno) {
        this._sno = sno;
    }
    get sno() {
        return this._sno;
    }
    set sname(sname) {
        this._sname = sname;
    }
    get sname() {
        return this._sname;
    }
    set score(score) {
        this._score = score;
    }
    get score() {
        return this._score;
    }

    toString() {
        return `no=> ${this._sno}, name=> ${this._sname}, score=> ${this._score}`;
    }
}

// class Table {
//     constructor(fields, data) {
//         this._table = document.createElement('table');
//         this.setHead(fields);
//         this.setBody(fields, data);
//     }
//     setHead(fields) {
//         this._thead = document.createElement('thead');
//         var tr = document.createElement('tr');
//         fields.forEach(item => {
//             var td = document.createElement('td');
//             td.textContent = item;
//             tr.appendChild(td);
//         });
//         this._thead.appendChild(tr);
//         this._table.appendChild(this._thead);
//     }
//     setBody(fields, data) {
//         this._tbody = document.createElement('tbody');
//         data.forEach((item) => {
//             this._tbody.appendChild(this.makeTr(fields, item));
//         });
//         this._table.appendChild(this._tbody);
//     }
//     makeTr(fields, item) {
//         var tr = document.createElement('tr');
//         fields.forEach(field => {
//             var td = document.createElement('td');
//             td.textContent = item[field];
//             tr.appendChild(td);
//         })
//         return tr;
//     }
//     getTable() {
//         return this._table;
//     }
// }

function Table(fields, data) {

    this.table = document.createElement('table');
    this.table.setAttribute('border', '1');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.setHead = function () {
        var tr = document.createElement('tr');
        fields.forEach(field => {
            var td = document.createElement('td');
            td.textContent = field;
            tr.appendChild(td);
        })
        this.thead.appendChild(tr);
        this.table.appendChild(this.thead);
    }
    this.setBody = function () {
        data.forEach(item => {
            var tr = document.createElement('tr');
            fields.forEach(field => {
                var td = document.createElement('td');
                td.textContent = item[field];
                tr.appendChild(td);
            })
            this.tbody.appendChild(tr);
        })
        this.table.appendChild(this.tbody);
    }
    this.getTable = function () {
        this.setHead();
        this.setBody();
        return this.table;
    }
}

var fieldAry = ['sno', 'sname', 'score'];
var students = [
    new Student('S001', '홍길동', 80),
    new Student('S002', '박기찬', 78),
    new Student('S003', '김만해', 65),
    new Student('S004', '박어진', 70),
    new Student('S005', '김문수', 91)
]

var targetAry = [];

document.addEventListener('DOMContentLoaded', function () {
    // students.forEach(item => {
    //     // console.log(`name: ${item.sname}, score: ${item.score}`)
    //     console.log(`info { ${item.toString()} }`);
    // })

    targetAry = students;

    var t1 = new Table(fieldAry, students);
    document.getElementById('show').appendChild(t1.getTable());

})