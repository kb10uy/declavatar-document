---
sidebar_position: 7
---

# レイヤー定義関数 (基本)

## `da/group-layer` (択一方式レイヤー)

```scheme
(da/group-layer layer-name
    :driven-by parameter-name
    ; [ :default-mesh mesh-name ]
    ; [ options ... ]
)
```

グループ択一式のレイヤーを定義する。

### 引数

* `layer-name` (string)
    - レイヤー名。
    - 全てのレイヤー内で一意である必要がある。
* `parameter-name` (string)
    - このレイヤーを駆動する int パラメーター名。
* `mesh-name` (string)
    - `DeclGroupOption` 内で mesh が省略された場合に使用する MeshRenderer のパス。
* `options` (`DeclGroupOption`)
    - 任意個の `DeclGroupOption`。

### 返り値

`DeclLayer` 。

### エラー

* `options` に 'default かラベル以外のキーが付いている `DeclGroupOption` が含まれている場合はエラー。


## `da/switch-layer` (切替方式レイヤー)

```scheme
(da/switch-layer layer-name
    ; [ :driven-by parameter-name ]
    ; [ :with-gate gate-name ]
    ; [ :default-mesh mesh-name ]
    ; [ options ... ]
)
```

オンオフ切り替え式のレイヤーを定義する。

### 引数

* `layer-name` (string)
    - レイヤー名。
    - 全てのレイヤー内で一意である必要がある。
* `parameter-name` (string)
    - このレイヤーを駆動する bool パラメーター名。
* `gate-name` (string)
    - このレイヤーを駆動するゲート名。
    - `parameter-name` か `gate-name` のいずれか片方だけを指定する必要がある。
* `mesh-name` (string)
    - `DeclGroupOption` 内で mesh が省略された場合に使用する MeshRenderer のパス。
* `options` (`DeclGroupOption`)
    - 任意個の `DeclGroupOption`。

### 返り値

`DeclLayer` 。

### エラー

* `options` に 'disabled, 'enabled 以外の `DeclGroupOption` が含まれている場合はエラー。


## `da/puppet-layer` (無段階アニメーションレイヤー)

```scheme
(da/puppet-layer layer-name
    ; [ :driven-by parameter-name ]
    ; [ :default-mesh mesh-name ]
    ; [ options ... ]
)
```

float で調整できるレイヤーを定義する。

### 引数

* `layer-name` (string)
    - レイヤー名。
    - 全てのレイヤー内で一意である必要がある。
* `parameter-name` (string)
    - このレイヤーを駆動する bool パラメーター名。
* `mesh-name` (string)
    - `DeclGroupOption` 内で mesh が省略された場合に使用する MeshRenderer のパス。
* `options` (`DeclGroupOption`)
    - 任意個の `DeclGroupOption`。

### 返り値

`DeclLayer` 。

### エラー

* `options` にキーフレーム以外の `DeclGroupOption` が含まれている場合はエラー。


## `da/option` (レイヤー内ステート情報)

```scheme
(da/option key
    ; [ targets ... ]
)
```

各レイヤー内で操作するひとまとまりの単位を定義する。

### 引数

* `key`
    - この `option` を区別する値。
    - 指定できる値は以下のとおり。
        - 文字列
            - `da/group-layer` 内で定義するもの。
            - メニュー定義などで参照する際にこの名前が参照される。
            - 親になる `da/group-layer` 内で一意である必要がある。
        - `'default`
            - `da/group-layer` 内で定義するもの。
            - 他のどの選択肢も選択されていないときに有効になる。
        - `'disabled`
            - `da/switch-layer` 内で定義するもの。
            - `da/switch-layer` のパラメーターが false のときに有効になる。
        - `'enabled`
            - `da/switch-layer` 内で定義するもの。
            - `da/switch-layer` のパラメーターが true のときに有効になる。
        - 0.0~1.0 の実数
            - `da/puppet-layer` 内で定義するもの。
            - 生成されるアニメーションのキーフレーム位置に対応する。
* `targets` (`DeclTarget`)
    - 任意個の `DeclTarget`。

### 返り値

`DeclGroupOption` 。
