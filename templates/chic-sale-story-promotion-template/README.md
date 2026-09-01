# Chic Collection & Sale Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Chic Collection & Sale Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Chic_Collection_and_Sale_Story_Template_1cd85b02c4.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/chic-sale-story-promotion-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/chic-sale-story-promotion-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
cta,title,website,text_font_color,background_color,image_src,image_src_2,image_src_3,image_src_4,image_src_5,audio_src
```

| Field | Default value |
| --- | --- |
| `CTA` | SHOP NOW |
| `TITLE` | New Collection |
| `WEBSITE` | www.websiteshop.com |
| `TEXT_FONT_COLOR` | #e6fee1 |
| `BACKGROUND_COLOR` | #3c483e |
| `IMAGE_SRC` | https://templates.shotstack.io/chic-sale-story-promotion-template/6eb77374-971e-4252-8287-583017cad016/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/chic-sale-story-promotion-template/9671b250-b389-44dd-a48c-be1f12a76a08/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/chic-sale-story-promotion-template/c42ca0ce-11d0-478c-801e-dae34b3e8656/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/chic-sale-story-promotion-template/e1e13021-df87-4de6-96b7-55f1c79c4787/source.jpg |
| `IMAGE_SRC_5` | https://templates.shotstack.io/chic-sale-story-promotion-template/ec682bc3-05c1-4e71-abff-eb6482cd96d8/source.jpg |
| `AUDIO_SRC` | https://templates.shotstack.io/chic-sale-story-promotion-template/8e05a021-5af9-4316-bbe6-5487da48233c/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
