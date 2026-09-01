# News Promo - Drive Sales & Announce Offers!

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 10s · **Format:** mp4 · **Category:** News

![News Promo - Drive Sales & Announce Offers! preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Dynamic_News_and_Promotions_Template_3671ec6707.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/dynamic-news-promotions-template-sale-offer-event-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/dynamic-news-promotions-template-sale-offer-event-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
news_slug,headline,presenter,status,font_color_1,shape_color,font_color_2,video_presenter,video_background
```

| Field | Default value |
| --- | --- |
| `NEWS_SLUG` | NEWS UPDATE |
| `HEADLINE` | Blabox Officially Launches Its Latest Smartphone, Promising Innovative Features and Enhanced Performance for Users Worldwide |
| `PRESENTER` | Blabox CEO |
| `STATUS` | LIVE |
| `FONT_COLOR_1` | #ffffff |
| `SHAPE_COLOR` | #c40202 |
| `FONT_COLOR_2` | #000000 |
| `VIDEO_PRESENTER` | https://templates.shotstack.io/dynamic-news-promotions-template-sale-offer-event/8d977c09-ae2d-4195-845c-82f6f4ce000e/source.mp4 |
| `VIDEO_BACKGROUND` | https://templates.shotstack.io/dynamic-news-promotions-template-sale-offer-event/7a468411-6356-44be-a62d-6d0c3fa20ad3/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
