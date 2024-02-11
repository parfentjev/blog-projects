package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type Feed struct {
	Items []FeedItem
}

func NewFeed() *Feed {
	return &Feed{Items: make([]FeedItem, 0)}
}

func (f *Feed) GetNews(c *gin.Context) {
	c.JSON(http.StatusOK, f.Items)
}

func (f *Feed) PostNews(c *gin.Context) {
	var newItem PostNewsJSONBody
	if err := c.Bind(&newItem); err != nil {
		c.Status(http.StatusBadRequest)
		return
	}

	id := uuid.NewString()
	f.Items = append(f.Items, FeedItem{
		Id:       id,
		Title:    newItem.Title,
		Body:     newItem.Body,
		Breaking: newItem.Breaking,
	})

	c.Status(http.StatusCreated)
}
