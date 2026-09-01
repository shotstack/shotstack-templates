# Unlock the Power of Your Mind - Motivational Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Other

![Unlock the Power of Your Mind - Motivational Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Unlock_the_Power_of_Your_Mind_Motivational_Template_f9e2072c71.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/unlock-your-mind-motivation-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/unlock-your-mind-motivation-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_image-to-video_src,s1_text,s2_text,s1_overlay_background_color,s1_background_opacity,s1_audio_src,text_font_color
```

| Field | Default value |
| --- | --- |
| `S1_IMAGE-TO-VIDEO_SRC` | https://templates.shotstack.io/unlock-your-mind-motivation/dfa3c540-b260-428d-8a33-c7ae1b86dab7/source.jpg |
| `S1_TEXT` | Your mind adapts in ways you never imagine. |
| `S2_TEXT` | And yet, you rarely notice it. |
| `S1_Overlay_BACKGROUND_COLOR` | #000000 |
| `S1_BACKGROUND_OPACITY` | 0.27 |
| `S1_AUDIO_SRC` | https://templates.shotstack.io/unlock-your-mind-motivation/441adfd6-30ae-4958-accc-06315c9f8600/source.mp3 |
| `TEXT_FONT_COLOR` | #ffffff |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
