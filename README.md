## Dect Voip Station manager

 #### Sequence of operations


### SERVER installation
#### Included in this file 
`provisioningScript/install.sh`, run it on any debian machine, and it will set everything up for you.
- Make sure your machine is up and running, and connected to internet. **NOT** REQUIRED to run on local network.

First download the app on the server
- if git not installed install with

```
sudo apt-get install git -y
```

- Then clone the app from this repo, since it's public, no auth or permissions needed.

```
cd ~
git clone https://github.com/AmirTallap/website_screenshot_server.git
```

- Switch to master branch
```
cd website_screenshot_server
git checkout master
```

- Just make sure the provisioning folder scripts are executable!

```
sudo chmod -R +x ./provisioningScript/*
```
- Then

```
cd provisioningScript
sudo ./install.sh

```

- After that navigate to `<IP_ADDRESS>:3000/`


**Raspberry PI** 
This will work with Debian 11, which is the most common OS for Raspberry PI as of April 2023.
