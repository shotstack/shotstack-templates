# Dynamic Travel & Tour Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Dynamic Travel & Tour Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Dynamic_Travel_and_Tour_Offer_Template_438d268965.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-tour-offer-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/travel-tour-offer-promo-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
image_1,image_2,image_3,image_4,title_1,body,cta,social_handle,web,font_color,backgroung_image,background_color,logo
```

| Field | Default value |
| --- | --- |
| `IMAGE_1` | https://templates.shotstack.io/travel-tour-offer-promo-template/00af51ea-87f2-46bb-b973-d0aca0d6f290/source.png |
| `IMAGE_2` | https://templates.shotstack.io/travel-tour-offer-promo-template/4f36009c-bcf4-42ea-b8f1-d075d52b4612/source.png |
| `IMAGE_3` | https://templates.shotstack.io/travel-tour-offer-promo-template/b5268faf-e189-427e-b8fb-0fd64fec8e3e/source.png |
| `IMAGE_4` | https://templates.shotstack.io/travel-tour-offer-promo-template/9ec78856-d415-462c-aed0-7ccf20ffba92/source.png |
| `Title_1` | EXPLORE SPAIN |
| `Body` | Get ready to uncover the magic of Spain! We're here to make your journey unforgettable. Reserve your spot today and take advantage of our limited-time offer." |
| `CTA` | BOOK TODAY |
| `Social_Handle` | @travellingsurvey |
| `Web` | www.travellingsurvey.com |
| `FONT_COLOR` | #000000 |
| `BACKGROUNG_IMAGE` | https://templates.shotstack.io/travel-tour-offer-promo-template/d4bf67ea-debc-4766-ac7a-1e070dd12a50/source.png |
| `BACKGROUND_COLOR` | #e4c00c |
| `Logo` | https://templates.shotstack.io/travel-tour-offer-promo-template/6e746b5c-bc0d-44c4-99b1-272f0b91d935/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
