# webpack_for_webdesign

webpackを使って、pug、scss、typescriptのコンパイル、画像の圧縮、コードの整形、Lint、webpach-dev-server、ソースマップの生成、公開時の不要ファイルの削除、コードのminifyができます。

## 準備
1. git cloneして、フォルダの中に入ります。
2. ターミナルでnpm ciを実行して必要なパッケージをダウンロードしてください。
3. srcフォルダの中にコンパイルしたいファイルを格納します。

## 使用
- Build：ターミナルでnpm run build(productionビルド)、npm run dev(developmentビルド)、npm run watch(ファイル更新を監視してのdevelopmentビルド)
- webpack-dev-server: ターミナルでnpx webpack-dev-serverと打ってください
- Lint：ターミナルでnpx eslint src/**/*.ts --fix(TypeScript)、src/**/*.js --fix(JavaScriptScript)npx stylelint src/scss/**.scss --fix(SCSS),stylelint src/css/**.css --fix(CSS)と打ってください。


## 変更
各種設定ファイルは必要に応じて変更してください。

## その他
詳しい説明は[こちらで確認できます。](https://qiita.com/takeshisakuma/items/e1ba5dbe052c6194bb79)
