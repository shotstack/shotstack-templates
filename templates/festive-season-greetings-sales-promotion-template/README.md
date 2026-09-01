# Festive Season's Greetings Promotional Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 5s · **Format:** mp4 · **Category:** Celebrations

![Festive Season's Greetings Promotional Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Festive_Season_s_Greetings_Promotional_Template_a470b5cb78.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/festive-season-greetings-sales-promotion-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/festive-season-greetings-sales-promotion-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,flower,image_1,image_2,image_3,image_4,image_5,image_6,image_7,image_8,font_color,shape_color,audio_src,background_color
```

| Field | Default value |
| --- | --- |
| `Title` | COMPLIMENTS OF THE SEASON |
| `Flower` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-nxzvp-smygc-mmbs2-xma6k3/source.png |
| `IMAGE_1` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-ksfwm-8vngw-jf01h-5844nm/source.png |
| `IMAGE_2` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-krftt-btr2b-s32kk-4qjb1n/source.png |
| `IMAGE_3` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-nd1g2-eq6xx-9jvhf-dp69av/source.png |
| `IMAGE_4` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-mza3a-qe6c2-23s51-wt74e1/source.png |
| `IMAGE_5` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-m4gds-m97p8-b61jx-x86fvd/source.png |
| `IMAGE_6` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-nfnb6-qcz17-4q4hb-5f718s/source.png |
| `IMAGE_7` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-n6n5x-gb58a-3t8wz-mh7sc1/source.png |
| `IMAGE_8` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-m91cs-ftqv3-5zvx4-y0ydhp/source.png |
| `FONT_COLOR` | #000000 |
| `SHAPE_COLOR` | #d8d8d8 |
| `AUDIO_SRC` | https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/pt6xyh69yj/zzz01k31-qqm78-bz254-9y9eg-6adhys/source.mp3 |
| `BACKGROUND_COLOR` | #ffffff |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
