import { printFugaToConsole } from "./sample";

/** **テストのメソッド**ですわよ
 * @param {string} fuga 
 */
const hogeFunc = (fuga: number): string => {
  // console.log(fuga);
  return fuga.toString();
};

printFugaToConsole();
console.log(typeof hogeFunc(150));


////////////////////////////////////////////////
//////////// Typeによる型定義のサンプル //////////
////////////////////////////////////////////////

type User = {
  id: number;     // `number | string` を使うと OR の条件になる
  name: string;
  desc?: string;  // 型名の隣に `?` を入れると存在しないことを許容できる
};

type Users = User[];


// これは通る
const detailsOfMonika: User = {
  id: 1,
  name: 'Monika',
  desc: 'JUST MONIKA'
};

// これは通らない(型の定義と違うため)
const detailsOfYuri: User = {
  id: '2', // ここが number でないといけない
  name: 'Yuri',
  desc: 'JUST YURI'
};

const detailsOfNatsuki: User = {
  id: 3,
  name: 'Natsuki',
};

if(typeof detailsOfMonika.desc !== 'undefined'){
  console.log(detailsOfMonika.desc.toLowerCase());
}
