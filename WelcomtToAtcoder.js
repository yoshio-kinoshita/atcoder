function Main(input) {

    var lines = input.split('\n');
    var tmp = lines[1].split(' ');

    var a = parseInt(lines[0], 10);
    var b = parseInt(tmp[0], 10);
    var c = parseInt(tmp[1], 10);

    var s = lines[2];
 	console.log('%d %s',a + b + c, s);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//Main('1\n2 3\ntest');
