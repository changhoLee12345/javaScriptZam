var str = 'Lorem ipsum dolor, sit Lorem amet consectetur Lorem adipisicing Lorem elit.';
var result = str.indexOf('Lorem', 25);
result = check_gender('210101-3456789');
console.log(result);

function check_gender(birth) {
    var yy = birth.substring(0, 2);
    var over2000 = yy > 00 ? (yy > 21 ? false : true) : false;
    var gen = birth.slice(-7, -6);
    var gender = '';

    if (!over2000) {
        if (gen == '1') {
            gender = '남자';
        } else if (gen == '2') {
            gender = '여자';
        }
    } else {
        if (gen == '3') {
            gender = '남자';
        } else if (gen == '4') {
            gender = '여자';
        }
    }
    return gender || '잘못된 번호입니다.';
}