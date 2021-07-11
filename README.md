# nodejs-docker-kubernetes-setup


## Docker commands <br>
 - build -> docker build -t [projectname] [location] :0.0.1  &nbsp;&nbsp;&nbsp;&nbsp; ( 00.1 -> version number , to build image)<br> 
 - run   -> docker run -it -p 8080:3000 [projectname]    &nbsp;&nbsp;&nbsp;&nbsp;(-p -> port 8080 -> outer system 3000-> internal system , to run)

## image 
- is like blueprint to created container 


## Run kubernets config
 - kubectl apply -f config.yaml

## To get number pods running currently
 - kubectl get pods

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
