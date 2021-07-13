# TS の環境構築

1. ディレクトリを作る( `typescript` などのパッケージの名前と重複するものはNG)
2. `npm init` でプロジェクトファイル( `package.json` )を生成
3. `npm i -D typescript` で TypeScript のインストール
4. `npx tsc --init` でTSの設定ファイルを作成
5. 以下の内容を参考に適宜変更

```json:tsconfig.json
{
  "compilerOptions": {
    "target": "es6", // コンパイルした成果物が ES6準拠のものになる
    "module": "commonjs",
    "baseUrl": "./", // いろいろ徳がある(細かい話になるので省略)
    "outDir": "./dist", // 出力ディレクトリを `dist/` にする
    "strict": true, // 型の扱いが厳密になる
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*" // `src/` の中身は全部コンパイルするようにする
  ]
}
```

# 各種コマンド

## npmでインストールしたコマンド(パッケージに含まれてるものも含め)の実行

```
$ npx ~~~
```
## TSのコンパイル( `typescript` のパッケージに含まれる)

```
$ npx tsc
```

## `ts-node` でコンパイルをすっとばして実行する

```bash
# ts-node をインストールして使えるようにする
$ npm i -D ts-node

# ts-node でTSを直接実行
$ npx ts-node EntryPoint.ts
```

# TSの型の情報

```ts
const hoge: string = 'hoge';
```

この `: string` が型の情報として扱われる.
メソッドにおける型の定義は以下の書式になる

```ts
// アロー演算子
const hogeFunc = (argument: number): string => {
  return argument.toString();
}

// `function` 構文
function hogeFunc(argument: number): string {
  return argument.toString();
}
```

# TSの型定義で抽象的なデータ管理をする

仮に以下のようなデータの塊を `User` として定義し、その集まりの配列を `Users` として定義するとする

```
[
  {id: 1, name: 'Monika', desc: 'JUST MONIKA'},
  {id: 2, name: 'Yuri', desc: 'JUST YURI'},
  {id: 3, name: 'Natsuki', desc: 'JUST NATSUKI'}
]
```

TSではこのようなデータ単体をまとめる場合 `class` による抽象化ではなく、 `type` もしくは `interface` による型定義によって行うのがベター

```ts
type User = {
  id: number;
  name: string;
  desc: string;
};

type Users = User[];
```

これを変数に当てる場合は以下

```ts
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
}
```



# なぞのめも

```js
const LiteratureClubMembers = [{.....}];
LiteratureClubMembers[0].id // => 1
LiteratureClubMembers[0].name // => Monika
LiteratureClubMembers[0].desc // => JUST MONIKA

LiteratureClubMembers.forEach((member) => {
  console.log(member.id) // => 1, 2, 3
  console.log(member.name) // => Monika, Yuri, Natsuki
});
```
