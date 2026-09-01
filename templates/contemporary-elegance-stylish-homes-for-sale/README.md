# Contemporary Elegance – Stylish Homes for Sale

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Contemporary Elegance – Stylish Homes for Sale preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Contemporary_Elegance_Stylish_Homes_for_Sale_5fea007705.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/contemporary-elegance-stylish-homes-for-sale/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/contemporary-elegance-stylish-homes-for-sale
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,phone,address,amount,title,description,s2_description_1,s2_description_2,s2_description_3,text_font_color,yellow_element_color,background_color,logo,image_src,image_src_2,image_src_3
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | realestate company |
| `PHONE` | +123-456-7890 |
| `ADDRESS` | 123 Anywhere St., Any City. ST 12345 |
| `AMOUNT` | $1,500 |
| `TITLE` | Modern Home |
| `DESCRIPTION` | FOR SALE |
| `S2_DESCRIPTION_1` | 2 Bedroom |
| `S2_DESCRIPTION_2` | 1 Bathroom |
| `S2_DESCRIPTION_3` | Car Garage |
| `TEXT_FONT_COLOR` | #ffffff |
| `YELLOW_ELEMENT_COLOR` | #ffc107 |
| `BACKGROUND_COLOR` | #17255e |
| `LOGO` | https://templates.shotstack.io/contemporary-elegance-stylish-homes-for-sale/7c88fcf2-12f7-434e-861d-aa6016f800a8/source.png |
| `IMAGE_SRC` | https://templates.shotstack.io/contemporary-elegance-stylish-homes-for-sale/8feeb08e-8e93-40c9-9154-4f71bba80d69/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/contemporary-elegance-stylish-homes-for-sale/140fd1ba-a856-41f4-a777-dac3ffdd9c75/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/contemporary-elegance-stylish-homes-for-sale/2b5d5a35-e288-478f-a67c-a8665a4412a6/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
