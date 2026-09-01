# Cultural Fiesta Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Cultural Fiesta Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Cultural_Fiesta_Travel_Promotion_Template_5ad201ca45.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/cultural-travel-promotion-offer-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/cultural-travel-promotion-offer-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
company_name,title,list_1,list_2,list_3,cta,web,phone,image_1,image_2,image_3,image_4,font_color_1,font_color_2,shape_color,background_color_2,audio
```

| Field | Default value |
| --- | --- |
| `Company_Name` | Travel Survey |
| `Title` | EXPERIENCE MIXICO CULTURE |
| `List_1` | Festivals & Traditions |
| `List_2` | Historic & Cultural Sites |
| `List_3` | Art & Handcrafts |
| `CTA` | Visit Now |
| `Web` | www.travelsurvey.com |
| `Phone` | 012-345-6789 |
| `IMAGE_1` | https://templates.shotstack.io/cultural-travel-promotion-offer-template/8194a145-e016-43d4-9f73-20489d1fa98f/source.png |
| `IMAGE_2` | https://templates.shotstack.io/cultural-travel-promotion-offer-template/f7cb2b28-82a4-4588-9237-7f81b686ffdd/source.png |
| `IMAGE_3` | https://templates.shotstack.io/cultural-travel-promotion-offer-template/ac583bd3-04f5-4052-b8fc-88e7eb249ed4/source.png |
| `IMAGE_4` | https://templates.shotstack.io/cultural-travel-promotion-offer-template/4682b9c3-e85d-4c61-82df-3a13bc87f540/source.png |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #03378c |
| `SHAPE_COLOR` | #97d7f7 |
| `BACKGROUND_COLOR_2` | #54c1f8 |
| `AUDIO` | https://templates.shotstack.io/cultural-travel-promotion-offer-template/dec1c893-442f-4a14-817a-fb02dcebbd36/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
