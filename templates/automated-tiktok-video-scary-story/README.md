# AI Scary Story TikTok Story Video

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 37s · **Format:** mp4 · **Category:** Social Media

![AI Scary Story TikTok Story Video preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_2043_405b788779.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/automated-tiktok-video-scary-story/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/automated-tiktok-video-scary-story
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,voiceover,image_1_prompt,image_2_prompt,image_3_prompt,image_4_prompt,image_5_prompt,image_6_prompt,image_7_prompt,image_8_prompt,image_9_prompt,image_10_prompt
```

| Field | Default value |
| --- | --- |
| `HEADLINE` | Gripped by Darkness |
| `VOICEOVER` | Late one stormy night, Mira heard a knock coming from the old cellar door, the one that had been locked for years. She crept down the stairs, her heart racing as the knocking grew louder. When she reached the door, her breath caught. The air felt cold and heavy. With shaking hands, she unlocked it, revealing a pitch-black void. A cold, clawed hand suddenly reached out, gripping her wrist tightly. She screamed, but before she could pull away, it yanked her into the darkness. The door slammed shut, and the house fell into eerie silence. |
| `IMAGE_1_PROMPT` | A black and white painting of a dark, old house interior at night. The walls are lined with decaying wallpaper, and shadows loom in every corner. A small, dusty staircase leads down to an old, weathered door in the cellar. The atmosphere is eerie, filled with silence and a sense of dread. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, surreal dark art, dark art style, grimdark art, dark surrealism. |
| `IMAGE_2_PROMPT` | A black and white painting of a young woman, Mira, with long, dark hair and wide, fearful eyes. She is standing at the top of the stairs, looking nervously down toward the cellar door. Her hands are gripping the railing tightly, her face lit with dim light. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, surreal dark art, dark illustration, dark fantasy illustration, grimdark art, dark surrealism. |
| `IMAGE_3_PROMPT` | A black and white painting of Mira slowly descending the stairs, each step creaking under her weight. The shadows seem to stretch unnaturally across the walls as she approaches the cellar door. Her face is filled with apprehension. The room is dimly lit, but the door itself is cloaked in shadow. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, surreal dark art, dark illustration, dark fantasy art, dark surrealism. |
| `IMAGE_4_PROMPT` | A black and white painting of Mira standing directly in front of the old cellar door. Her hand is extended, trembling, as she reaches for the rusted key in the lock. The door looks ancient, with deep cracks running along its wooden surface. Shadows behind her swirl ominously. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, dark surreal art, dark art style, dark fantasy illustration, grimdark art. |
| `IMAGE_5_PROMPT` | A black and white painting of the moment when Mira unlocks the door. As the door cracks open slightly, pure darkness spills out, and a cold, unnatural breeze escapes. The room behind her is almost swallowed by the thick shadows. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, dark surreal art, dark fantasy illustration, grimdark art, dark surrealism. |
| `IMAGE_6_PROMPT` | A black and white painting of Mira standing frozen in terror as she peers into the pitch-black void beyond the door. There is nothing but endless darkness on the other side. The room around her is dimly lit by a single flickering light, casting eerie, long shadows. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, dark art style, grimdark art, dark surrealism. |
| `IMAGE_7_PROMPT` | A black and white painting of a cold, shadowy hand emerging from the void, reaching out to grab Mira’s wrist. The hand is gaunt and unnaturally long, its fingers sharp and claw-like. Mira’s face is frozen in horror as she tries to pull away. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, surreal dark art, dark art style, grimdark art, dark surrealism. |
| `IMAGE_8_PROMPT` | A black and white painting of Mira being pulled towards the dark void by the cold, shadowy hand. Her body is tilted backward as she resists, but the hand is too strong. The room around her warps and distorts as she’s dragged into the darkness. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, dark surreal art, dark fantasy illustration, grimdark art, dark surrealism. |
| `IMAGE_9_PROMPT` | A black and white painting of Mira halfway into the dark void, her figure partially swallowed by the darkness. The shadowy hand grips her tightly as she is pulled further in. The cellar door hangs wide open, revealing nothing but pure darkness beyond. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, dark surreal art, grimdark art, dark surrealism. |
| `IMAGE_10_PROMPT` | A black and white painting of the cellar door slamming shut with an ominous force. The room is now silent and empty, with only faint shadows lingering where Mira once stood. The house feels abandoned and eerie. Highly detailed dark art, an ominous fantasy illustration, beksinski and dan mumford, surreal dark art, dark art style, grimdark art, dark surrealism. |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
