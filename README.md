# demo-docker-express

demo repo of putting express app inside docker

github repo: https://github.com/beenotung/demo-docker-express

docker hub repo: https://hub.docker.com/repository/docker/aabbcc1241/demo-express

## Run with docker-compose directly

```bash
docker-compose up
```

Wait for some time, you should see below message:
```
listening to Port: 8080
```

Then you can open the browser at http://localhost:8080/

You should see a json message displayed on the browser as below:
```json
{"message":"hello, world"}
```

## Build docker image for customizable container deployment

## build docker image
```bash
docker image build --tag demo-app:1.0 .
```

### export docker image into file
```bash
docker image save demo-app:1.0 > image.tar
```

### compress image file
```bash
xz -k image.tar
```

(transfer to other machine if needed)

### uncompress image file
```bash
unxz -k image.tar.xz
```

### import image
```bash
docker image load < image.tar
```
