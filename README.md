# demo-docker-express-cluster

Demo repo of putting express app inside docker,
and connect that container from other container using docker-provided virtual network

github repo: https://github.com/beenotung/demo-docker-express-cluster

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
{
  "message": "hello, world",
  "portInContainer": "9090",
  "hasSeenWorker": true
}
```

## Build docker image for customizable container deployment

### build docker image
```bash
docker image build --tag demo-app:1.0 main
```

### export docker image into file
```bash
docker image save demo-app:1.0 > image.tar
```

### compress image file
```bash
xz -k -T0 image.tar
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
