# AI Bedtime Story TikTok Video

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 37s · **Format:** mp4 · **Category:** Social Media

![AI Bedtime Story TikTok Video preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_1500_6563661090.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/automated-tiktok-video-bedtime-story/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/automated-tiktok-video-bedtime-story
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
| `HEADLINE` | Luna’s Magical Night |
| `VOICEOVER` | On a quiet night, little Luna lay in bed, staring at the starry sky from her window. One star, brighter than all the others, seemed to twinkle just for her. Suddenly, the star flickered and floated down, landing gently on her windowsill. “Come with me,” the star whispered, “and I’ll show you the world beyond the sky.” Luna stepped onto the starlight path and felt herself gently lifted into the air. Higher and higher they flew, past the clouds and into the sparkling night. Soon, they reached a magical place where the stars danced and sang. “You see, every star has a song,” the star explained, “and they all come together to make the night beautiful.” After a while, it was time for Luna to return. The star gently guided her back home. Luna slipped back into her bed, feeling warm and safe, as the star whispered, “Goodnight, Luna.” |
| `IMAGE_1_PROMPT` | A drawing of a cozy bedroom with soft lighting, showing Luna, a young girl about 6 years old. Luna has shoulder-length, wavy dark brown hair, big curious green eyes, and a small button nose. She’s wearing a soft white nightgown with light blue trim. Her skin is fair with a slight blush on her cheeks. She’s tucked under a warm blanket, looking out the window. Outside her window, a clear night sky full of stars sparkles brightly. Luna’s wide eyes are filled with wonder as she gazes at the stars, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_2_PROMPT` | A drawing of a close-up of Luna’s face, showing her big green eyes filled with amazement. Her shoulder-length, wavy dark brown hair frames her face. Luna’s small button nose and fair skin with a soft blush on her cheeks give her a sense of childlike innocence. She’s wearing a white nightgown with light blue trim. She is gazing out the window at a single star glowing brightly in the sky, casting a soft magical glow on her face. The star twinkles as if it’s calling out to her, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_3_PROMPT` | A drawing of a close-up of Luna’s face, showing her big green eyes filled with amazement. Her shoulder-length, wavy dark brown hair frames her face. Luna’s small button nose and fair skin with a soft blush on her cheeks give her a sense of childlike innocence. She’s wearing a white nightgown with light blue trim. She is gazing out the window at a single star glowing brightly in the sky, casting a soft magical glow on her face. The star twinkles as if it’s calling out to her, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_4_PROMPT` | A drawing of Luna leaning forward from her bed, gazing in awe at the magical star outside her window. Her wavy dark brown hair falls just past her shoulders, and her wide green eyes are fixed on the star with curiosity and excitement. Luna is wearing a white nightgown with light blue trim. Her fair skin and slight blush give her an innocent look. The star forms a shimmering path leading into the sky, inviting her to follow, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_5_PROMPT` | A drawing of Luna stepping out of her window onto a glowing, magical path of starlight. Her dark brown wavy hair is gently flowing in the breeze, her big green eyes wide with excitement. She’s wearing a white nightgown with light blue trim, and her fair skin has a soft blush on her cheeks. Luna is floating just above the ground, looking joyful and free as she follows the magical star, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_6_PROMPT` | A drawing of Luna flying high in the sky with the glowing star beside her. Her shoulder-length wavy dark brown hair flows behind her as she soars through the air. Her green eyes are wide with joy, and her white nightgown with light blue trim flutters gently in the breeze. Her fair skin has a healthy glow as she takes in the sight of fluffy clouds and the twinkling stars above, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_7_PROMPT` | A drawing of Luna watching in awe as stars dance and sing in the sky. Her wavy dark brown hair frames her face, and her big green eyes are filled with wonder. She’s wearing her soft white nightgown with light blue trim, and her cheeks have a gentle blush. She floats gently in the air, surrounded by magical starlight, as stars form constellations and patterns around her, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_8_PROMPT` | A drawing of Luna in the sky, looking intently at the glowing star beside her. Her shoulder-length, wavy dark brown hair gently moves with the breeze. Her wide green eyes are focused, filled with curiosity and awe as she listens to the star explain the magic of the stars. Luna’s white nightgown with light blue trim flutters slightly, and her fair skin glows softly in the starlight, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_9_PROMPT` | A drawing of Luna floating down the starlight path back to her bedroom. Her dark brown wavy hair flows gently as she descends, her big green eyes looking peacefully ahead. She’s wearing her soft white nightgown with light blue trim, and her fair skin still glows from the starlight. The magical star is guiding her home, with twinkling stars in the background, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |
| `IMAGE_10_PROMPT` | A drawing of Luna back in her bed, snuggled under her warm blanket. Her shoulder-length, wavy dark brown hair rests on her pillow, and her big green eyes are closed peacefully. She’s wearing her soft white nightgown with light blue trim. The soft glow of the star fades into the night sky as Luna drifts off to sleep, her fair skin still glowing softly in the dim light, style of Maurice Sendak, inspired by Maurice Sendak, fairy tale illustrations, storybook illustration, inspired by Gustaf Tenggren, classic children’s illustrations, whimsical creatures. |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
