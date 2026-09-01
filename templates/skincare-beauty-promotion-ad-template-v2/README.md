# Elevate Your Brand: Skincare & Beauty Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 10.4s · **Format:** mp4 · **Category:** E-Commerce

![Elevate Your Brand: Skincare & Beauty Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elevate_Your_Brand_Skincare_and_Beauty_Promotion_Template_2ee9c13796.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/skincare-beauty-promotion-ad-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/skincare-beauty-promotion-ad-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,website,text_font_color,image_src,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_TITLE` | ELEVATE YOUR SKIN |
| `WEBSITE` | BRANDWEBSITE.COM |
| `TEXT_FONT_COLOR` | #383838 |
| `IMAGE_SRC` | https://templates.shotstack.io/skincare-beauty-promotion-ad-template/455d2601-8d66-4d8e-a800-f1fa3f8c0274/source.png |
| `AUDIO_SRC` | https://templates.shotstack.io/skincare-beauty-promotion-ad-template/8504278c-6576-452b-8a94-e56058802067/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
