function Main(input) {

    const total = input.split('1').length;
    console.log(input.split('1'));
    console.log(total - 1);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
//Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('000');
Main('001');
Main('101');
Main('110');
Main('111');