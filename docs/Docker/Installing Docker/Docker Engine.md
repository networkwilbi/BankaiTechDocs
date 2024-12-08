---
title: Installation
tags:
   - Docker
   - Docker Engine
   - Tutorial
keywords: [Docker, Docker Engine, Tutorial]
last_update:
  author: BankaiTech
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './styles.module.css';

<Tabs groupId="Install-Type" defaultValue="docker-engine">

  <TabItem value="docker-engine" label="Docker Engine">
Official Documentation can be found here. [Official Docs](https://docs.docker.com/engine/install/ubuntu/)

## Installation (Tab docker-engine)
First you should always update your system. You can do so by running the following command inside a Terminal.
```
sudo apt update && apt upgrade -y
```
Now lets check for conflicting packages.
```
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```
### Adding the Repository
The following command will setup Dockers `apt` repository.
```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
### Installing Docker Engine
Time to install Docker.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
### Test the Installation
You can test that Docker is running using this command.
```
sudo docker run hello-world
```
:::tip[My Tip]
I prefer using Docker-Compose(installed with Docker Engine with this tutorial). If you do not have `Docker Compose`, Install here [Docker-Compose](./Docker-Compose.md).

:::info

You still need to install the Docker Engine if you wish to use Docker-Compose

:::

  </TabItem>

  <TabItem value="docker-compose" label="Docker Compose">
:::note

If you already installed the [Docker Engine](./Docker%20Engine.md) from my other tutorial then you should already have `Docker Compose`.

:::
## Pre Install
Lets see if `Docker Compose is already installed.
```
docker compose version
```
If it is not already installed then continue following this tutorial below.

Lets make sure the system is updated by running,
```
sudo apt-get update
```
### Installing Docker Compose Plugin
:::info
`Docker Compose V2` uses `docker compose` to run.\
`Docker Compose V1` uses `docker-compoe` to run.
:::

Now lets install the `Docker Compose` plugin.
```
sudo apt-get install docker-compose-plugin
```

## Updating Docker Compose
```
sudo apt-get update
sudo apt-get install docker-compose-plugin
```
  </TabItem>
</Tabs>

<a href="https://www.buymeacoffee.com/BankaiTech"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a beer&emoji=🍺&slug=BankaiTech&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
