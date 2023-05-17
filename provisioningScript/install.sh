#! /bin/bash
# installing git
    sudo apt-get install git -y
# Installing NodeJS
    ./spin.sh ./NodeJS.sh
    
# Installing MongoDB
    ./spin.sh ./MongoDB.sh

# Managing Firewall NodeJS
    ./spin.sh ./ufw.sh


# Installing pm2
./spin.sh ./pm2.sh