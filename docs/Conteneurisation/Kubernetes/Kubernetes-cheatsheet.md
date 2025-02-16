
### abréviation 

You  can  use  po  when  you
mean pods or deploy when you mean deployment. To get the full list of supported short
names, you can run kubectl api-resources.

kubectl get po


## Obtenir delete 
```yaml
kubectl  delete  pod  hello-pod
```

# Logs 

## Obtenir des logs d'un pod 
```yaml
 kubectl logs hello-pod -c hello-container
```
