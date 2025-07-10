---
title: "実務で役立つVBAサンプル集"
date: "2025-01-01"
---

# 実務で役立つVBAサンプル集

ここでは、実際の業務でよく使われるVBAの便利なサンプルを紹介します。日常のExcel作業を効率化するためのヒントとして、すぐに使えるコードをまとめました。

# 1. 最終行を自動で取得してデータを追加

```vba
Sub AddDataToLastRow()
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, 1).End(xlUp).Row + 1
    Cells(lastRow, 1).Value = "新しいデータ"
End Sub
```

# 2. シート内の空白行を削除

```vba
Sub DeleteBlankRows()
    Dim i As Long
    For i = Cells(Rows.Count, 1).End(xlUp).Row To 1 Step -1
        If Application.WorksheetFunction.CountA(Rows(i)) = 0 Then
            Rows(i).Delete
        End If
    Next i
End Sub
```

# 3. 指定フォルダ内のファイル名一覧を取得

```vba
Sub ListFileNames()
    Dim folderPath As String
    Dim fileName As String
    Dim i As Long
    folderPath = "C:\\data\\"
    fileName = Dir(folderPath & "*")
    i = 1

    Do While fileName <> ""
        Cells(i, 1).Value = fileName
        fileName = Dir
        i = i + 1
    Loop
End Sub
```

# 4. すべてのシートをPDFとして保存

```vba
Sub ExportSheetsAsPDF()
    Dim ws As Worksheet
    For Each ws In ThisWorkbook.Worksheets
        ws.ExportAsFixedFormat Type:=xlTypePDF, _
            Filename:=ThisWorkbook.Path & "\\" & ws.Name & ".pdf"
    Next ws
End Sub
```

# 5. 指定列の重複データを削除（先頭のみ残す）

```vba
Sub RemoveDuplicatesInColumnA()
    Range("A:A").RemoveDuplicates Columns:=1, Header:=xlNo
End Sub
```

# 6. 日付が今日の行だけ色をつける

```vba
Sub HighlightTodayRows()
    Dim i As Long
    For i = 2 To Cells(Rows.Count, 1).End(xlUp).Row
        If Cells(i, 1).Value = Date Then
            Rows(i).Interior.Color = RGB(255, 255, 153) ' 薄い黄色
        End If
    Next i
End Sub
```

# 7. マクロ実行時に確認メッセージを表示

```vba
Sub ConfirmBeforeRun()
    Dim ans As VbMsgBoxResult
    ans = MsgBox("実行してよろしいですか？", vbYesNo + vbQuestion)
    If ans = vbYes Then
        MsgBox "処理を開始します"
    Else
        MsgBox "キャンセルされました"
    End If
End Sub
```

# まとめ

VBAは「実務の自動化・効率化」に非常に役立つツールです。ここで紹介したコードは、ほんの一例ですが、どれも業務の中でよく出てくる場面を想定しています。

必要に応じてカスタマイズして、自分用のツールに仕上げていくのがおすすめです。

他にも作りたい処理があれば、ぜひ相談してください。
