#!/bin/bash

echo " > deleteing dist..."
rm -rf dist
echo " > running webpack (webpack.config.js)"
webpack --config webpack.config.js
echo " > copying index.html to dist"
cp index.html dist
echo " > copying README.md to dist"
cp README.md dist
echo " > deleting charlesTemp"
rm -rf ../charlesTemp
echo " > creating charlesTemp"
mkdir ../charlesTemp
echo " > copying dist in charlesTemp"
cp dist/* ../charlesTemp
echo " > checking out to master branch"
git checkout master
echo " > deleting exisitng index.html & bunle.js and README.md"
rm -f index.html bundle.js README.md
echo " > moving charlesTemp content to base folder"
mv ../charlesTemp/* .
echo " > deleting charlesTemp"
rm -rf ../charlesTemp
echo ' > DONE!'

# "up": "rm -rf dist && webpack --config webpack.config.js && cp index.html dist && cp README.md dist && rm -rf ../charlesTemp && mkdir ../charlesTemp && cp dist/* ../charlesTemp && git checkout master && rm -f index.html bundle.js README.md && mv ../charlesTemp/* . && rm -rf ../charlesTemp && echo 'DONE!'"
