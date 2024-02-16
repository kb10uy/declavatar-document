---
sidebar_position: 3
---

# パラメーター定義関数

## `da/int` (Int パラメーター定義)

```scheme
(da/int
    parameter-name
    ; [ :default <value> ]
    ; [ :scope <value> ]
    ; [ :save <value> ]
    ; [ :unique <value> ]
)
```

Int 型パラメーターを定義する。

### 引数

* `parameter-name` (string)
    - パラメーター名。
* `:default <value>` (int)
    - デフォルト値。
    - Expressions Menu アセットに記録される。
* `:scope <value>` (`'internal`, `'local`, `'synced` のいずれか)
    - パラメーターの公開範囲。
    - デフォルトは `'synced` 。
* `:save <value>` (bool)
    - このパラメーターを保存するかどうかの指定。
    - デフォルトは `false` 。
* `:unique <value>` (bool)
    - このパラメーターを他のパラメーターと名前が重複しないようにユニーク化するかどうかの指定。
    - デフォルトは `false` 。

### 返り値

このパラメーターを表す `DeclParameter` 。

### エラー

* `:scope` が `'internal` の状態で `:save` が `true` の場合、内部値はそもそも Expressions Parameters に記録されないため無効な指定としてエラーになる。
* 同じ名前で既にパラメーターが定義されている場合、型やオプションを含めた全ての要素が一致した定義でない場合はエラーになる。

## `da/bool` (Bool パラメーター定義)

```scheme
(da/bool
    parameter-name
    ; [ :default <value> ]
    ; [ :scope <value> ]
    ; [ :save <value> ]
    ; [ :unique <value> ]
)
```

Int 型パラメーターを定義する。

### 引数

* `parameter-name` (string)
    - パラメーター名。
* `:default <value>` (bool)
    - デフォルト値。
    - Expressions Menu アセットに記録される。
* `:scope <value>` (`'internal`, `'local`, `'synced` のいずれか)
    - パラメーターの公開範囲。
    - デフォルトは `'synced` 。
* `:save <value>` (bool)
    - このパラメーターを保存するかどうかの指定。
    - デフォルトは `false` 。
* `:unique <value>` (bool)
    - このパラメーターを他のパラメーターと名前が重複しないようにユニーク化するかどうかの指定。
    - デフォルトは `false` 。

### 返り値

このパラメーターを表す `DeclParameter` 。

### エラー

* `:scope` が `'internal` の状態で `:save` が `true` の場合、内部値はそもそも Expressions Parameters に記録されないため無効な指定としてエラーになる。
* 同じ名前で既にパラメーターが定義されている場合、型やオプションを含めた全ての要素が一致した定義でない場合はエラーになる。

## `da/float` (Float パラメーター定義)

```scheme
(da/float
    parameter-name
    ; [ :default <value> ]
    ; [ :scope <value> ]
    ; [ :save <value> ]
    ; [ :unique <value> ]
)
```

Int 型パラメーターを定義する。

### 引数

* `parameter-name` (string)
    - パラメーター名。
* `:default <value>` (float)
    - デフォルト値。
    - Expressions Menu アセットに記録される。
* `:scope <value>` (`'internal`, `'local`, `'synced` のいずれか)
    - パラメーターの公開範囲。
    - デフォルトは `'synced` 。
* `:save <value>` (bool)
    - このパラメーターを保存するかどうかの指定。
    - デフォルトは `false` 。
* `:unique <value>` (bool)
    - このパラメーターを他のパラメーターと名前が重複しないようにユニーク化するかどうかの指定。
    - デフォルトは `false` 。

### 返り値

このパラメーターを表す `DeclParameter` 。

### エラー

* `:scope` が `'internal` の状態で `:save` が `true` の場合、内部値はそもそも Expressions Parameters に記録されないため無効な指定としてエラーになる。
* 同じ名前で既にパラメーターが定義されている場合、型やオプションを含めた全ての要素が一致した定義でない場合はエラーになる。
