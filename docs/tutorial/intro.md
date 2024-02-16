---
sidebar_position: 1
---

# declavatar について

**declavatar** は、 VRChat Avatars 3.0 において欠かせない AnimatorController や AnimationClip、また Expressions Menu/Parameters をスクリプト言語による記述で構成できるツールです。
[Modular Avatar](https://modular-avatar.nadena.dev/ja) の導入を前提としており、連携してシーン上オブジェクト(主にアバター)に対しては非破壊的に動作します。

UnityEditor 上で GUI で作るのが面倒であるとか、 prefab 以外でこれらのアセットを共有したりバージョン管理したい方におすすめです(本気で言ってるのか？)。

## リポジトリ

declavatar は複数のリポジトリで構成されています。

* [kb10uy/declavatar](https://github.com/kb10uy/declavatar)
    - declavatar のコア機能が実装されています。
    - 便宜上 0.9.x までを legacy、0.20.0 以降を v2 と呼ぶことがあります。
* [kb10uy/modular-declavatar](https://github.com/kb10uy/modular-declavatar)
    - UnityEditor 用の拡張が含まれ、Modular Avatar / NDMF と連携して動作します。
    - コンパイル済みの declavatar バイナリが含まれています。
    - declavatar v2 が 1.0.0 以降に対応しており、バージョンは連動していません。
* [kb10uy/declavatar-attachments](https://github.com/kb10uy/declavatar-attachments)
    - Arbitrary Attachment によるさまざまな追加機能を提供します。
* [kb10uy/declavatar-doc](https://github.com/kb10uy/declavatar-doc)
    - このドキュメントの原本です。
