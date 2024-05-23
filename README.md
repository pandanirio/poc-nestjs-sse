# POC SSE NestJS

## Install 

```shell
yarn
```

## Run 

```shell
yarn start:dev
```

## Usage

Start first terminal with listener CURL request : 

```shell
curl http://localhost:3000/stream
```

Send data from another terminal : 

```shell
curl -X POST http://localhost:3000/send -H "Content-Type: application/json" -d '{"message":"Hello world!"}'
```