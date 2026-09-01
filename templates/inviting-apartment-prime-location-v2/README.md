# Inviting Apartment in a Prime Location

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Inviting Apartment in a Prime Location preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Apartment_for_Rent_with_Patio_7c7c12042b.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/inviting-apartment-prime-location-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/inviting-apartment-prime-location-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description_1,description_2,status,date_time,cta,phone,brown_font_color,text_font_color_2,image_src,image_src_2,image_src_3,image_src_4
```

| Field | Default value |
| --- | --- |
| `TITLE` | For Lease |
| `DESCRIPTION_1` | 1 Bed 1 Bath with patio |
| `DESCRIPTION_2` | $2000 with pool, oven, and heater included |
| `STATUS` | Open house |
| `DATE_TIME` | Sun 6 September 10am-11am |
| `CTA` | Dm or call me |
| `PHONE` | +123-456-7890 |
| `BROWN_FONT_COLOR` | #3d1a1a |
| `TEXT_FONT_COLOR_2` | #000000 |
| `IMAGE_SRC` | https://templates.shotstack.io/inviting-apartment-prime-location/7f903f77-3a53-41f3-8f20-6eec45006fac/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/inviting-apartment-prime-location/db18c8d3-a216-495b-b6a6-f46818abbc1c/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/inviting-apartment-prime-location/4241ca17-8c7a-44c5-81cf-468e093cf70c/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/inviting-apartment-prime-location/3ec5638c-8941-4a32-94e6-068e8aa10280/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
