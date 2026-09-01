# Comfortable Family Home for Rent

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Comfortable Family Home for Rent preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Comfortable_Family_Home_for_Rent_a5b28ecb4a.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/comfortable-family-home-rent-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/comfortable-family-home-rent-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,address,s2_title,s2_description_1,s2_description_2,s2_description_3,s2_description_4,s2_description_5,s3_title,s3_description,s4_title,s4_description,logo,video_src,text_font_color,brand_name,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | HOUSE FOR RENT |
| `ADDRESS` | 123 ANYPLACE ST. ANY CITY |
| `S2_TITLE` | FEATURES : |
| `S2_DESCRIPTION_1` | 2 BEDROOM |
| `S2_DESCRIPTION_2` | 3 BATHROOM |
| `S2_DESCRIPTION_3` | LIVINGROOM |
| `S2_DESCRIPTION_4` | KITCHEN |
| `S2_DESCRIPTION_5` | GARAGE |
| `S3_TITLE` | START FROM |
| `S3_DESCRIPTION` | $50,000 |
| `S4_TITLE` | CONTACT US |
| `S4_DESCRIPTION` | +123-456-7890 |
| `LOGO` | https://templates.shotstack.io/comfortable-family-home-rent/2cecf447-cd16-400a-a16e-41b75c087507/source.png |
| `VIDEO_SRC` | https://templates.shotstack.io/comfortable-family-home-rent/8d8c1343-1fd2-41d8-8de3-7cfe9b77c932/source.mp4 |
| `TEXT_FONT_COLOR` | #ffffff |
| `BRAND_NAME` | JACKSON REAL ESTATE |
| `AUDIO_SRC` | https://templates.shotstack.io/comfortable-family-home-rent/6ef6948e-133e-4ff4-8a42-01b02cf400c4/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
