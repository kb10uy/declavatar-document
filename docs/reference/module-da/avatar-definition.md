---
sidebar_position: 2
---

# アバター定義関数

## `da/avatar` (アバター定義)

```scheme
(da/avatar
    ; [ blocks ... ]
)
```

アバター定義オブジェクトを構成する。

### 引数

* `blocks`
    - 任意個の以下のブロック。
        - **da/parameters** (`DeclParameters`)
        - **da/assets** (`DeclAssets`)
        - **da/exports** (`DeclExports`)
        - **da/fx-controller** (`DeclFxController`)
        - **da/menu** (`DeclSubMenu`)

### 返り値

アバター定義となる `DeclAvatar` 。

## `da/parameters` (パラメーター定義ブロック)

```scheme
(da/parameters
    ; [ parameters ... ]
)
```

このアバター定義オブジェクト内で使用・生成するパラメーターを定義する。

### 引数

* `parameters`
    - 任意個のパラメーター定義(`DeclParameter`)。

### 返り値

パラメーター定義を含む `DeclParameters` 。


## `da/assets` (アセット定義ブロック)

```scheme
(da/assets
    ; [ assets ... ]
)
```

このアバター定義オブジェクト内で使用する外部アセットを宣言する。

### 引数

* `assets`
    - 任意個のアセット定義(`DeclAsset`)。

### 返り値

アセット定義を含む `DeclAssets` 。


## `da/exports` (エクスポート定義ブロック)

```scheme
(da/exports
    ; [ exports ... ]
)
```

このアバター定義オブジェクトから公開するエクスポート情報を宣言する。

### 引数

* `exports`
    - 任意個のエクスポート情報(`DeclExport`)。

### 返り値

エクスポート情報を含む `DeclExports` 。


## `da/menu` (メニュー定義ブロック)

```scheme
(da/menu
    ; [ menu-items ... ]
)
```

このアバター定義オブジェクトで生成するメニューを定義する。
`da/menu` 直下の合計アイテム数が 8 を超えた場合、 Modular Avatar によって自動的にページ送りされる。

### 引数

* `menu-items`
    - 任意個のメニュー要素(`DeclMenuElement`)。

### 返り値

メニュー定義を含む `DeclMenu` 。


## `da/fx-controller` (FX Layer 定義ブロック)

```scheme
(da/fx-controller
    ; [ layers ... ]
)
```

このアバター定義オブジェクトで生成する FX Layer を定義する。
アバター定義全体で出現した順に AnimatorController のレイヤーも生成される。

### 引数

* `layers`
    - 任意個のレイヤー定義(`DeclLayer`)。

### 返り値

レイヤー定義を含む `DeclFxController` 。
