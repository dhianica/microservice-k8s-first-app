# microservice-k8s-first-app
Starter pack application microservice express, typescript, docker, skaffold, minikube, and k8s


Before run it, the first we must setup minikube, skaffold and docker.
For the setup you can follow instructions in here: https://github.com/cheslijones/wsl2-minikube

After that,

#### 1. Clone repo
```
git clone https://github.com/dhianica/microservice-k8s-first-app.git
```

#### 2. Move directory
```
cd microservice-k8s-first-app
```

#### 3. Run Docker
```
sudo service docker start
```
_Notes: This command for Linux Debian_

#### 5. Move directory
```
cd be
```

#### 6. Run Minikube
```
minikube start --vm-driver=docker
```


#### 7. Run Skaffold
```
skaffold dev
```


_Notes: Recommended using WSL or another virtual machine_

