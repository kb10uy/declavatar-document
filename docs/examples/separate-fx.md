---
sidebar_position: 1
---

# パーツ別表情制御

kb10uy がよく使ってるやつです。

```scheme
; vim: ft=commonlisp
(use da :self)
(use dax :self)
(use lm (map))

(define (default-eyelids cancel)
    (list
        (da/set-shape "eye_ぱっちりおめめ" :value (if cancel 0.0 0.7))
        (da/set-shape "eye_下まぶた角度_普通" :value (if cancel 0.0 1.0))
        (da/set-shape "eye_上まぶた_まつ毛_消し_1" :value 1.0)
        (da/set-shape "eye_下まぶた_消し_1" :value 1.0)
        (da/set-shape "eye_下まぶた_消し_2" :value 1.0)
    )
)

(define default-pupils
    (list
        (da/set-shape "eye_目の幅_縮小_縦" :value 0.25)
        (da/set-shape "eye_目の幅_縮小_横" :value 0.4)
        (da/set-shape "eye_瞳移動_下" :value 0.2)
        (da/set-shape "eye_ハイライト消し1" :value 1.0)
        (da/set-shape "eye_ハイライトでかい2" :value 0.3)
    )
)

(da/avatar "mafukitten"
    (da/parameters
        (da/int "Eyebrows")
        (da/int "Eyelids")
        (da/int "Pupils")
        (da/int "Mouth")
        (da/int "Cheeks")
        (da/bool "Tears")
        (da/bool "Shocked")
        (da/bool "Blue")
    )

    (da/fx-controller
        (dax/tracking-layer "EyePrevention" 'eyes '("Eyelids"))
        (dax/tracking-layer "MouthPrevention" 'mouth '("Mouth"))

        (da/group-layer "Eyebrows"
            :driven-by "Eyebrows"
            :default-mesh "Face"
            :copy 'to-default-zeroed

            (da/option "上" (da/set-shape "eyebrow_上"))
            (da/option "下" (da/set-shape "eyebrow_下"))
            (da/option "笑顔" (da/set-shape "eyebrow_嬉しい"))
            (da/option "にやり" (da/set-shape "eyebrow_嫌"))
            (da/option "困惑" (da/set-shape "eyebrow_悲しい"))
            (da/option "真面目" (da/set-shape "eyebrow_キリッ"))
            (da/option "怒り" (da/set-shape "eyebrow_怒り"))
        )

        (da/group-layer "Eyelids"
            :driven-by "Eyelids"
            :default-mesh "Face"
            :copy 'to-default-zeroed

            (da/option 'default (default-eyelids false))

            (da/option "閉じ" (default-eyelids true) (da/set-shape "eye_まばたき"))
            (da/option "笑顔" (default-eyelids true) (da/set-shape "eye_笑い"))
            (da/option "はぅ" (default-eyelids true) (da/set-shape "eye_><"))
            (da/option "なごみ" (default-eyelids true) (da/set-shape "eye_棒目"))
            (da/option "じと" (default-eyelids false) (da/set-shape "eye_ジト目"))
            (da/option "にやり" (default-eyelids false) (da/set-shape "eye_にこ"))

            (da/option "ウィンク左上" (default-eyelids false) (da/set-shape "eye_ウインク1_L"))
            (da/option "ウィンク左下" (default-eyelids false) (da/set-shape "eye_ウインク2_L"))
            (da/option "ウィンク右上" (default-eyelids false) (da/set-shape "eye_ウインク1_R"))
            (da/option "ウィンク右下" (default-eyelids false) (da/set-shape "eye_ウインク2_R"))

            (da/option "眠たげ"
                (default-eyelids false)
                (da/set-shape "eye_まばたき" :value 0.25)
                (da/set-shape "eye_ジト目" :value 0.75)
            )
            (da/option "薄目1"
                (default-eyelids true)
                (da/set-shape "eye_笑い" :value 0.10)
                (da/set-shape "eye_まばたき" :value 0.30)
                (da/set-shape "eye_ジト目" :value 0.50)
            )
        )

        (da/group-layer "Pupils"
            :driven-by "Pupils"
            :default-mesh "Face"
            :copy 'to-default-zeroed

            (da/option 'default default-pupils)

            (da/option "しいたけ" default-pupils (da/set-shape "eye_しいたけ"))
            (da/option "ハート" default-pupils (da/set-shape "eye_ハート"))
            (da/option "ぐるぐる" default-pupils (da/set-shape "eye_ぐるぐる"))
            (da/option "白目" default-pupils (da/set-shape "eye_ショック"))
            (da/option "小1" default-pupils (da/set-shape "eye_瞳小" :value 0.2))
            (da/option "小2" default-pupils (da/set-shape "eye_瞳小" :value 0.4))
            (da/option "小3" default-pupils (da/set-shape "eye_瞳小" :value 0.6))
            (da/option "ハイライト無" default-pupils (da/set-shape "eye_ハイライト消し_全部"))
        )

        (da/group-layer "Mouth"
            :driven-by "Mouth"
            :default-mesh "Face"
            :copy 'to-default-zeroed

            (da/option "あ" (da/set-shape "mouth_あ"))
            (da/option "い" (da/set-shape "mouth_い"))
            (da/option "う" (da/set-shape "mouth_う"))
            (da/option "え" (da/set-shape "mouth_え"))
            (da/option "お" (da/set-shape "mouth_お"))

            (da/option "笑顔" (da/set-shape "mouth_笑い"))
            (da/option "ワ" (da/set-shape "mouth_ワ"))
            (da/option "ω" (da/set-shape "mouth_ω"))
            (da/option "にや" (da/set-shape "mouth_ニタァ"))
            (da/option "にへ" (da/set-shape "mouth_v"))

            (da/option "真面目" (da/set-shape "mouth_まっすぐ口"))
            (da/option "Λ" (da/set-shape "mouth_^"))
            (da/option "Δ" (da/set-shape "mouth_△"))
            (da/option "困惑" (da/set-shape "mouth_怒り口"))
            (da/option "困惑2" (da/set-shape "mouth_ww"))
            (da/option "あわわ" (da/set-shape "mouth_あわわ"))

            (da/option "八重歯笑顔" (da/set-shape "mouth_八重歯_L"))
            (da/option "八重歯あ" (da/set-shape "mouth_ワ_八重歯"))
            (da/option "八重歯Λ" (da/set-shape "mouth_八重歯_L") (da/set-shape "mouth_怒り口"))

            (da/option "舌出し1" (da/set-shape "mouth_舌出し"))
            (da/option "舌出し2" (da/set-shape "mouth_舌_ぺろん_R"))
            (da/option "舌出し3" (da/set-shape "mouth_舌_ぺろん_L"))
            (da/option "円" (da/set-shape "mouth_小さめぽかーん"))
            (da/option "あー" (da/set-shape "mouth_o"))
            (da/option "はぁ" (da/set-shape "mouth_お") (da/set-shape "mouth_あわわ" :value 0.35))
        )

        (da/group-layer "Cheeks"
            :driven-by "Cheeks"
            :default-mesh "Face"
            :copy 'to-default-zeroed

            (da/option "ピンク" (da/set-shape "extra_ピンクほっぺ"))
            (da/option "頬染め" (da/set-shape "extra_頬染め1"))
            (da/option "紅潮" (da/set-shape "extra_頬染め2"))
        )

        (da/switch-layer "Tears"
            :driven-by "Tears"
            :default-mesh "Face"
            (da/option 'disabled (da/set-shape "extra_目うるうる"))
            (da/option 'enabled (da/set-shape "extra_目うるうる"))
        )

        (da/switch-layer "Shocked"
            :driven-by "Shocked"
            :default-mesh "Face"
            (da/option 'disabled (da/set-shape "extra_がーん1"))
            (da/option 'enabled (da/set-shape "extra_がーん1"))
        )

        (da/switch-layer "Blue"
            :driven-by "Blue"
            :default-mesh "Face"
            (da/option 'disabled (da/set-shape "extra_がーん2"))
            (da/option 'enabled (da/set-shape "extra_がーん2"))
        )
    )

    (da/menu
        (da/submenu "表情"
            (da/submenu "眉"
                (da/toggle "上" (da/drive-group "Eyebrows" "上"))
                (da/toggle "下" (da/drive-group "Eyebrows" "下"))
                (da/toggle "笑顔" (da/drive-group "Eyebrows" "笑顔"))
                (da/toggle "にやり" (da/drive-group "Eyebrows" "にやり"))
                (da/toggle "困惑" (da/drive-group "Eyebrows" "困惑"))
                (da/toggle "真面目" (da/drive-group "Eyebrows" "真面目"))
                (da/toggle "怒り" (da/drive-group "Eyebrows" "怒り"))
            )
            (da/submenu "瞼"
                (da/submenu "通常"
                    (da/toggle "閉じ" (da/drive-group "Eyelids" "閉じ"))
                    (da/toggle "笑顔" (da/drive-group "Eyelids" "笑顔"))
                    (da/toggle "はぅ" (da/drive-group "Eyelids" "はぅ"))
                    (da/toggle "なごみ" (da/drive-group "Eyelids" "なごみ"))
                    (da/toggle "じと" (da/drive-group "Eyelids" "じと"))
                    (da/toggle "にやり" (da/drive-group "Eyelids" "にやり"))
                )
                (da/submenu "ウィンク"
                    (da/toggle "右上" (da/drive-group "Eyelids" "ウィンク右上"))
                    (da/toggle "右下" (da/drive-group "Eyelids" "ウィンク右下"))
                    (da/toggle "左下" (da/drive-group "Eyelids" "ウィンク左下"))
                    (da/toggle "左上" (da/drive-group "Eyelids" "ウィンク左上"))
                )
                (da/submenu "その他"
                    (da/toggle "眠たげ" (da/drive-group "Eyelids" "眠たげ"))
                    (da/toggle "薄目1" (da/drive-group "Eyelids" "薄目1"))
                )
            )
            (da/submenu "瞳"
                (da/toggle "しいたけ" (da/drive-group "Pupils" "しいたけ"))
                (da/toggle "ハート" (da/drive-group "Pupils" "ハート"))
                (da/toggle "ぐるぐる" (da/drive-group "Pupils" "ぐるぐる"))
                (da/toggle "白目" (da/drive-group "Pupils" "白目"))
                (da/toggle "小1" (da/drive-group "Pupils" "小1"))
                (da/toggle "小2" (da/drive-group "Pupils" "小2"))
                (da/toggle "小3" (da/drive-group "Pupils" "小3"))
                (da/toggle "ハイライト無" (da/drive-group "Pupils" "ハイライト無"))
            )
            (da/submenu "口"
                (da/submenu "母音"
                    (da/toggle "あ" (da/drive-group "Mouth" "あ"))
                    (da/toggle "い" (da/drive-group "Mouth" "い"))
                    (da/toggle "う" (da/drive-group "Mouth" "う"))
                    (da/toggle "え" (da/drive-group "Mouth" "え"))
                    (da/toggle "お" (da/drive-group "Mouth" "お"))
                )
                (da/submenu "喜楽"
                    (da/toggle "笑顔" (da/drive-group "Mouth" "笑顔"))
                    (da/toggle "ワ" (da/drive-group "Mouth" "ワ"))
                    (da/toggle "ω" (da/drive-group "Mouth" "ω"))
                    (da/toggle "にや" (da/drive-group "Mouth" "にや"))
                    (da/toggle "にへ" (da/drive-group "Mouth" "にへ"))
                )
                (da/submenu "怒哀"
                    (da/toggle "真面目" (da/drive-group "Mouth" "真面目"))
                    (da/toggle "Λ" (da/drive-group "Mouth" "Λ"))
                    (da/toggle "Δ" (da/drive-group "Mouth" "Δ"))
                    (da/toggle "困惑" (da/drive-group "Mouth" "困惑"))
                    (da/toggle "～～" (da/drive-group "Mouth" "困惑2"))
                    (da/toggle "あわわ" (da/drive-group "Mouth" "あわわ"))
                )
                (da/submenu "喜楽"
                    (da/toggle "八重歯笑顔" (da/drive-group "Mouth" "八重歯笑顔"))
                    (da/toggle "八重歯あ" (da/drive-group "Mouth" "八重歯あ"))
                    (da/toggle "八重歯Λ" (da/drive-group "Mouth" "八重歯Λ"))
                )
                (da/submenu "喜楽"
                    (da/toggle "舌出し1" (da/drive-group "Mouth" "舌出し1"))
                    (da/toggle "舌出し2" (da/drive-group "Mouth" "舌出し2"))
                    (da/toggle "舌出し3" (da/drive-group "Mouth" "舌出し3"))
                    (da/toggle "円" (da/drive-group "Mouth" "円"))
                    (da/toggle "あー" (da/drive-group "Mouth" "あー"))
                    (da/toggle "はぁ" (da/drive-group "Mouth" "はぁ"))
                )
            )
            (da/submenu "顔"
                (da/toggle "ピンク" (da/drive-group "Cheeks" "ピンク"))
                (da/toggle "頬染め" (da/drive-group "Cheeks" "頬染め"))
                (da/toggle "紅潮" (da/drive-group "Cheeks" "紅潮"))
                (da/toggle "涙" (da/drive-switch "Tears"))
                (da/toggle "青ざめ" (da/drive-switch "Blue"))
                (da/toggle "がーん" (da/drive-switch "Shocked"))
            )
        )
    )
)
```
