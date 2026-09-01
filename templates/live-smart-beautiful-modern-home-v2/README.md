# Live Smart in a Beautiful Modern Home

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Live Smart in a Beautiful Modern Home preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Affordable_3_Bedroom_Home_for_Sale_22295a4947.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/live-smart-beautiful-modern-home-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/live-smart-beautiful-modern-home-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,s1_title,amount,address,size,bedrooms,bathrooms,video_src,s1_font_color,s2_font_color_2,background_color,element_color_2,element_color_3
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | Newyork Real Estate |
| `TITLE` | House for Sale |
| `S1_TITLE` | Start from |
| `AMOUNT` | $15,000 |
| `ADDRESS` | 123 Anywhere ST., Any City, ST 12345 |
| `SIZE` | 2,500 Sqft |
| `BEDROOMS` | 3 |
| `BATHROOMS` | 2 |
| `VIDEO_SRC` | https://templates.shotstack.io/live-smart-beautiful-modern-home/42159a49-70d4-4f8a-acbe-9f49d547ab2d/source.mp4 |
| `S1_FONT_COLOR` | #124b5e |
| `S2_FONT_COLOR_2` | #ffffff |
| `BACKGROUND_COLOR` | #e5fffd |
| `ELEMENT_COLOR_2` | #4c809a |
| `ELEMENT_COLOR_3` | #c7e8f0 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
