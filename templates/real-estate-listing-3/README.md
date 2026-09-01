# Real Estate Agent Property Highlight Video

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 29.3s · **Format:** mp4 · **Category:** Listings & Classifieds

![Real Estate Agent Property Highlight Video preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/my_estate_agent_slideshow_2b5cf70fee.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/real-estate-listing-3/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/real-estate-listing-3
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
address,headline_2,headline_3,headline_3a,headline_3b,image_1,image_2,image_3,main_image
```

| Field | Default value |
| --- | --- |
| `ADDRESS` | 192 Summers Lane |
| `HEADLINE_2` | Open plan living |
| `HEADLINE_3` | 3 bedroom, 2 bathroom, 2 carspaces |
| `HEADLINE_3A` | 8th floor |
| `HEADLINE_3B` | city views |
| `IMAGE_1` | https://templates.shotstack.io/real-estate-listing-3/d732d60e-2c94-4898-9da2-1c021eb5c5a9/source.jpg |
| `IMAGE_2` | https://templates.shotstack.io/real-estate-listing-3/ffc5cb67-b52d-49eb-9f0c-02d50b7b980a/source.jpg |
| `IMAGE_3` | https://templates.shotstack.io/real-estate-listing-3/8e23f21e-a712-49f5-a770-f3395adee2c1/source.jpg |
| `MAIN_IMAGE` | https://templates.shotstack.io/real-estate-listing-3/88b9cec5-736a-423f-a52c-aada55d0d817/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
