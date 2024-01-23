package main

import (
	"github.com/gin-gonic/gin"
	middleware "github.com/oapi-codegen/gin-middleware"
	"github.com/parfentjev/blog-projects/codegen/server/api"
)

func main() {
	swagger, err := api.GetSwagger()
	if err != nil {
		panic(err)
	}

	engine := gin.Default()
	engine.Use(middleware.OapiRequestValidator(swagger))
	api.RegisterHandlers(engine, api.NewFeed())
	engine.Run()
}
