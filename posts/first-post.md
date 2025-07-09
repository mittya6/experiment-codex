---
title: "Javaの基本"
date: "2024-01-01"
---


Javaは、**オブジェクト指向**の特徴を持つ、**汎用的でクロスプラットフォーム**なプログラミング言語です。WebアプリケーションやAndroidアプリ、業務システムなど、さまざまな分野で活用されています。

このページでは、Javaの基本的な特徴や、プログラムの書き方を初歩から紹介します。

---

# Javaとは？

Javaは1995年に登場した言語で、以下の特徴があります：

* **オブジェクト指向**：コードを「オブジェクト」としてまとめて管理できる
* **一度書けばどこでも動く**（Write Once, Run Anywhere）
* **静的型付け言語**：変数の型を明示的に指定する必要がある
* **ガベージコレクション**によりメモリ管理が自動化されている

---

# Javaプログラムの構成

Javaでは、基本的にすべてのコードは**クラス**の中に書きます。そして、実行時には `main` メソッドから処理が始まります。

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

## 各部分の説明

| パーツ                                      | 意味                     |
| ---------------------------------------- | ---------------------- |
| `public class HelloWorld`                | `HelloWorld` というクラスの定義 |
| `public static void main(String[] args)` | 実行時に最初に呼び出されるメソッド      |
| `System.out.println("Hello, world!");`   | コンソールに文字を表示する命令        |

---

# Javaの基本文法

## コメント

```java
// これは1行コメント

/*
  これは複数行の
  コメントです
*/
```

## 変数の定義

```java
int number = 10;
String name = "Java";
double pi = 3.14;
```

## データ型の一例

| 型         | 説明  | 例                       |
| --------- | --- | ----------------------- |
| `int`     | 整数  | `int x = 5;`            |
| `double`  | 小数  | `double pi = 3.14;`     |
| `boolean` | 真偽値 | `boolean isOk = true;`  |
| `String`  | 文字列 | `String msg = "Hello";` |

---

# コンパイルと実行方法

Javaのコードは次のようにコンパイルして実行します。

```sh
javac HelloWorld.java   # コンパイル
java HelloWorld         # 実行
```

`javac` で `.class` ファイルが生成され、`java` コマンドでそれを実行します。

---

# おわりに

この記事ではJavaの概要と最も基本的な文法を紹介しました。次回は、Javaの核ともいえる「オブジェクト指向」について解説します。

次の記事 👉 [オブジェクト指向](./2024-02-01-オブジェクト指向.md)
