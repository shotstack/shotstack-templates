# Modern Real Estate Promotion Animated

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 20s · **Format:** mp4 · **Category:** Listings & Classifieds

![Modern Real Estate Promotion Animated preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Real_Estate_Promotion_Animated_3d6cda51e8.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-real-estate-promotion-animated-video-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/modern-real-estate-promotion-animated-video-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
logo,brand_name,title,text_font_color,lines_color,shape_color,grey_background_color_3,shape_background_color_2,s1_image_1,s1_image_src_2,s1_image_src_3,s2_title,s2_bedroom,s2_living,s2_kitchen,s2_swim,s3_title,s3_guestroom,s3_livingroom,s3_carport,s3_garden,cta,phone,email,website,address,s2_image_long,s2_image_src_2,s2_image_src_3,s3_image_src,s3_image_src_2,s3_image_src_3,s3_image_src_4,s4_image_src,audio_src
```

| Field | Default value |
| --- | --- |
| `LOGO` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/940f1058-e756-4f3e-afc5-0afa467cfbb7/source.png |
| `BRAND_NAME` | Brand |
| `TITLE` | FIND YOUR DREAM HOUSE |
| `TEXT_FONT_COLOR` | #ffffff |
| `LINES_COLOR` | #ffffff |
| `SHAPE_COLOR` | #f5a700 |
| `GREY_BACKGROUND_COLOR_3` | #545454 |
| `SHAPE_BACKGROUND_COLOR_2` | #864b13 |
| `S1_IMAGE_1` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/0aa1776d-9e0b-43b6-add2-b5b7452695d5/source.jpg |
| `S1_IMAGE_SRC_2` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/4345869b-08a6-411b-a728-d44458e4b63c/source.jpg |
| `S1_IMAGE_SRC_3` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/f112dc76-a8c7-4878-b493-427217e38005/source.jpg |
| `S2_TITLE` | MODERN DESIGN CONCEPT |
| `S2_BEDROOM` | - 4 Bedrooms |
| `S2_LIVING` | - 4 Living Rooms |
| `S2_KITCHEN` | - Open Kitchen |
| `S2_SWIM` | - Swimming Pool |
| `S3_TITLE` | PERFECT HOUSE FOR LIVING |
| `S3_GUESTROOM` | - Guest Room |
| `S3_LIVINGROOM` | - Living Room |
| `S3_CARPORT` | - Carport |
| `S3_GARDEN` | - Garden |
| `CTA` | CONTACT US |
| `PHONE` | +123 456 7890 |
| `EMAIL` | hello@reallygreatsite.com |
| `WEBSITE` | www.reallygreatsite.com |
| `ADDRESS` | 123 Anywhere St., Any City |
| `S2_IMAGE_LONG` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/0786efdc-12c1-412b-928c-38b65f5f59a1/source.jpg |
| `S2_IMAGE_SRC_2` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/15f50f6e-5a6c-456f-a2cb-be79e08376e4/source.jpg |
| `S2_IMAGE_SRC_3` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/f56ac404-6137-4a56-8e31-4ee79cdad298/source.jpg |
| `S3_IMAGE_SRC` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/1e48a806-b6e0-4d7c-a5d6-383ee6660c84/source.jpg |
| `S3_IMAGE_SRC_2` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/11629764-6249-46df-80b4-255e4da24b1f/source.jpg |
| `S3_IMAGE_SRC_3` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/5e3be023-6e90-4a5a-9cf3-5cc5924b80b6/shotstack-proxy.webp |
| `S3_IMAGE_SRC_4` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/6a32a0b6-fa25-43fd-a10c-382dde17aafa/source.jpg |
| `S4_IMAGE_SRC` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/a7fd2a4f-5c0b-4dbd-b659-6d00f87c9150/source.jpg |
| `AUDIO_SRC` | https://templates.shotstack.io/Modern-Real-Estate-Promoton-Animated/37c86e6f-9b16-4772-9a08-d4de7e3058a3/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
