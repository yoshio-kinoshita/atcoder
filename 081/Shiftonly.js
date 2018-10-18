function Main(input) {

    var lines = input.split('\n')[1].split(' ').map((n) => parseInt(n, 10));

    var count = 0;
    while(lines.every((n) => (n % 2) === 0)) {
        count++;
        lines = lines.map((n) => n / 2);
    };

    console.log(count)
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('6\n382253568 723152896 37802240 379425024 404894720 471526144');