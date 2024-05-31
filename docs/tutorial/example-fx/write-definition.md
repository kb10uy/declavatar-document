---
sidebar_position: 2
---

# 定義ファイルを記述する

このチュートリアルでは**メニューで操作する表情**を作成します。ハンドサインで切り替えるタイプの表情作成は応用となります。

まず雛形として、以下の内容のテキストファイルを作成し、拡張子 `.declisp` で好きな名前で保存して Unity プロジェクトにインポートしてください。

```scheme
; vim: ft=commonlisp
(use da :self)

(da/avatar "アバター名"
  ; この中に追記していく
)
```

以後、このインポートしたファイルを編集していきます。

## パラメーターを定義する

declavatar で Expressions Parameters を定義するには、 `da/parameters` ブロックを記述します。
このブロックの中には `da/int` `da/bool` `da/float` のいずれかを記述でき、それぞれが対応する型のパラメーターを定義します。
ここでは表情を数種類のうちから選択できるようにしたいので、Int の `FaceExpression` パラメーターを定義しましょう。

```scheme
(da/parameters
  (da/int "FaceExpression")
)
```

## AnimatorController のレイヤー内容を定義する

次に、 FX Layer に指定する AnimatorController の内容を定義します。ここが最も複雑かもしれません。
declavatar は int, bool, float でそれぞれ操作するのに便利なレイヤーの雛形があります。 int によるレイヤー操作は `da/group-layer` で定義できます。
レイヤーを生成するブロックは、一段上に `da/fx-controller` ブロックで囲う必要がありますので、次のようになります。

```scheme
(da/fx-controller
  (da/group-layer "表情操作"
    :driven-by "FaceExpression"
    :default-mesh "Body"

    ; ここはこの後書くよ
  )
)
```

`"表情操作"` の部分は定義ファイル内で他のレイヤーと被らなければ好きな名前を指定できます。

`:driven-by "FaceExpression"` の部分はこのレイヤーをどのパラメーターで操作するか指定するもので、先ほど定義した `"FaceExpression"` を指定しましょう。

`:default-mesh "Body"` の部分はこのレイヤーで操作する (Skinned)MeshRender について、明示的に指定されなかった際に何を対象にするかを指定するものです。
多くのアバターでは `Body` という GameObect が顔の SkinnedMeshRenderer を含んでいると思いますが、他の名前だった場合はそれに従って変更してください。

表情の選択肢は、`da/group-layer` ブロックの中に `da/option` ブロックとして定義します。

```scheme
(da/fx-controller
  (da/group-layer "表情操作"
    :driven-by "FaceExpression"
    :default-mesh "Body"
    :copy 'to-default-zeroed

    ; 何も指定してないとき(FaceExpression の値が 0 のとき)の設定値
    (da/option 'default)

    ; 最初文字列引数はオプション名で、レイヤー内で被らなければ任意
    (da/option "笑顔"
      ; 各シェイプキー名は設定するアバターに合わせて変更すること
      (da/set-shape "eye_にっこり" :value 1.0)
      (da/set-shape "eyebrow_笑い" :value 1.0)
      (da/set-shape "mouth_ワ" :value 1.0)
    )
    (da/option "怒り顔"
      (da/set-shape "eye_怒り" :value 1.0)
      (da/set-shape "eyebrow_真面目" :value 1.0)
      (da/set-shape "mouth_Λ" :value 1.0)
    )
  )
)
```

シェイプキーを操作するには `da/set-shape` を使います。シェイプキー名と設定する値を指定しましょう。ここで指定する値は 0.0~1.0 に正規化されていることに注意してください。
`da/group-layer` は、パラメーターが 0 のときのアニメーションとそれ以外を明確に区別しています。 0 のときの設定は、オプション名の代わりに `'default` というふうに指定してください。

`:copy 'to-default-zeroed` という謎の行が追加されていますが、これはデフォルトオプションに他のオプションのシェイプキーなどの設定を全部 0 にしてコピーするためのものです。
この設定を使わずに、デフォルトオプションに他の全てのシェイプキーを 0 にする操作を明示的に記述することもできます。

## メニューを定義する

最後に、 Expressions Menu の中身を定義しましょう。 `da/menu` ブロックを使います。

```scheme
(da/menu
  ; サブメニューを定義する。第一引数はサブメニューのタイトル
  (da/submenu "表情"
    (da/toggle "笑顔" (da/drive-group "表情操作" "笑顔"))
    (da/toggle "怒り" (da/drive-group "表情操作" "怒り顔"))
  )
)
```

`da/toggle` は、 Toggle のメニュー項目を作成します。第一引数は項目タイトル、第二引数はメニューによって操作する内容になります。
元々 Expressions Menu では各項目が操作されたときに「どのパラメーターをどんな値にするか」を指定しますが、declavatar の定義ファイルでは「どのレイヤーのどのオプションを呼び出すか」を指定します。
この例だと `da/drive-group` が使われていますが、これはレイヤー名とオプション名を指定するものです。これにより、パラメーターの数値の指定ミスを防ぐことができます。いいですね！

## 完成形

以上の全ての内容をまとめると、定義ファイルは次のようになります。

```scheme
; vim: ft=commonlisp
(use da :self)

(da/avatar "アバター名"
  (da/parameters
    (da/int "FaceExpression")
  )

  (da/fx-controller
    (da/group-layer "表情操作"
      :driven-by "FaceExpression"
      :default-mesh "Body"
      :copy 'to-default-zeroed

      (da/option 'default)

      (da/option "笑顔"
        (da/set-shape "eye_にっこり" :value 1.0)
        (da/set-shape "eyebrow_笑い" :value 1.0)
        (da/set-shape "mouth_ワ" :value 1.0)
      )
      (da/option "怒り顔"
        (da/set-shape "eye_怒り" :value 1.0)
        (da/set-shape "eyebrow_真面目" :value 1.0)
        (da/set-shape "mouth_Λ" :value 1.0)
      )
    )
  )

  (da/menu
    (da/submenu "表情"
      (da/toggle "笑顔" (da/drive-group "表情操作" "笑顔"))
      (da/toggle "怒り" (da/drive-group "表情操作" "怒り顔"))
    )
  )
)
```
