# Server

Dummy API server written with Go and Gin.

## Codegen

First, install the oapi-codegen tool:

```shell
go install github.com/deepmap/oapi-codegen/v2/cmd/oapi-codegen@latest
```

Then use it to generate the server code and data structures:

```shell
oapi-codegen -package api -generate spec,types,gin -o api/server.gen.go ../openapi.yaml
```

For more details, please refer to [the official documentation](https://github.com/deepmap/oapi-codegen) and [examples](https://github.com/deepmap/oapi-codegen/tree/master/examples/petstore-expanded/gin).

## Run

```shell
go mod download
go run .
```
