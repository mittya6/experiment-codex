---
title: "繰り返し処理（For, Do While）：反復処理で効率化"
date: "2024-07-01"
---



# 繰り返し処理とは？

繰り返し処理（ループ処理）とは、**同じ処理を何度も繰り返し実行するための仕組み**です。

「1〜10まで順番に表示する」「表の各行に同じ処理をする」といったケースで活躍します。

VBAでは、主に以下の2種類のループを使います：

* `For` 文：繰り返す回数が決まっているとき
* `Do While` 文：条件を満たす間だけ繰り返す

# For文の基本

`For` 文は、「●回繰り返す」というように、**回数が決まっている処理**に適しています。

## 基本構文

```vba
For カウンタ = 開始値 To 終了値
    繰り返したい処理
Next カウンタ
```

## 例：1から5を表示する

```vba
Sub ShowNumbers()
    Dim i As Integer
    For i = 1 To 5
        MsgBox i
    Next i
End Sub
```

## Stepで増分を変更する

```vba
For i = 1 To 10 Step 2  ' 1, 3, 5, 7, 9 と増える
```

# Do While文の基本

`Do While` 文は、**条件が真（True）の間、処理を繰り返す**ループです。回数が決まっていないときに使います。

## 基本構文

```vba
Do While 条件
    繰り返したい処理
Loop
```

## 例：変数が5未満の間、繰り返す

```vba
Sub CountUp()
    Dim num As Integer
    num = 1

    Do While num < 5
        MsgBox num
        num = num + 1
    Loop
End Sub
```

# Do Untilとの違い

`Do Until` は、**条件が偽（False）になるまで繰り返す**構文です。

```vba
Do Until 条件
    処理
Loop
```

`Do While` と `Do Until` は反対の動作をします。

# 無限ループに注意

条件が永遠に変化しない場合、ループが終わらなくなることがあります。

```vba
Do While True
    ' このままだと終わらない！
Loop
```

実行時に止まらなくなった場合は `Esc` キーで中断しましょう。

# 繰り返しとセルの操作

繰り返し処理は、セルの操作と組み合わせるととても便利です。

## 例：A1〜A5に「テスト」と入力する

```vba
Sub FillCells()
    Dim i As Integer
    For i = 1 To 5
        Cells(i, 1).Value = "テスト"
    Next i
End Sub
```

* `Cells(i, 1)` は、A列のi行目を指します（例：Cells(1,1) → A1）

# まとめ

繰り返し処理は、同じ処理を効率よく行うために欠かせないテクニックです。

* 回数が決まっている → `For`
* 条件によって続ける → `Do While`, `Do Until`

次回は、\*\*「配列の使い方」\*\*について学び、複数のデータをまとめて扱う方法を紹介します。
