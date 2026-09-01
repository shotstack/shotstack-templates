# Elegant Dining & Seasonal Offer Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 33s · **Format:** mp4 · **Category:** Travel

![Elegant Dining & Seasonal Offer Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elegant_Dining_and_Seasonal_Offer_Promotion_Template_9a21527094.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/elegant-dining-offer-event-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/elegant-dining-offer-event-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_search,s1_image,s2_search,s2_image,s3_search,s3_image,s4_search,s4_image,s5_search,s5_image,s6_search,font_color,shape_color_1,shape_color_2,audio
```

| Field | Default value |
| --- | --- |
| `S1_Search` | Is there a place where flavor becomes emotion? |
| `S1_IMAGE` | https://templates.shotstack.io/elegant-dining-offer-event-template/88d2752f-5698-4f32-9287-f4b6807ae89b/source.jpg |
| `S2_Search` | Can one table change the way you dine forever? |
| `S2_IMAGE` | https://templates.shotstack.io/elegant-dining-offer-event-template/a4dbdb1a-6bb0-40bf-912b-fbf3620d6817/source.jpg |
| `S3_Search` | Is this where artistry wears an apron? |
| `S3_IMAGE` | https://templates.shotstack.io/elegant-dining-offer-event-template/bd8fd4ff-65b3-4eb5-a1e2-e1e5bb03eaa3/source.jpg |
| `S4_Search` | Can dinner taste better under the stars? |
| `S4_IMAGE` | https://templates.shotstack.io/elegant-dining-offer-event-template/d7431686-55b5-4c84-a4a0-e073688fe31b/source.jpg |
| `S5_Search` | Can a simple dinner turn into something more? |
| `S5_IMAGE` | https://templates.shotstack.io/elegant-dining-offer-event-template/0b37a703-623a-4c11-9568-c0b4284456f3/source.jpg |
| `S6_Search` | where excellence meets your appetite |
| `FONT_COLOR` | #000000 |
| `SHAPE_COLOR_1` | #ffffff |
| `SHAPE_COLOR_2` | #8ed3f5 |
| `AUDIO` | https://templates.shotstack.io/elegant-dining-offer-event-template/436cd7ea-66fe-42cc-ab77-e99c48724987/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
