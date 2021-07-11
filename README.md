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


## kubernetes config file
 - apiVersion: v1   -> in kubernetes we can create custome object or we can get default one using v1 value 
   kind: Pod        -> type of object here it is pod which will wrap our docker cantainer
   metadata:        -> with this we can add diffrent option to object we create 
     name: app      -> this use to give name to this pod after creating 
   spec:
     containers:
       - name: app
         image: nodejs-app
