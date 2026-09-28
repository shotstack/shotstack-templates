# Festive Family Season's Greetings Card Template for Holiday Promotions

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 8s · **Format:** mp4 · **Category:** Celebrations

![Festive Family Season's Greetings Card Template for Holiday Promotions preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Festive_Family_Season_s_Greetings_Card_Template_for_Holiday_Promotions_a4683952ba.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/festive-family-seasons-greetings-card-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/festive-family-seasons-greetings-card-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,body,image_1,light_1,light_2,ball_1,ball_2,tree,background_snow,font_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Season's Greetings |
| `Body` | Sending heartfelt wishes for a season of harmony, laughter, and treasured moments surrounded by those you hold dear. |
| `IMAGE_1` | https://templates.shotstack.io/festive-family-seasons-greetings-card-template/8287e046-841b-4ce0-b534-144863f7f663/source.png |
| `Light_1` | https://templates.shotstack.io/festive-family-seasons-greetings-card-template/ba94ca67-bab9-439e-85db-bcf304217d30/source.png |
| `Light_2` | https://templates.shotstack.io/festive-family-seasons-greetings-card-template/1de08935-ec26-435d-bd0d-104e85df9f3e/source.png |
| `Ball_1` | https://templates.shotstack.io/festive-family-seasons-greetings-card-template/ae98c809-2ed3-4941-924c-b4d8cfba79eb/source.png |
| `Ball_2` | https://templates.shotstack.io/festive-family-seasons-greetings-card-template/bd02f7dd-44b3-4ae4-bd28-1c4ecd92494f/source.png |
| `Tree` | https://templates.shotstack.io/festive-family-seasons-greetings-card-template/c9178293-e291-456f-845e-93872b942792/source.png |
| `BACKGROUND_SNOW` | https://templates.shotstack.io/festive-family-seasons-greetings-card-template/0d3512c6-44d5-421b-b8d0-c21ba7158953/source.png |
| `FONT_COLOR` | #f1f0e2 |
| `BACKGROUND_COLOR` | #0c4a09 |
| `AUDIO` | https://templates.shotstack.io/festive-family-seasons-greetings-card-template/1aee82d1-ab85-4345-976a-b48a7ac248d6/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
