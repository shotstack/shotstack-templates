# AI Historical Facts TikTok Video

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 21s · **Format:** mp4 · **Category:** Social Media

![AI Historical Facts TikTok Video preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_831_82e475d063.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/automated-tiktok-video-historical-facts/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/automated-tiktok-video-historical-facts
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,voiceover,image_1_prompt,image_2_prompt,image_3_prompt,image_4_prompt,image_5_prompt
```

| Field | Default value |
| --- | --- |
| `HEADLINE` | Dancing Plague |
| `VOICEOVER` | Did you know that in 1518, a bizarre 'dancing plague' broke out in Strasbourg? For days, people danced uncontrollably in the streets, with no known cause. Some even collapsed from exhaustion or died. Historians are still baffled by this strange event, which remains one of history's most mysterious epidemics. |
| `IMAGE_1_PROMPT` | Create a haunting yet realistic scene of a medieval street in Strasbourg, filled with townspeople dancing uncontrollably. The lighting should be dim and atmospheric, with shadows cast by the moonlight, highlighting the eerie and chaotic nature of the event. The background should include darkened medieval buildings and torches flickering in the distance. |
| `IMAGE_2_PROMPT` | Design a dramatic close-up of a group of individual dancers, exhausted but at ease, mid-movement. The focus should be on their intensity. The lighting should be soft, with subtle shadows creating depth. |
| `IMAGE_3_PROMPT` | Illustrate a medieval town square in Strasbourg, filled with a mix of dancing townspeople and concerned onlookers. The scene should feature warm torchlight contrasting with the cool moonlight, casting an ominous glow on the cobblestone streets. The architecture should be historically accurate, with wooden market stalls and stone buildings surrounding the square. |
| `IMAGE_4_PROMPT` | Generate an image of town officials and doctors standing on the edges of the scene, observing the chaos. They should look confused and distressed, holding scrolls or medieval medical instruments. The lighting should create a contrast between the torchlight and the dark, adding a sense of urgency to their expressions. |
| `IMAGE_5_PROMPT` | Create a surreal, almost dreamlike depiction of the dancers, with their movements becoming blurred and ghostly. The background should be dark, with dim torchlight casting long shadows, while the dancers' figures appear exaggerated and otherworldly, reflecting the mysterious nature of the event. |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
