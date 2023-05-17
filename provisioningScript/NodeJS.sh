#! /bin/bash

#Installing nodeJS NPM
sudo apt update
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y 

sudo apt install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y Node.js
sudo apt-get install chromium -y
cd ~/website_screenshot_server
npm install