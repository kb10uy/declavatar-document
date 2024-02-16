---
sidebar_position: 6
---

# メニュー定義関数

## `da/submenu` (サブメニュー定義)

```scheme
(da/submenu
    ; [ items ...]
)
```

サブメニューを定義する。
合計アイテム数が 8 を超えた場合、 Modular Avatar によって自動的にページ送りされる。

### 引数

* `items` (string)
    - 任意個のメニュー要素(`DeclMenuElement`)。

### 返り値

`DeclMenuElement` 。


## `da/button` (ボタン定義)

```scheme
(da/button label drive)
```

ボタンを定義する。

### 引数

* `label` (string)
    - メニュー内で表示するラベル。
* `drive`
    - このボタンで動作させる対象となる `DeclParameterDrive` 。
        - `da/drive-group`
        - `da/drive-switch`
        - `da/drive-puppet`
        - `da/set-int`
        - `da/set-bool`
        - `da/set-float`

### 返り値

`DeclMenuElement` 。


## `da/toggle` (トグルボタン定義)

```scheme
(da/toggle label drive)
```

トグルボタンを定義する。

### 引数

* `label` (string)
    - メニュー内で表示するラベル。
* `drive` (`DeclParameterDrive`)
    - このトグルボタンで動作させる対象となる `DeclParameterDrive` 。
        - `da/drive-group`
        - `da/drive-switch`
        - `da/drive-puppet`
        - `da/set-int`
        - `da/set-bool`
        - `da/set-float`

### 返り値

`DeclMenuElement` 。


## `da/radial` (Radial Puppet 定義)

```scheme
(da/radial label axis)
```

Radial Puppet を定義する。

### 引数

* `label` (string)
    - メニュー内で表示するラベル。
* `axis` (`DeclPuppetAxis`)
    - 操作対象の `DeclPuppetAxis` 。

### 返り値

`DeclMenuElement` 。


## `da/two-axis` (Two Axis Puppet 定義)

```scheme
(da/two-axis
    label
    :horizontal horizontal-axis
    :vertical vertical-axis
)
```

Two Axis Puppet を定義する。

### 引数

* `label` (string)
    - メニュー内で表示するラベル。
* `horizontal-axis` (`DeclPuppetAxis`)
    - X 軸で操作する `DeclPuppetAxis` 。
* `vertical-axis` (`DeclPuppetAxis`)
    - Y 軸で操作する `DeclPuppetAxis` 。

### 返り値

`DeclMenuElement` 。


## `da/four-axis` (Four Axis Puppet 定義)

```scheme
(da/four-axis
    label
    :up up-axis
    :down down-axis
    :left left-axis
    :right right-axis
)
```

Four Axis Puppet を定義する。

### 引数

* `label` (string)
    - メニュー内で表示するラベル。
* `up-axis` (`DeclPuppetAxis`)
    - 上方向で操作する `DeclPuppetAxis` 。
* `down-axis` (`DeclPuppetAxis`)
    - 下方向で操作する `DeclPuppetAxis` 。
* `left-axis` (`DeclPuppetAxis`)
    - 左方向で操作する `DeclPuppetAxis` 。
* `right-axis` (`DeclPuppetAxis`)
    - 右方向で操作する `DeclPuppetAxis` 。

### 返り値

`DeclMenuElement` 。


## `da/axis` (Puppet 操作軸定義)

```scheme
(da/two-axis
    drive
    ; [label-first]
    ; [label-second]
)
```

Puppet で操作する軸情報を定義する。

### 引数

* `drive` (`DeclParameterDrive`)
    - 操作する `DeclParameterDrive`。
        - `da/drive-puppet`
        - `da/set-float`
* `label-first` (string)
    - 一つ目のラベル。
    - `da/radial` では無視される。
* `label-second` (string)
    - 二つ目のラベル。
    - `da/radial`, `da/four-axis` では無視される。

### 返り値

`DeclPuppetAxis` 。
