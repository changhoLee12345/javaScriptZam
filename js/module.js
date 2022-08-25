export function module(msg) {
    console.log('msg ==> ' + msg);
}

export function makeTr(obj = {}) {
    let str = '<tr>';
    for (let field in obj) {
        str += '<td>' + obj[field] + '</td>';
    }
    str += '</tr>';

    return str;
}