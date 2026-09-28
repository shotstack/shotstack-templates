# Professional Property Listing Template - Highlight Your Real Estate

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 14s · **Format:** mp4 · **Category:** Listings & Classifieds

![Professional Property Listing Template - Highlight Your Real Estate preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Professional_Property_Listing_Template_Highlight_Your_Real_Estate_2a71013790.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/professional-property-listing-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/professional-property-listing-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_image-to-video_src,s2_image-to-video_src_2,prompt,gradient_color,shape_color,text_font_color,status,bed,baths,sqft,address,date ,time,agent,partner,phone,gmail,website,logo_1,logo_2,logo_background_color,line_background_color_2,text_background_opacity,s3_image-to-video_src_3,s4_image-to-video_src,s5_image-to-video_src,s6_image-to-video_src,s7_image-to-video_src
```

| Field | Default value |
| --- | --- |
| `S1_IMAGE-TO-VIDEO_SRC` | https://templates.shotstack.io/professional-property-listing-template/a3f0d34f-ba98-4189-bfd5-002d00a8c9c9/source.jpg |
| `S2_IMAGE-TO-VIDEO_SRC_2` | https://templates.shotstack.io/professional-property-listing-template/cb791f67-1477-4af5-a3e3-99f3b928a2fb/source.jpg |
| `Prompt` | orbit left around the object |
| `Gradient_Color` | #000000 |
| `Shape_color` | #d3a527 |
| `TEXT_FONT_COLOR` | #ffffff |
| `Status` | UNDER CONTRACT |
| `Bed` | 2 |
| `Baths` | 5 |
| `SQFT` | 0000 |
| `ADDRESS` | 123 MAIN STREET, CITY, ZIP CODE |
| `Date` | MONDAY, APRIL 1ST |
| `Time` | 10:00-11:00AM |
| `Agent` | Henry Caldwell |
| `Partner` | PARTNER DESIGNATION\|LIC #3000000 |
| `Phone` | (000) 000-0000 |
| `Gmail` | HenryCaldwell@gmail.com |
| `Website` | www.HenryCaldwell.com |
| `Logo_1` | https://templates.shotstack.io/professional-property-listing-template/b787b8c7-89ff-4995-b259-eb081cfdac96/shotstack-proxy.webp |
| `Logo_2` | https://templates.shotstack.io/professional-property-listing-template/6cb1e76d-4fc1-4bf5-a276-f9241f227072/shotstack-proxy.webp |
| `Logo_BACKGROUND_COLOR` | #ffffff |
| `line_BACKGROUND_COLOR_2` | #ffffff |
| `TEXT_BACKGROUND_OPACITY` | 0.5 |
| `S3_IMAGE-TO-VIDEO_SRC_3` | https://templates.shotstack.io/professional-property-listing-template/e44dbe22-fbda-427b-bf4b-a9af0d8fd48c/source.jpg |
| `S4_IMAGE-TO-VIDEO_SRC` | https://templates.shotstack.io/professional-property-listing-template/508bf06e-88e6-4118-b20b-0c43cedc5c42/source.jpg |
| `S5_IMAGE-TO-VIDEO_SRC` | https://templates.shotstack.io/professional-property-listing-template/8ab1a125-a3c4-4071-bb1f-044b211432e0/source.jpg |
| `S6_IMAGE-TO-VIDEO_SRC` | https://templates.shotstack.io/professional-property-listing-template/a1406a55-57d0-4bb8-936c-8f06e21530d2/source.jpg |
| `S7_IMAGE-TO-VIDEO_SRC` | https://templates.shotstack.io/professional-property-listing-template/1a8b4021-ae7e-407c-a429-f4058bc291d3/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
