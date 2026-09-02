# Adventure Awaits Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 8s · **Format:** mp4 · **Category:** Travel

![Adventure Awaits Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Adventure_Awaits_Travel_Promotion_Template_d7bb87645f.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/adventure-travel-promotion-campaign-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/adventure-travel-promotion-campaign-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,alert,body,cta,web,image_1,image_2,image_3,image_4,image_5,image_6,image_7,image_8,image_9,font_color,stroke_color,audio,background_image
```

| Field | Default value |
| --- | --- |
| `Title_1` | LET'S CONNECT YOU |
| `Title_2` | TO THE GLOBE |
| `Alert` | TRAVEL SURVEY....TRAVEL SURVEY....TRAVEL SURVEY....TRAVEL SURVEY....TRAVEL SURVEY....TRAVEL SURVEY....TRAVEL SURVEY....TRAVEL SURVEY....TRAVEL. |
| `Body` | Discover the world your way. Our agency creates journeys filled with adventure, comfort, and lasting memories. |
| `CTA` | TRAVEL TODAY |
| `Web` | www.travelsurvey.com |
| `IMAGE_1` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/d30a5b7b-da13-41de-947c-bbd1d10bdec3/source.png |
| `IMAGE_2` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/ff380b47-967d-4524-bba2-a2ba73899b30/source.png |
| `IMAGE_3` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/e4b89775-4a18-459e-b9ee-5da7e71e545f/source.png |
| `IMAGE_4` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/0160c261-6847-4e5d-9bcd-2a068648552c/source.png |
| `IMAGE_5` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/1f3553d9-cc0e-4407-b565-3e7d70cff87e/source.png |
| `IMAGE_6` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/6a213e71-ff09-4a2f-a559-41f4e487f73c/source.png |
| `IMAGE_7` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/88b24e96-c3f7-4b6b-8a66-8f720cf782b0/source.png |
| `IMAGE_8` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/11de5cab-425a-484f-8ad9-471d0e869d5f/source.png |
| `IMAGE_9` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/ab94cd4f-cfb5-4541-b5fc-49ce60c55cef/source.png |
| `FONT_COLOR` | #000000 |
| `STROKE_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/5b280077-12cf-4590-b3d6-09f0a9ac596f/source.mp3 |
| `BACKGROUND_IMAGE` | https://templates.shotstack.io/adventure-travel-promotion-campaign-template/31678a13-e23d-41aa-ab4b-77ea0725aa48/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
