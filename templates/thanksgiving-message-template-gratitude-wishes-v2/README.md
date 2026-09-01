# Thanksgiving Message Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Celebrations

![Thanksgiving Message Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Thanksgiving_Message_Template_c9511a2fc3.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/thanksgiving-message-template-gratitude-wishes-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/thanksgiving-message-template-gratitude-wishes-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,body,video,object,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Thankful Blessings |
| `Body` | May your Thanksgiving be filled with abundance and your spirit with gratitude. |
| `VIDEO` | https://templates.shotstack.io/thanksgiving-message-template-gratitude-wishes/34b8a0e5-e960-4ed9-ac4a-55af58bfdb48/source.m4v |
| `Object` | https://templates.shotstack.io/thanksgiving-message-template-gratitude-wishes/0dcb8650-1f8a-4c33-b06f-568f3e5fd28f/source.png |
| `AUDIO` | https://templates.shotstack.io/thanksgiving-message-template-gratitude-wishes/be946f6d-9b1e-4bf7-bf62-062cd14a8e8e/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
