function Main(input) {

    const tmp = input.split(' ');

    const a = parseInt(tmp[0], 10);
    const b = parseInt(tmp[1], 10);

    const sum = a * b;
    if ((sum % 2) === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('1 2');
Main('3 4');
Main('3 5');
