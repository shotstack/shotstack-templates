# London Calling: Royal Event & Sale Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 15s · **Format:** mp4 · **Category:** Travel

![London Calling: Royal Event & Sale Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/London_Calling_Royal_Event_and_Sale_Promotion_Template_39bcada898.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/london-event-sale-promotion-template-uk-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/london-event-sale-promotion-template-uk-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
text_1,text_2,font_color,text_3,text_4,shape_color,video_1,video_2,video_3,audio_src
```

| Field | Default value |
| --- | --- |
| `Text_1` | Thames Cruise Market Stroll Gallery Escape |
| `Text_2` | Step Into Royal Pulse |
| `FONT_COLOR` | #ffffff |
| `Text_3` | London rewrites you |
| `Text_4` | More than a visit. |
| `SHAPE_COLOR` | #3f6f9d |
| `VIDEO_1` | https://templates.shotstack.io/london-event-sale-promotion-template-uk/9e41f0f8-2548-4296-a1a6-5796595adef4/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/london-event-sale-promotion-template-uk/d7aa6bbd-6646-4960-9586-aedd5ff89ec0/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/london-event-sale-promotion-template-uk/d0ead9fc-d4d5-444a-9585-c48e37ff6e3b/source.mp4 |
| `AUDIO_SRC` | https://templates.shotstack.io/london-event-sale-promotion-template-uk/a69b66ed-ef93-48cb-bfe4-078a3bc81273/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
