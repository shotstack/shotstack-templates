# Elegant News Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 15s · **Format:** mp4 · **Category:** News

![Elegant News Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/News_and_Updates_Template_6acfec8a03.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/news-updates-template-breaking-local-global-headlines-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/news-updates-template-breaking-local-global-headlines-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
heading,subheading,bulletin,video,font_color_1,font_color_2
```

| Field | Default value |
| --- | --- |
| `HEADING` | City Gripped by Crime Surge |
| `SUBHEADING` | Government vows tougher security measures to restore safety. |
| `BULLETIN` | NEWS UPDATE |
| `VIDEO` | https://templates.shotstack.io/news-update-template-broadcast-breaking-news-live/9d899be9-185f-4ead-afce-0cfc1c946eea/source.mp4 |
| `FONT_COLOR_1` | #e1dbd7 |
| `FONT_COLOR_2` | #008000 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
