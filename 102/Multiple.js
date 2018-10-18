function Main(input) {

    var n = parseInt(input);

    if ((n % 2) === 0) {
        console.log(n);
    } else {
        console.log(n * 2);
    }
    console.log();
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main(100);
Main(9999999);

