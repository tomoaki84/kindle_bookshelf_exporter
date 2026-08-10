.PHONY: firefox chrome

SOURCE = icon@*.png content.js background.js manifest.json

build: firefox chrome

firefox: $(SOURCE)
	web-ext build

chrome: $(SOURCE)
	rm web-ext-artifacts/kindle_bookshelf_exporter-chrome.zip
	zip -r web-ext-artifacts/kindle_bookshelf_exporter-chrome.zip $(SOURCE)
