function Main(input) {

    const lines = input.split('\n');
    let x = parseInt(lines[0], 10);
    const a = parseInt(lines[1], 10);
    const b = parseInt(lines[2], 10);

    x = x - a;
    x = x - b * Math.floor(x / b);

    console.log(x);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('1000\n108\n108');
Main('579\n123\n456');
Main('7477\n549\n593');