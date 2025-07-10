---
title: "プロシージャと関数：処理をまとめて再利用する"
date: "2024-08-01"
---

# プロシージャと関数とは？

VBAでは、よく使う処理を**ひとまとまりにして定義**し、何度でも呼び出せるようにできます。

この「処理のかたまり」を作る仕組みが、

* **プロシージャ（Sub）**：結果を返さない処理
* **関数（Function）**：結果（値）を返す処理
  です。

処理を分けて書くことで、**コードの見通しが良くなり、再利用や保守がしやすくなります。**

# プロシージャ（Sub）の基本

プロシージャは、特定の処理をまとめておき、必要なときに呼び出して使います。

## 書き方

```vba
Sub プロシージャ名()
    ' 処理内容
End Sub
```

## 例：あいさつメッセージを表示する

```vba
Sub SayHello()
    MsgBox "こんにちは！"
End Sub
```

## 呼び出し方

他のプロシージャから呼び出すことができます。

```vba
Sub Main()
    SayHello
End Sub
```

# 引数付きのプロシージャ

引数を使えば、呼び出し時に値を渡せます。

```vba
Sub GreetUser(name As String)
    MsgBox name & "さん、ようこそ！"
End Sub
```

```vba
Sub Main()
    GreetUser "山田"
End Sub
```

# 関数（Function）の基本

関数は、処理の結果として**値を返す**点がプロシージャと異なります。

## 書き方

```vba
Function 関数名(引数) As データ型
    ' 処理
    関数名 = 戻り値
End Function
```

## 例：2つの数の合計を返す関数

```vba
Function AddNumbers(a As Integer, b As Integer) As Integer
    AddNumbers = a + b
End Function
```

```vba
Sub Main()
    Dim result As Integer
    result = AddNumbers(5, 3)
    MsgBox result   ' 8 と表示
End Sub
```

# 関数はセルからも使える

定義した関数は、Excelのセル関数として使うこともできます（ユーザー定義関数、UDF）。

## 例：関数をセルから使う

1. Functionを標準モジュールに記述
2. Excelのセルに `=AddNumbers(5,3)` と入力 → 結果として `8` が表示される

# まとめ

* **Sub（プロシージャ）**：処理をまとめて使い回す
* **Function（関数）**：値を返す処理
* どちらも、コードをシンプルに保ち、再利用しやすくします

次回は、\*\*「パッケージとimport」\*\*の考え方を学び、コードの整理と再利用性をさらに高めていきます。
