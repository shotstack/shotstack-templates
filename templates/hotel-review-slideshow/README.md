# Hotel Review Highlights

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 30s · **Format:** mp4 · **Category:** Travel

![Hotel Review Highlights preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/7c92f70b_7d64_4e6d_bd83_d05e823af36d_poster_3f55823edc.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/hotel-review-slideshow/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/hotel-review-slideshow
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
hotel_image_main,hotel_image_1,hotel_image_2,hotel_image_3,hotel_image_4,hotel_image_5,hotel_image_6,hotel_image_7,hotel_name,testimonial_1,testimonial_1_author,testimonial_2,testimonial_2_author,testimonial_4,testimonial_4_author,testimonial_5,testimonial_5_author
```

| Field | Default value |
| --- | --- |
| `HOTEL_IMAGE_MAIN` | https://templates.shotstack.io/hotel-review-slideshow/b99368b8-1e49-423a-bd2a-a807560d8da6/source.jpg |
| `HOTEL_IMAGE_1` | https://templates.shotstack.io/hotel-review-slideshow/8f05d8ae-b13c-4038-be46-b06c3e59f6ac/source.jpg |
| `HOTEL_IMAGE_2` | https://templates.shotstack.io/hotel-review-slideshow/c5b4b3a0-650f-4d57-bbee-8fbb7c98628e/source.jpg |
| `HOTEL_IMAGE_3` | https://templates.shotstack.io/hotel-review-slideshow/7610f4f9-30fe-4779-94eb-077e89c62d66/source.jpg |
| `HOTEL_IMAGE_4` | https://templates.shotstack.io/hotel-review-slideshow/4356ceb1-7ad2-4588-a061-5b667f35c18f/source.jpg |
| `HOTEL_IMAGE_5` | https://templates.shotstack.io/hotel-review-slideshow/b12530ac-b32f-4f19-b0e1-c8e721b77228/source.webp |
| `HOTEL_IMAGE_6` | https://templates.shotstack.io/hotel-review-slideshow/58abe79a-f11b-400a-bdb3-ddf56bf68cee/source.jpg |
| `HOTEL_IMAGE_7` | https://templates.shotstack.io/hotel-review-slideshow/898cdb79-a38c-4e9a-b0c5-d5a921995a42/source.jpg |
| `HOTEL_NAME` | Grand Pacific Hotel |
| `TESTIMONIAL_1` | The room was clean and the breakfast is good |
| `TESTIMONIAL_1_AUTHOR` | Kim, Thailand |
| `TESTIMONIAL_2` | Staff were very accommodating |
| `TESTIMONIAL_2_AUTHOR` | Charles, Australia |
| `TESTIMONIAL_4` | Highly recommended. I would definitely stay here again! |
| `TESTIMONIAL_4_AUTHOR` | Gabe, United Kingdom |
| `TESTIMONIAL_5` | Great experience. Strongly recommended |
| `TESTIMONIAL_5_AUTHOR` | Peter, United States |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
