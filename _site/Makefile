SHELL := /bin/bash
NPM := npm
VENDOR_DIR := assets/vendor
JEKYLL := jekyll

PROJECT_DEPS := package.json

install:
	$(NPM) install

update:
	$(NPM) update

include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	cp node_modules/jquery/dist/jquery.min.js $(VENDOR_DIR)
	cp node_modules/popper.js/dist/umd/popper.min.js $(VENDOR_DIR)
	cp node_modules/bootstrap/dist/js/bootstrap.min.js $(VENDOR_DIR)

build: include-npm-deps
	$(JEKYLL) build

serve: include-npm-deps
	JEKYLL_ENV=production $(JEKYLL) serve

# generate-githubpages
build-site:
	rm -fr build && JEKYLL_ENV=production $(JEKYLL) build --baseurl https://ibw.netlify.app -d build/ && touch build/.nojekyll
