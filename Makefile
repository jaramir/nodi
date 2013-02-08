MOCHA = node_modules/.bin/mocha

test: node_modules
	@$(MOCHA)

install: node_modules

node_modules:
	npm install

clean:
	rm -r node_modules

.PHONY: test install clean
