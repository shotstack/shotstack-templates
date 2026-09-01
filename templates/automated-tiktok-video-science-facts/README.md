# AI Science Facts TikTok Video

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 17s · **Format:** mp4 · **Category:** Social Media

![AI Science Facts TikTok Video preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_1500_2_8bd04cdf21.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/automated-tiktok-video-science-facts/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/automated-tiktok-video-science-facts
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
voiceover,image_1_prompt,image_2_prompt,image_3_prompt,image_4_prompt,image_5_prompt,headline
```

| Field | Default value |
| --- | --- |
| `VOICEOVER` | Did you know that bananas are slightly radioactive? They contain potassium-40, a naturally occurring isotope that emits a small amount of radiation. Don’t worry though, you’d have to eat over 10 million bananas at once to experience any harmful effects! This phenomenon is known as the ‘banana equivalent dose,’ and it’s a fun way to understand radiation in everyday life. |
| `IMAGE_1_PROMPT` | A perfectly peeled banana hovers gracefully above a sleek, reflective metal surface in a futuristic laboratory. Suspended just above the banana is a glowing radiation symbol, its black lines crisp and sharp against the radiant yellow center. The glossy surface of the table captures reflections of the warm orange gradient in the background, adding a sense of depth and energy to the scene. Soft, translucent bubbles float effortlessly around the banana, reflecting light and casting gentle highlights across the smooth lines of the scene. The retro-futuristic vibe, with its glossy finishes and clean, curved lines, evokes a sense of mid-century sci-fi, blending the playful imagery of the banana with the precise, scientific iconography of the radiation symbol. |
| `IMAGE_2_PROMPT` | A half-peeled banana floats above a shiny metal table in a laboratory setting, with a detailed potassium atom suspended within the fruit’s curved form. The shiny surface of the table reflects the vibrant orange background, while the banana’s yellow colors contrast against the glowing nucleus and orbiting electrons of the atom. Surrounding the banana, translucent bubbles float gently, reflecting light and adding depth to the scene. The smooth lines and retro-futuristic aesthetic, reminiscent of mid-century sci-fi illustrations, are complemented by the juxtaposition of the banana’s natural form and the scientifically precise atom within. |
| `IMAGE_3_PROMPT` | A small stack of perfectly ripe, peeled bananas rests on a sleek metal table inside a retro-futuristic laboratory. Beside the stack, a modern, digital radiation meter floats just above the surface, its glowing screen reflecting softly on the shiny table. The background features a warm orange gradient, complemented by softly floating translucent bubbles that reflect the surrounding light. Smooth lines and a glossy finish give the scene a mid-century sci-fi aesthetic, emphasizing the playful yet precise contrast between the bananas’ natural form and the scientific equipment around them. |
| `IMAGE_4_PROMPT` | A single, peeled banana stands upright in the center of a gleaming metal platform, floating slightly above the surface in a futuristic lab environment. Surrounding the banana, softly glowing translucent bubbles float, adding depth and reflecting the ambient light. The background is a vibrant orange gradient, seamlessly blending with the reflective surface of the platform. The scene has a retro-futuristic feel, with smooth lines and a sleek, glossy finish reminiscent of mid-century sci-fi artwork. The juxtaposition of the banana’s natural form with the scientific, futuristic setting creates a whimsical yet thought-provoking contrast. |
| `IMAGE_5_PROMPT` | A sleek laboratory scene features a perfectly peeled banana sliced down the middle, with one half revealing a detailed potassium atom inside, complete with orbiting electrons and a glowing nucleus. The banana hovers just above a shiny, reflective table, which mirrors the vibrant orange gradient of the background. Soft, translucent bubbles float through the air, reflecting light and adding a sense of depth to the composition. The artwork’s retro-futuristic aesthetic, inspired by mid-century sci-fi illustrations, emphasizes smooth lines and glossy finishes, creating a visually striking contrast between the organic banana and the scientific precision of the atom. |
| `HEADLINE` | Surprising Banana Fact |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
