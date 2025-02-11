# teste_sre

Build, Push, K8s

docker build -t dockerhub/math-api:latest  

docker push dockerhub/math-api:latest  

kubectl apply -f deployment.yaml  

kubectl get pods  

kubectl get svc  

kubectl delete -f deployment.yaml
