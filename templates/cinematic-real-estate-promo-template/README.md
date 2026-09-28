# Cinematic Real Estate Promo 

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 35s · **Format:** mp4 · **Category:** Listings & Classifieds

![Cinematic Real Estate Promo preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Cinematic_Real_Estate_Promo_Template_dd8877781d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/cinematic-real-estate-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/cinematic-real-estate-promo-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,brand_name,text_font_color,s1_title,s1_description,s1_description_2,s2_title,s2_description,s2_description_2,image_src,s1_image_src,s2_image_src,s3_title,s3_description,s3_description_2,s3_image_src,s4_title,s4_description,s4_description_2,s4_image_src,s5_title,s5_description,s5_description_2,s6_title,s6_description_2,website,s6_text_background_color,s6_text_font_color_2,line_color,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | Welcome to your |
| `DESCRIPTION` | VIRTUAL PROPERTY TOUR |
| `BRAND_NAME` | BORCELLE REAL ESTATE |
| `TEXT_FONT_COLOR` | #ffffff |
| `S1_TITLE` | Living Room |
| `S1_DESCRIPTION` | Step into the spacious and bright living room, featuring large windows that flood the space with natural light. |
| `S1_DESCRIPTION_2` | The open floor plan is perfect for entertaining, and the modern fixtures add a touch of elegance |
| `S2_TITLE` | KITCHEN |
| `S2_DESCRIPTION` | The kitchen is a chef's dream, equipped with stainless steel appliances, granite countertops, and ample cabinet space. |
| `S2_DESCRIPTION_2` | The central island provides additional workspace and is ideal for casual dining. |
| `IMAGE_SRC` | https://templates.shotstack.io/Cinematic-Real-Estate-Promo-Template/e08a3319-c4f9-42f9-b867-9c719475db31/source.jpg |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/Cinematic-Real-Estate-Promo-Template/0c217a83-72a8-445d-b12c-c5dee7e15fd6/source.jpg |
| `S2_IMAGE_SRC` | https://templates.shotstack.io/Cinematic-Real-Estate-Promo-Template/0dfcc344-553d-42d3-8160-7004dc070743/source.jpg |
| `S3_TITLE` | MASTERS ROOM |
| `S3_DESCRIPTION` | The master bedroom offers a peaceful retreat with its generous size, walk-in closet, and ensuite bathroom. |
| `S3_DESCRIPTION_2` | Large windows provide beautiful views and plenty of natural light. |
| `S3_IMAGE_SRC` | https://templates.shotstack.io/Cinematic-Real-Estate-Promo-Template/8e289005-d2f8-4d3d-aa5f-b036a993bca1/source.jpg |
| `S4_TITLE` | BATHROOM |
| `S4_DESCRIPTION` | Each bathroom is tastefully designed with modern fixtures, tile flooring, and stylish vanities. |
| `S4_DESCRIPTION_2` | The master bath includes a double sink, a soaking tub, and a separate shower. |
| `S4_IMAGE_SRC` | https://templates.shotstack.io/Cinematic-Real-Estate-Promo-Template/f09ab03a-9024-4e43-8323-bfb99572376e/source.jpg |
| `S5_TITLE` | Outdoor Space |
| `S5_DESCRIPTION` | Enjoy the beautifully landscaped backyard, perfect for outdoor activities and relaxation. |
| `S5_DESCRIPTION_2` | The patio area is ideal for barbecues and entertaining guests. |
| `S6_TITLE` | Thank you for joining us on this virtual tour |
| `S6_DESCRIPTION_2` | We hope you enjoyed exploring this beautiful property. For more information or to schedule a visit, please contact us! |
| `WEBSITE` | www.reallygreatsite.com |
| `S6_TEXT_BACKGROUND_COLOR` | #000000 |
| `S6_TEXT_FONT_COLOR_2` | #a7fbd7 |
| `LINE_COLOR` | #ebf9ff |
| `AUDIO_SRC` | https://templates.shotstack.io/Cinematic-Real-Estate-Promo-Template/7febcf63-a8b8-4172-96ac-22ce101392b6/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
