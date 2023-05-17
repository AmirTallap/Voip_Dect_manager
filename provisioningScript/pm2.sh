#! /bin/bash
echo "OK";
cd ~/website_screenshot_server

sudo npm install pm2 -g
sudo pm2 start pm2-process.json
sudo pm2 startup
sudo pm2 save

mkdir ScreenShots