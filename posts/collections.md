---
title: "セル・範囲の操作：データの読み書きをマスターしよう"
date: "2024-09-01"
---

# セル・範囲の操作とは？

VBAでは、Excelのセルや範囲に直接アクセスして、**データの読み書きや書式設定**が行えます。業務の自動化やレポート作成など、あらゆるシーンで基本となる重要なテクニックです。

ここでは、代表的なセル操作を紹介します。

# セルへの書き込み（Valueの設定）

## 単一セルに文字や数値を入れる

```vba
Range("A1").Value = "こんにちは"
Cells(1, 2).Value = 100  ' B1に100を入力
```

* `Range("A1")`：A1セルを参照
* `Cells(1, 2)`：1行2列 → B1セルを参照

## 複数セルに一括で入力する

```vba
Range("A1:A3").Value = "テスト"
```

すべてのセルに同じ値を設定できます。

# セルの読み取り

## セルの値を取得して変数に格納する

```vba
Dim msg As String
msg = Range("A1").Value
MsgBox msg
```

## 数値を加算する例

```vba
Dim total As Double
total = Cells(2, 3).Value + 100  ' C2にある値に100加算
```

# セルの書式設定

## フォントサイズや色の変更

```vba
With Range("A1")
    .Font.Size = 14
    .Font.Color = RGB(255, 0, 0) ' 赤文字
End With
```

## 背景色の変更

```vba
Range("A1").Interior.Color = RGB(204, 255, 204)  ' 薄緑
```

# 範囲のコピー・貼り付け

```vba
Range("A1:A3").Copy
Range("B1").PasteSpecial xlPasteValues  ' 値のみ貼り付け
Application.CutCopyMode = False  ' コピー状態解除
```

# 使用済み範囲の取得

```vba
Dim lastRow As Long
lastRow = Cells(Rows.Count, 1).End(xlUp).Row  ' A列の最終行を取得
```

# ループと組み合わせる

セルを1つずつ処理したい場合、繰り返し処理と組み合わせます。

```vba
Dim i As Integer
For i = 1 To 5
    Cells(i, 1).Value = i & "行目"
Next i
```

# まとめ

* `Range` や `Cells` を使ってセルを操作できる
* 値の読み書き、書式変更、コピー・貼り付けも可能
* 繰り返し処理と組み合わせれば柔軟なデータ操作ができる

次回は、\*\*「シートやブックの操作」\*\*を学び、複数のシートやファイルを扱えるようになりましょう。
