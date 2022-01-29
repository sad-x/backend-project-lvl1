install: 
	npm ci

a:
	git version

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run