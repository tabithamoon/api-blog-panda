# panda-img

This API returns a link to a file stored on Cloudflare R2 of a cute red panda,
accompanied by the author responsible for the image and the image's source, in JSON format.

```json
{
  "link": "https://files.tabby.page/pandas/panda-0003.jpg",
  "author": "Mathias Appel",
  "source": "Flickr"
}
```

Each GET request returns a different panda.

It is currently hosted as a Cloudflare Worker.

https://panda-img.api.tabby.page/

Made for use by my (soon to be) blog.

https://tabby.page

https://github.com/tabithamoon/blog
