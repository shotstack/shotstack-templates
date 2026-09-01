# Green Clean Real Estate Promo

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Green Clean Real Estate Promo preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Green_Clean_Real_Estate_Ad_72ea2f86af.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/green-clean-real-estate-promo-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/green-clean-real-estate-promo-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
address,brand_name,text_font_color,shape_color,title,features_1,features_2,features_3,title_2,image_src,website,background_color,audio_src,text_background_color
```

| Field | Default value |
| --- | --- |
| `ADDRESS` | 123 Anywhere St, Any City, ST 12345 |
| `BRAND_NAME` | BORCELLE PROPERTY |
| `TEXT_FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #ff9500 |
| `TITLE` | 4 Acres of Residential Land with Home for Sale |
| `FEATURES_1` | Peaceful Residential Plot |
| `FEATURES_2` | Investment Potential |
| `FEATURES_3` | Recreational Getaway |
| `TITLE_2` | PROPERTY FEATURES |
| `IMAGE_SRC` | https://templates.shotstack.io/Green-Clean-Real-Estate-Ad/d6382748-f72a-40a5-9e31-b9db66656470/source.jpg |
| `WEBSITE` | WWW.REALLYGREATSITE.COM |
| `BACKGROUND_COLOR` | #51603e |
| `AUDIO_SRC` | https://templates.shotstack.io/Green-Clean-Real-Estate-Ad/e7221425-24cf-4096-bb5f-3832f4f7c0e1/source.mp3 |
| `TEXT_BACKGROUND_COLOR` | #465336 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
