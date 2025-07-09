---
title: "オブジェクト指向"
date: "2024-02-01"
---

---


# オブジェクト指向とは？

オブジェクト指向（Object-Oriented Programming, OOP）は、現実世界を模倣して\*\*「オブジェクト（物）」を中心にプログラムを組み立てる考え方\*\*です。Javaはオブジェクト指向を基本とした言語で、クラスやインスタンスを使ってコードを構成します。

---

# 基本の4つの概念

## 1. クラスとインスタンス

* **クラス**：設計図。オブジェクトの共通する性質（変数）や振る舞い（メソッド）を定義します。
* **インスタンス**：設計図から実際に作られたモノ。

```java
class Dog {
    String name;
    void bark() {
        System.out.println(name + "がワン！と鳴いた。");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();  // インスタンス生成
        dog.name = "ポチ";
        dog.bark();
    }
}
```

## 2. カプセル化（Encapsulation）

データ（変数）と振る舞い（メソッド）を**1つのまとまりとして隠蔽**すること。アクセス修飾子（`private`, `public`など）を使います。

```java
class Account {
    private int balance;

    public void deposit(int amount) {
        if (amount > 0) balance += amount;
    }

    public int getBalance() {
        return balance;
    }
}
```

## 3. 継承（Inheritance）

**親クラスの機能を子クラスに引き継ぐ**ことで、再利用性が高まります。

```java
class Animal {
    void eat() {
        System.out.println("食べる");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("ワン！");
    }
}
```

## 4. ポリモーフィズム（Polymorphism）

**同じメソッド名でも異なる動作を実現できる**仕組み。オーバーライドやインターフェースで実現します。

```java
class Animal {
    void speak() {
        System.out.println("何か話す");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("ニャー");
    }
}
```

---

# オブジェクト指向のメリット

* 再利用性が高くなる（＝保守しやすい）
* 現実世界のモデリングがしやすい
* チーム開発で役割を分担しやすい

---

# まとめ

オブジェクト指向はJavaを理解するうえで最も重要な考え方です。クラス、インスタンス、継承、カプセル化、ポリモーフィズムといった概念を意識してコードを書きましょう。

次の記事 👉 [条件分岐](./2024-03-01-条件分岐.md)
