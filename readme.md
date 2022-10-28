# Imagem de servidor NodeJS + ExpressJS com DOCKER
Com o docker devidamente instalado
- Fazer o build da imagem:
```
docker build -t node-express-img .
```

- Rodar a imagem
```
docker run -d -p 3000:3000 --name node-express node-express-img
```

Feito! Servidor express rodando na porta 3000.