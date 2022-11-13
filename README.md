# VALOBOARD

## 概要

## 制作背景

Valorant というゲームをしている時にチャットやボイスチャット暴言を吐かれた経験があり、せっかく楽しくゲームをしていたのに台無しになってしまいました。自分と同じ経験をしている人は多くいるのではないかと思い、穏やかな人のみとつながれるサービスを作ろうと思いました。
具体的には、他のユーザーからの評価を可視化することで各ユーザーの民度を表し暴言などが嫌な方は穏やかな人のみとつながれるという仕組みです。

#### デプロイ先

https://voloboard.herokuapp.com/

#### テストアカウント

アカウント名　太郎#0001
email aaa@gmail.com
password aaiiuueeoo

---

## 機能一覧

-   会員登録機能
-   マイページ編集
-   プレイヤー検索
-   他プレイヤーの評価

#### 展望

-   フレンド申請リスト

---

## 使用技術

#### フロントエンド

-   React

#### バックエンド

-   Laravel9

#### その他

-   Docker
-   MySQL

---

## データベース

| テーブル名 |                                   説明                                    |
| :--------: | :-----------------------------------------------------------------------: |
|   users    |                             一般ユーザー情報                              |
|   ranks    | ユーザーのゲーム内ランクの情報 （ランクとはゲーム内の強さの指標である。） |
|   roles    |                 ユーザーの得意とするゲーム内の役割の情報                  |
|  stances   |                  ユーザーのゲームのプレイスタイルの情報                   |
|   morals   |                  ユーザーの他のユーザーからの評価の情報                   |

<img width="900" alt="ER図" src="https://user-images.githubusercontent.com/109267974/201508016-a5dededb-b7e6-4e5a-8d45-df503d33f840.jpg">

---

## 環境の立ち上げ方

このリポジトリをクローン後、下記の内容を実行
//reviewsite2-laravel9-react-docker で下記を実行

＄ sail up -d

4. マイグレーション
   //reviewsite2-laravel9-react-docker で下記を実行
   $ sail artisan migrate
   $ sail artisan db:seed

5. composer、node.js のインストール
   $composer install
$npm install

6.ローカルでアプリケーションを起動
$ sail up -d
$ npm run dev
// localhost にアクセスするとプレビューが確認できる

#### docker の停止

// docker コンテナの停止
$ sail stop

// docker コンテナの削除
$ sail down
