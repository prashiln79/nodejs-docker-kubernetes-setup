# nodejs-docker-kubernetes-setup


## Docker commands <br>
 - build -> docker build -t [projectname] [location] :0.0.1  &nbsp;&nbsp;&nbsp;&nbsp; ( 00.1 -> version number , to build image)<br> 
 - run   -> docker run -it -p 8080:3000 [projectname]    &nbsp;&nbsp;&nbsp;&nbsp;(-p -> port 8080 -> outer system 3000-> internal system , to run)

## image 
- is like blueprint to created container 

## docker command
- docker build -t name - to create image base on config in current directive 
- docker run img-name - to create container from image and start
- docekr run -it img-name  - to run and override default containers
- docker ps - give list of all running container
- docker exec -it [contaier id] [cmd] - execute given cmd in running container
- docker logs [container id] - print out log from the given container

## kubernets command ( Yaml is a json obj without curly braces)
 - kubectl apply -f config.yaml   - Run kubernets config to create object | to process config file
 - kubectl get pods - To get number pods running currently
 - kubectl exec -it [prod_name] [cmd] - to execute give cmd in a running pod | sh shell inside container
 - kubectl logs [pod_name] - print out logs from the given pod
 - kubectl delete pod [pod_name] - delete given pod
 - kubectl describe pod [pod_name] - print out info about the runnning pod

## kubernets command deployment
 - kubectl get deployments  - list of all running deployemnt 
 - kubectl describe deployment [name]
 - kubectl delete deployment [name] 


## if version number is given to image, kuberbetes try to find that on local first then on repo(doker hub)


## kubernetes config file
 - apiVersion: v1   -> in kubernetes we can create custome object or we can get default one using v1 value <br>
 - kind: Pod        -> type of object here it is pod which will wrap our docker container <br>
 -   metadata:        -> with this we can add diffrent option to object we create  <br>
 -    name: app      -> this use to give name to this pod after creating  <br>
 -    spec:          -> configuration option to pod  | what is going inside pod & how it should behave <br>
 -    containers:    -> array of pods | number of container inside our pod | - dash means we want this to b array entitiy in yaml <br>
 --      - name: app   -> name to container <br>
 --        image: nodejs-app - img name of container whc we build intiale <br>


## deployment object is use to manange diffrent pods ( as any time if a pod is down it can restart and keep it alive) 
 

## we need to rebuild img file what we created previouly in that same diractive if we made some code changes and reapplay config

## kubectl rollout restart deployment [name] -- to update deployment whc require img to push on docker server

## services object - to setup communincation beetween our pots

## Type of services
 - cluster IP - set up an easy to remember URL to access pod by other pods inside the cluster
 - Node Port - make pod accessible from outside the cluster for dev purpose (random port assign to access)
 - load Balancer - make a pod accessible from outside the cluster 
 - External name - redirect an in-cluster reuest to a CName url

## ingress-nginx 
- project that will create a load balancer service + an ingress for us 

## similar project kubernetes-ingress
 
## Skaffold - make many task automates in kubernates dev environment

