#! /bin/bash

# sudo chown -R admin:admin `pwd`/ufw.sh
sudo chmod -R 777 ./ufw.sh

echo "Enabling the firewall..."

echo "y" | sudo ufw enable


# #Allowing NodeJS
sudo ufw allow 3000

# #Allowing StreamingPort
sudo ufw allow 8554

