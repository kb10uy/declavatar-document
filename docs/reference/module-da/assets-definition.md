---
sidebar_position: 4
---

# アセット定義関数

## `da/material` (外部マテリアル定義)

```scheme
(da/material matrial-name)
```

外部マテリアル参照を定義する。

### 引数

* `material-name` (string)
    - 参照名。

### 返り値

このアセットを表す `DeclAsset` 。

### エラー

* 同じ名前で既に別のアセットが定義されている場合はエラーになる。

## `da/animation` (外部アニメーション定義)

```scheme
(da/animation animation-name)
```

外部アニメーション参照を定義する。

### 引数

* `animation-name` (string)
    - 参照名。

### 返り値

このアセットを表す `DeclAsset` 。

### エラー

* 同じ名前で既に別のアセットが定義されている場合はエラーになる。
