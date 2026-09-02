# Dynamic Wave Business Offer & Services Flyer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Dynamic Wave Business Offer & Services Flyer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Dynamic_Wave_Business_Offer_and_Services_Flyer_Template_32601421a2.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/special-offer-service-promotion-flyer-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/special-offer-service-promotion-flyer-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
company_name,title_1,title_2,subtitle_1,subtitle_2,list_1,list_2,list_3,list_4,list_5,font_color,background_color,shape_color,subtitle_3,price,cta,contact,image_1,image_2,image_3,image_4,logo,audio
```

| Field | Default value |
| --- | --- |
| `Company_Name` | Aqua Riel Travel Agency |
| `Title_1` | CRUISE & |
| `Title_2` | VOYAGE SERVICES |
| `Subtitle_1` | Remarkable journeys, without exception. |
| `Subtitle_2` | We Offer: |
| `List_1` | Chef’s Table |
| `List_2` | Spa Treatments |
| `List_3` | Exclusive Lounges |
| `List_4` | Personal Guide |
| `List_5` | Cruise Booking |
| `FONT_COLOR` | #0f4383 |
| `BACKGROUND_COLOR` | #ffffff |
| `SHAPE_COLOR` | #f9d907 |
| `Subtitle_3` | As low as: |
| `Price` | $200/Person |
| `CTA` | Grab Deal |
| `Contact` | Contact us on: 243-789-1234 |
| `IMAGE_1` | https://templates.shotstack.io/special-offer-service-promotion-flyer-template/aa718fe3-a643-4889-8648-c395b3b715d6/source.png |
| `IMAGE_2` | https://templates.shotstack.io/special-offer-service-promotion-flyer-template/f6cf30db-b39e-4d9f-972a-318c77102676/source.png |
| `IMAGE_3` | https://templates.shotstack.io/special-offer-service-promotion-flyer-template/75486e77-715d-4772-87bd-0066683172e2/source.png |
| `IMAGE_4` | https://templates.shotstack.io/special-offer-service-promotion-flyer-template/daea3c96-7ce6-4508-97fd-db2022112366/source.png |
| `LOGO` | https://templates.shotstack.io/special-offer-service-promotion-flyer-template/44387abb-a6d5-428a-8983-cb59cde1a6c1/source.jpg |
| `AUDIO` | https://templates.shotstack.io/special-offer-service-promotion-flyer-template/d04ec41c-cce4-4d76-a89d-a9fe184d3455/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
