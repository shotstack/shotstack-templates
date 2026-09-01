# Sunlit Serenity - A 2-Bedroom Dream Home

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Sunlit Serenity - A 2-Bedroom Dream Home preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Sunlit_Serenity_A_2_Bedroom_Dream_Home_de560697f9.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/sunlit-serenity-2-bedroom-dream-home-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/sunlit-serenity-2-bedroom-dream-home-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,amount,description_1,description_2,description_3,website,phone,agent_name,video_src,text_background_color,text_background_color_2,text_font_color
```

| Field | Default value |
| --- | --- |
| `TITLE` | House For Sale |
| `AMOUNT` | PRICE $400,000 |
| `DESCRIPTION_1` | 2 Bedrooms |
| `DESCRIPTION_2` | Bathrooms |
| `DESCRIPTION_3` | Car Garage |
| `WEBSITE` | REALESTATECOMPANY.COM |
| `PHONE` | +123-456-7890 |
| `AGENT_NAME` | (Kate Smith) |
| `VIDEO_SRC` | https://templates.shotstack.io/sunlit-serenity-2-bedroom-dream-home/3b1bfc33-195b-4b25-b4e4-ff1ef06d4330/source.mp4 |
| `TEXT_BACKGROUND_COLOR` | #564129 |
| `TEXT_BACKGROUND_COLOR_2` | #e2cf8d |
| `TEXT_FONT_COLOR` | #ffffff |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
