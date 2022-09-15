# React Todo アプリ

## 開発メモ

- racfe
  - 基本的な関数コンポーネント用コード一括生成

## まとめ

### useState

- ステートフルな値と、それを更新するための関数を返す。
- `[state, setState] = useState(initialState)`

### useRef

- DOM の参照 or 値の保持
- ミュータブルな ref オブジェクトを返す.
- state の更新時のみ再描画される.
- useState() でも同じようなことができるが値が変化する（文字が入力される）毎に再描画が発生する.
- DOM ノードの位置やサイズを測定は useCallback() を使用する.

#### 例

- 関数を呼び出す
  - `const nameRef = useRef();`
- 監視したい値のタグにたして`nameRef`を追加する
  - `<input type="text" ref={nameRef} />`等

### スプレッド構文

#### 基本

- `...foo`のように記述され、配列やオブジェクトを展開する構文

#### 配列の場合

```js
const a = [1, 2];
const b = [...a, 3, 4]; // [1, 2, 3, 4]
```

#### オブジェクトの場合

```js
const a = {a: 1, b: 2};
const b = {...a, c: 3}; // {a: 1, b: 2, c: 3}
const c = {...a, {c: 3, d: 4}}; // {a: 1, b: 2, c: 3, d: 4}
```

### find 関数

- 配列をチェックして条件に一致した最初の値を返す
- １つしか取得できない

#### 例

```js
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((number) => number > 3); // 4が入る
```

### filter 関数とは

- 条件に一致したすべての値を返す
- 新しく配列を作る

#### 例

```js
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.filter((number) => number > 3); //[4, 5];
```

### ミュータブル

- 可変
- ミュータブルな操作 - 元の状態の変更を行う

```js
// 配列
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

// オブジェクト
const obj = { name: "a", id: 1 };
obj.id = 2;
```

### イミュータブル

- 不変
- イミュータブルな操作 - 元の状態の変更を行わない

```js
// 配列
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];

// オブジェクト
const obj = { name: "a", id: 1 };
const newObj = { ...obj, id: 2 };
```

### React はイミュータブルな操作が必要

差分検知に必要なため
