# Kindle Bookshelf exporter

amazon.co.jp の Kindle 電子書籍と、ライブラリに登録したサンプル本の一覧を CSV / JSON でエクスポートするツールです。

出力した CSV には `originType` と `sample` 列、JSON には `originType` と `isSample` を含めます。`sample: true` / `isSample: true` の行がサンプル本です。

## Chromeへの読み込み

1. Chromeで `chrome://extensions` を開き、「デベロッパーモード」を有効にします。
2. 「パッケージ化されていない拡張機能を読み込む」を選び、このリポジトリのフォルダを指定します。
3. ツールバーの拡張機能アイコンから実行し、Amazonにログイン済みの状態で一覧をJSONまたはCSVで出力します。

Chrome Manifest V3に対応しています。

## Icon

[Bookshelf - Free education icons](https://www.flaticon.com/free-icon/bookshelf_1703124)
