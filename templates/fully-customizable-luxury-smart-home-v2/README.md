#  Fully Customizable Luxury Smart Home 

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Fully Customizable Luxury Smart Home preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Smart_Home_for_Sale_with_Advanced_Features_97a6ec1725.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/fully-customizable-luxury-smart-home-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/fully-customizable-luxury-smart-home-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,description,s1_title,s1_description,s2_title,amount,duration,s2_description_1,s2_description_2,s2_description_3,s2_description_4,s2_description_5,s2_description_6,s3_title,phone,website,logo,image_src_2,image_src_3,image_src_4,image_src_5,audio_src,text_font_color,text_font_color_2
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | REAL ESTATE |
| `TITLE` | Smart Home for Sale |
| `DESCRIPTION` | Borcelle Village Houses |
| `S1_TITLE` | About Property : |
| `S1_DESCRIPTION` | Meticulousty designed and equipped with the latest in home automation technology, this residence offers unparalleled, security, and energy efficiency. |
| `S2_TITLE` | Asking Price: |
| `AMOUNT` | $1500 |
| `DURATION` | / month |
| `S2_DESCRIPTION_1` | - Smart Lighting |
| `S2_DESCRIPTION_2` | - Climate Control |
| `S2_DESCRIPTION_3` | - Security |
| `S2_DESCRIPTION_4` | - Home Theater |
| `S2_DESCRIPTION_5` | - Solar Panels |
| `S2_DESCRIPTION_6` | - Outdoor Oasis |
| `S3_TITLE` | BOOK NOW |
| `PHONE` | +123-456-7890 |
| `WEBSITE` | www.realestate.com |
| `LOGO` | https://templates.shotstack.io/fully-customizable-luxury-smart-home/cb201d89-4e34-4430-b2d2-1b8fa5cbb5cb/source.png |
| `IMAGE_SRC_2` | https://templates.shotstack.io/fully-customizable-luxury-smart-home/312f5d5a-b353-4caa-969c-b3228b589f4a/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/fully-customizable-luxury-smart-home/ae69b7f1-4aed-49f2-a23b-cafd79edc854/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/fully-customizable-luxury-smart-home/5c07f6da-5b5d-40ac-9010-ed8f7dce4fc3/source.jpg |
| `IMAGE_SRC_5` | https://templates.shotstack.io/fully-customizable-luxury-smart-home/acb237d8-bba6-4f75-86da-468475eb83a5/source.jpg |
| `AUDIO_SRC` | https://templates.shotstack.io/fully-customizable-luxury-smart-home/27abb5ce-0e96-46c9-af7c-941c90e95302/source.mp3 |
| `TEXT_FONT_COLOR` | #0a473d |
| `TEXT_FONT_COLOR_2` | #ffffff |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
