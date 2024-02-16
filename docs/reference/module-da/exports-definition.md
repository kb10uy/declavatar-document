---
sidebar_position: 5
---

# エクスポート定義関数

## `da/gate` (ゲート定義)

```scheme
(da/gate gate-name)
```

外部に公開するゲートを定義する。

### 引数

* `gate-name` (string)
    - ゲート名。

### 返り値

このゲートを表す `DeclExport` 。


## `da/guard` (ガード宣言)

```scheme
(da/guard gate-name guard-parameter)
```

ゲートに対して値を保持させるガードになるパラメーターを宣言する。

### 引数

* `gate-name` (string)
    - 対象にするゲート名。
* `guard-parameter` (string)
    - ガードにするパラメーター名。

### 返り値

このガード情報を表す `DeclExport` 。

### エラー

* `guard-parameter` で指定したパラメーターが bool ではない、または `unique` オプションが有効になっている場合エラー。
