---
sidebar_position: 1
---

# パラメーター

アバター定義内で使用するパラメーターは、`da/parameters` ブロックで全て明示的に宣言・定義する必要があります。
他の箇所でパラメーターが参照されるとき、常にパラメーターが宣言されているかどうかとその型などがチェックされます。
これにより、タイプミスなどでアニメーションが正常に動作しないといった問題の発生確率を下げることができます。

```scheme
(da/parameters
  (da/bool "BoolParameter")
  (da/int "IntParameter" :default 42)
)
```

## 内部処理

[ModularAvatarParameters コンポーネント](https://modular-avatar.nadena.dev/ja/docs/reference/parameters) を生成し、定義されたパラメーターを追加しています。
これに対応するかたちで、 declavatar ではパラメーター名のユニーク化や AnimatorController のみで使用するパラメーターの宣言をサポートしています。
