---
title: "条件分岐（If, Select Case）：処理を分けて書く方法"
date: "2024-06-01"
---
# 条件分岐とは？

条件分岐とは、**条件に応じて処理の流れを変える構文**です。たとえば、「数値が100以上なら合格、それ以外は不合格」というように、条件に応じた処理を記述できます。

VBAで使える主な条件分岐は以下の2つです：

* `If` 文：基本的な条件分岐
* `Select Case` 文：複数の条件をすっきり書ける

# If文の基本

最もよく使うのが `If` 文です。条件が `True` のときに、ある処理を実行します。

## 基本構文

```vba
If 条件 Then
    条件がTrueのときの処理
End If
```

## 例：点数が合格かどうかを判定

```vba
Sub CheckScore()
    Dim score As Integer
    score = 85

    If score >= 60 Then
        MsgBox "合格です！"
    End If
End Sub
```

# Elseで条件がFalseの場合を追加

```vba
If 条件 Then
    条件がTrueの処理
Else
    条件がFalseの処理
End If
```

## 例：合格／不合格の分岐

```vba
If score >= 60 Then
    MsgBox "合格"
Else
    MsgBox "不合格"
End If
```

# ElseIfで複数条件を分ける

```vba
If 条件1 Then
    処理1
ElseIf 条件2 Then
    処理2
Else
    その他の処理
End If
```

## 例：点数によって評価を変える

```vba
If score >= 80 Then
    MsgBox "優秀"
ElseIf score >= 60 Then
    MsgBox "合格"
Else
    MsgBox "不合格"
End If
```

# Select Case文の基本

`Select Case` を使うと、**複数の条件をすっきり書けて、読みやすくなります。**

## 構文

```vba
Select Case 評価対象
    Case 値1
        処理1
    Case 値2
        処理2
    Case Else
        その他の処理
End Select
```

## 例：曜日に応じてメッセージを出す

```vba
Sub ShowDayMessage()
    Dim day As String
    day = "水曜"

    Select Case day
        Case "月曜"
            MsgBox "今週も頑張ろう！"
        Case "金曜"
            MsgBox "あと少しで週末！"
        Case Else
            MsgBox "通常運転です。"
    End Select
End Sub
```

# 比較演算子一覧

条件式でよく使う「比較演算子」は以下のとおりです：

| 演算子 | 意味    | 例       |
| --- | ----- | ------- |
| =   | 等しい   | a = 10  |
| <>  | 等しくない | a <> 10 |
| >   | より大きい | a > 10  |
| <   | より小さい | a < 10  |
| >=  | 以上    | a >= 10 |
| <=  | 以下    | a <= 10 |

# まとめ

`If` 文は簡単な条件分岐に便利で、`Select Case` 文は条件が多くなる場合に読みやすくなります。どちらも処理の分岐に欠かせない構文です。

次回は、\*\*「繰り返し処理（For, Do While）」\*\*について学び、同じ処理を何度も自動で行う方法を見ていきましょう。
