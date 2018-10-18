function Main(input) {

    const lines = input.split('\n');
    const a500 = parseInt(lines[0], 10);
    const b100 = parseInt(lines[1], 10);
    const c50 = parseInt(lines[2], 10);
    const x = parseInt(lines[3], 10);

    console.log(a500);
    console.log(b100);
    console.log(c50);
    console.log(x);

    let count = 0;

    for (let a = 0; a <= a500; a++) {
        for (let b = 0; b <= b100; b++) {
            for (let c = 0; c <= c50; c++) {
                let sum = a * 500 + b * 100 + c * 50;
                if (x === sum) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//Main('2\n2\n2\n100');