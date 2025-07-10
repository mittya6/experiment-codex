---
title: "シートやブックの操作：複数ファイルを自在に扱う"
date: "2024-10-01"
---

# シートやブックの操作とは？

VBAでは、Excelの「シート」や「ブック（ファイル）」を自由に操作できます。業務では複数のシートを移動・複製したり、別ファイルからデータを取得したりすることがよくあります。

ここでは、基本的なシート・ブックの操作方法を紹介します。

# シートの操作

## シートの名前を取得・変更

```vba
' 現在のシート名を取得
MsgBox ActiveSheet.Name

' シート名を変更
Sheets("Sheet1").Name = "売上集計"
```

## シートの選択とアクティブ化

```vba
Sheets("売上集計").Select
Sheets(2).Activate  ' インデックス番号でも可
```

## 新しいシートを追加

```vba
Sheets.Add After:=Sheets(Sheets.Count)  ' 最後に追加
```

## シートの削除（確認メッセージを出さない）

```vba
Application.DisplayAlerts = False
Sheets("削除対象").Delete
Application.DisplayAlerts = True
```

# ブックの操作

## ブックの開閉

```vba
Dim wb As Workbook
Set wb = Workbooks.Open("C:\\data\\report.xlsx")

wb.Close SaveChanges:=True  ' 保存して閉じる
```

## 新規ブックの作成

```vba
Workbooks.Add
```

## アクティブなブックやシートの取得

```vba
Dim wb As Workbook
Set wb = ActiveWorkbook

Dim ws As Worksheet
Set ws = ActiveSheet
```

# ブックをまたいでセルにアクセス

```vba
Dim wb As Workbook
Set wb = Workbooks.Open("C:\\data\\summary.xlsx")

wb.Sheets("集計").Range("A1").Value = "データ取り込み完了"
```

# 開いているすべてのブックを処理する

```vba
Dim wb As Workbook
For Each wb In Workbooks
    Debug.Print wb.Name
Next wb
```

# 名前を指定してブックやシートにアクセス

```vba
Workbooks("report.xlsx").Sheets("2025年7月").Range("B2").Value = 50000
```

# 保存と名前を付けて保存

```vba
ActiveWorkbook.Save
ActiveWorkbook.SaveAs "C:\\backup\\report_backup.xlsx"
```

# まとめ

* シートやブックは `Sheets` / `Workbooks` で操作できる
* 名前やインデックスで参照可能
* 別ファイルの読み書きも自由自在

次回は、\*\*「ユーザーフォームの基本」\*\*について学び、GUIで入力を受け取る方法を紹介します。
