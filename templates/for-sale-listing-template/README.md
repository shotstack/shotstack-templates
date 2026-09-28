# For Sale Listing Template - Showcase Your Home

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![For Sale Listing Template - Showcase Your Home preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/For_Sale_Listing_Template_Showcase_Your_Home_33a086eee6.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/for-sale-listing-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/for-sale-listing-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_heading,s1_description,text_font_color,text_font_color2,street,text_font_color3,city_state,price status,beds,baths,sqft,agent_name,partner,phone_number,email,website,logo1,logo2,agent_pic,house_image_rightside,house_image_front,background_image_src
```

| Field | Default value |
| --- | --- |
| `S1_HEADING` | JUST |
| `S1_DESCRIPTION` | Listed |
| `TEXT_FONT_COLOR` | #b54f4f |
| `TEXT_FONT_COLOR2` | #0f1829 |
| `STREET` | 123 Main Street |
| `TEXT_FONT_COLOR3` | #ffffff |
| `CITY_STATE` | CITY, STATE ZIP CODE |
| `PRICE STATUS` | ASKING PRICE |
| `BEDS` | 0 |
| `BATHS` | 0 |
| `SQFT` | 0000 |
| `AGENT_NAME` | John Robert |
| `PARTNER` | Partner Designation \| LIC#000000 |
| `PHONE_NUMBER` | (000) 000-0000 |
| `EMAIL` | johnrobert@gmail.com |
| `WEBSITE` | www.johnrebert.com |
| `LOGO1` | https://templates.shotstack.io/for-sale-listing-template/465170ef-79e5-4a5f-b0a3-f005e0519115/shotstack-proxy.webp |
| `LOGO2` | https://templates.shotstack.io/for-sale-listing-template/5c69b602-87f2-42e1-82b8-90d8978bea9d/source.png |
| `AGENT_PIC` | https://templates.shotstack.io/for-sale-listing-template/4383523a-d459-4873-9d82-c1169e675d2f/shotstack-proxy.webp |
| `HOUSE_IMAGE_RIGHTSIDE` | https://templates.shotstack.io/for-sale-listing-template/88df344e-3b2e-480c-bc6e-1361845c7f9e/shotstack-proxy.webp |
| `HOUSE_IMAGE_FRONT` | https://templates.shotstack.io/for-sale-listing-template/7d124d0d-09e8-4fb1-9394-09c208400f6c/shotstack-proxy.webp |
| `BACKGROUND_IMAGE_SRC` | https://templates.shotstack.io/for-sale-listing-template/4b186b98-46c9-4312-a8b8-56936bb6ba8d/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
