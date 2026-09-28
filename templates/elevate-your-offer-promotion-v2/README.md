# Elevate Your Offer - Customizable Campaign Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 8s · **Format:** mp4 · **Category:** E-Commerce

![Elevate Your Offer - Customizable Campaign Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elevate_Your_Offer_Customizable_Campaign_Template_39e6d60d5d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/elevate-your-offer-promotion-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/elevate-your-offer-promotion-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
background_color,s1_video_src,s1_text_var,s2_video_src,s3_video_src,s3_text_var,s4_video_src,s4_text_var,s5_video_src,s5_text_var,s6_video_src,s6_text_var,audio_src,text_font_color,website,flower_background_color,s2_text_var
```

| Field | Default value |
| --- | --- |
| `BACKGROUND_COLOR` | #ffa200 |
| `S1_VIDEO_SRC` | https://templates.shotstack.io/elevate-your-offer-promotion/8bee8b5e-3ad2-40ce-8840-242bd2e411f8/shotstack-proxy.mp4 |
| `S1_TEXT_VAR` | Live |
| `S2_VIDEO_SRC` | https://templates.shotstack.io/elevate-your-offer-promotion/87e3982f-9d09-4e60-8e10-28974acef499/shotstack-proxy.mp4 |
| `S3_VIDEO_SRC` | https://templates.shotstack.io/elevate-your-offer-promotion/1ceb03d4-091a-45c8-8cab-cd82a35bea60/shotstack-proxy.mp4 |
| `S3_TEXT_VAR` | Love |
| `S4_VIDEO_SRC` | https://templates.shotstack.io/elevate-your-offer-promotion/c3c28e1e-fc5a-4aea-873c-efd5398e44f7/shotstack-proxy.mp4 |
| `S4_TEXT_VAR` | Every |
| `S5_VIDEO_SRC` | https://templates.shotstack.io/elevate-your-offer-promotion/2f6c5b5d-744f-4665-9681-1c08814322b9/shotstack-proxy.mp4 |
| `S5_TEXT_VAR` | Moment |
| `S6_VIDEO_SRC` | https://templates.shotstack.io/elevate-your-offer-promotion/89763125-323f-4fbf-9e88-15580dad4b9e/shotstack-proxy.mp4 |
| `S6_TEXT_VAR` | Be Unstoppable |
| `AUDIO_SRC` | https://templates.shotstack.io/elevate-your-offer-promotion/dab42f88-f10c-4223-a803-3c627197f0cb/source.wav |
| `TEXT_FONT_COLOR` | #ffffff |
| `WEBSITE` | www.website.com |
| `Flower_BACKGROUND_COLOR` | #d89118 |
| `S2_TEXT_VAR` | Bold |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
