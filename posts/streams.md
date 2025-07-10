---
title: "ユーザーフォームの基本：入力画面を作ってみよう"
date: "2024-11-01"
---

# ユーザーフォームとは？

ユーザーフォーム（UserForm）は、**GUI（グラフィカル・ユーザー・インターフェース）を使って、ユーザーからの入力や操作を受け付ける画面**を作成できる機能です。

テキストボックスやボタン、リストボックスなどのコントロールを配置して、より直感的なツールを作ることができます。

# ユーザーフォームの作成手順

## 1. ユーザーフォームの追加

1. `Alt + F11` でVBEを開く
2. メニューの「挿入」→「ユーザーフォーム」をクリック
3. `UserForm1` が作成され、ツールボックスが表示される

## 2. コントロールの配置

ツールボックスから以下のようなコントロールをドラッグしてフォーム上に配置します：

* Label（ラベル）
* TextBox（テキストボックス）
* CommandButton（ボタン）

## 3. コントロールのプロパティを設定

右側の「プロパティウィンドウ」で、各コントロールの `Name` や `Caption`（表示名）を変更できます。

例：

* TextBox1 → `txtName`
* CommandButton1 → `btnSubmit`
* Caption → 「登録」「キャンセル」など

# 簡単なユーザーフォームの例

名前を入力して、メッセージを表示するフォームを作ってみましょう。

## フォームの設計

1. Label：「名前を入力してください」
2. TextBox：`txtName`
3. CommandButton：`btnSubmit`、Caption を「送信」

## ボタンのクリック時の処理

フォーム上のボタンをダブルクリックして、以下のコードを記述します：

```vba
Private Sub btnSubmit_Click()
    Dim name As String
    name = txtName.Value
    MsgBox name & "さん、ようこそ！"
End Sub
```

# ユーザーフォームを表示するコード

標準モジュールに以下のコードを記述して、フォームを表示します：

```vba
Sub ShowForm()
    UserForm1.Show
End Sub
```

# 入力内容をワークシートに反映させる例

```vba
Private Sub btnSubmit_Click()
    Dim name As String
    name = txtName.Value
    Sheets("名簿").Range("A1").Value = name
    Unload Me  ' フォームを閉じる
End Sub
```

# フォームの閉じ方

* `Unload Me`：フォームを閉じる
* `Me.Hide`：フォームを非表示にする（あとで再表示可能）

# まとめ

ユーザーフォームを使えば、VBAで**見た目のあるツール**を作成できます。ユーザーの操作を前提とした処理や、入力ミスを減らすUIの構築に役立ちます。

次回は、\*\*「例外処理とデバッグ」\*\*について学び、エラーに強いコードを書く方法を紹介します。
