# Haunted Halloween Night Event & Sales Flyer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Celebrations

![Haunted Halloween Night Event & Sales Flyer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Haunted_Halloween_Night_Event_and_Sales_Flyer_Template_e8ae5831f8.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/haunted-halloween-event-sale-flyer-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/haunted-halloween-event-sale-flyer-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
text_var_116,text_var_361,text_var_224,text_var_971,image_web,image_tree,image_moon,image_witch,image_bat,font_color_1,font_color_2,font_color_3,shape_color,background_color_2,image_spider,audio
```

| Field | Default value |
| --- | --- |
| `TEXT_VAR_116` | HAUNTED EVE |
| `TEXT_VAR_361` | FIESTA |
| `TEXT_VAR_224` | DARK CARNIVAL \| SOUND FEST |
| `TEXT_VAR_971` | FRIDAY 31, 2025 \| 09.00 PM |
| `IMAGE_WEB` | https://templates.shotstack.io/haunted-halloween-event-sale-flyer-template/5f961004-fae3-49dd-a2c8-aed8c6dae776/source.png |
| `IMAGE_TREE` | https://templates.shotstack.io/haunted-halloween-event-sale-flyer-template/63e18687-407c-49fe-bc57-da70da285ab4/source.png |
| `IMAGE_MOON` | https://templates.shotstack.io/haunted-halloween-event-sale-flyer-template/166377f9-3788-4027-bb69-05a804731ea4/source.png |
| `IMAGE_WITCH` | https://templates.shotstack.io/haunted-halloween-event-sale-flyer-template/0056c06d-5e44-42d8-9ca8-1a96a5f1b0c1/source.png |
| `IMAGE_BAT` | https://templates.shotstack.io/haunted-halloween-event-sale-flyer-template/fb5b3e78-fa98-4501-a440-3fbf83a7275a/source.png |
| `FONT_COLOR_1` | #0bca23 |
| `FONT_COLOR_2` | #ffffff |
| `FONT_COLOR_3` | #000000 |
| `SHAPE_COLOR` | #ddb015 |
| `BACKGROUND_COLOR_2` | #32044a |
| `IMAGE_SPIDER` | https://templates.shotstack.io/haunted-halloween-event-sale-flyer-template/fab81edf-32c4-43f7-ae19-8978a4ea7ea8/source.png |
| `AUDIO` | https://templates.shotstack.io/haunted-halloween-event-sale-flyer-template/69b3748e-c5d6-4c35-84aa-53727cf4dc2e/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
