#!/bin/bash

echo test

echo $1 $2 $3 $4 >> yen.txt
cat yen.txt

node wpm.js $5 $2 $3
