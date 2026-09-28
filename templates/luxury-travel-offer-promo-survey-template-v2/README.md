# Luxury Travel Survey & Exclusive Journey Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Travel

![Luxury Travel Survey & Exclusive Journey Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Luxury_Travel_Survey_and_Exclusive_Journey_Offer_Template_db338ad085.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/luxury-travel-offer-promo-survey-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/luxury-travel-offer-promo-survey-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,body,video_1,video_2,video_3,video_4,video_5,video_6,font_color,shape_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Title_1` | TOUR PREMIUM |
| `Title_2` | WITH TRAVEL SURVEY |
| `Body` | FEEL THE WORLD WITH OUR LUXUROUS JOURNEY AT AN AFFORDABLE PRICE |
| `VIDEO_1` | https://templates.shotstack.io/luxury-travel-offer-promo-survey-template/979c7a67-a575-4649-92ac-f27cf4005d65/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/luxury-travel-offer-promo-survey-template/c35bf616-17f1-4e15-a3ae-a3024733c345/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/luxury-travel-offer-promo-survey-template/46559110-8438-495e-a465-283d2f6e9c3d/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/luxury-travel-offer-promo-survey-template/0cb17d84-2c4c-4992-b37e-0426137e47d4/source.mp4 |
| `VIDEO_5` | https://templates.shotstack.io/luxury-travel-offer-promo-survey-template/7c94ab3e-5c7e-4cc4-bb31-3bd405fe1d82/source.mp4 |
| `VIDEO_6` | https://templates.shotstack.io/luxury-travel-offer-promo-survey-template/29e108c5-62ff-401a-9ec7-b63754ba99e3/source.mp4 |
| `FONT_COLOR` | #000000 |
| `SHAPE_COLOR` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/luxury-travel-offer-promo-survey-template/93b85447-7835-4006-962b-5ffd555d3dc0/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
