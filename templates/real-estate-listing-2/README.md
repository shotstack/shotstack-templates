# Real Estate Property Teaser Video

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 29.3s · **Format:** mp4 · **Category:** Listings & Classifieds

![Real Estate Property Teaser Video preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/real_estate_property_teaser_caa7ea489e.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/real-estate-listing-2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/real-estate-listing-2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
address,headline_2,headline_3,headline_3a,headline_3b,image_1,image_2,image_3,main_image
```

| Field | Default value |
| --- | --- |
| `ADDRESS` | 192 Summers Lane |
| `HEADLINE_2` | Open plan living |
| `HEADLINE_3` | 3 bedroom, 2 bathroom, 2 carspaces |
| `HEADLINE_3A` | 8th floor |
| `HEADLINE_3B` | city views |
| `IMAGE_1` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/zfe0a140fc/zzy9iwn6-2cbt-jy0x-cci0-2uwodr2q2jyw/source.jpg |
| `IMAGE_2` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/zfe0a140fc/zzy9izyv-2dzh-cf1n-booe-19ycgi3q6tiq/source.jpg |
| `IMAGE_3` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/zfe0a140fc/zzy9izqs-1kuv-ym2i-gmr3-0yg3fy4b7nii/source.jpg |
| `MAIN_IMAGE` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/zfe0a140fc/zzy9knci-2hok-uv0e-kqff-0fgrzr2ibnrm/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
