all: compile build

compile: 
	npm install

build: build-server build-client build-style 

build-server:

	./node_modules/.bin/tsc server/**/*.ts server/*api.ts -m commonjs

build-style:

	./node_modules/.bin/lessc style/less/index.less style/css/index.css

build-client:

	./node_modules/.bin/tsc client/**/*.ts client/*api.ts -m commonjs
