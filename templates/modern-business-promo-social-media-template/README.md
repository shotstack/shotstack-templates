# Modern Business Tips & Offers Social Post Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 21.1s · **Format:** mp4 · **Category:** E-Commerce

![Modern Business Tips & Offers Social Post Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Business_Tips_and_Offers_Social_Post_Template_f4a75e34b0.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-business-promo-social-media-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/modern-business-promo-social-media-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
video_src,video_src_2,video_src_3,video_src_4,video_src_5,video_src_6,s1_title,s1_description,1,s2_title,s2_description,2,s2_title,s2_description,3,s3_tittle,s3_description,4,s4_title,s4_description,5,s5_title,s5_description,font_color,audio_src,overlay_background_color
```

| Field | Default value |
| --- | --- |
| `VIDEO_SRC` | https://templates.shotstack.io/modern-business-promo-social-media-template/13a1a545-2d13-4c1f-b377-08748b3f7851/shotstack-proxy.mp4 |
| `VIDEO_SRC_2` | https://templates.shotstack.io/modern-business-promo-social-media-template/b7ff2ffb-9d1d-455f-90ec-9a793018b493/source.mp4 |
| `VIDEO_SRC_3` | https://templates.shotstack.io/modern-business-promo-social-media-template/7d61ece2-5ad0-427e-a17c-6b1e1fc37cfe/source.mp4 |
| `VIDEO_SRC_4` | https://templates.shotstack.io/modern-business-promo-social-media-template/4747242e-e2cf-42ad-bc65-1e17c4d6be6a/source.mp4 |
| `VIDEO_SRC_5` | https://templates.shotstack.io/modern-business-promo-social-media-template/0c0f14af-4129-472b-b8e7-3b9a76a970f7/source.mp4 |
| `VIDEO_SRC_6` | https://templates.shotstack.io/modern-business-promo-social-media-template/11143ea6-036d-4170-8c12-4b069951d31e/source.mp4 |
| `S1_Title` | HOW TO ELEVATE YOUR ONLINE BUSINESS |
| `S1_DESCRIPTION` | 5 TIPS |
| `1` | 1 |
| `S2_Title` | UPGRADE YOUR BRAND PRNSENCE |
| `S2_DESCRIPTION` | Invest in a clean, professional logo, consistent color palette, and strong visuals across your website and social platforms. First impressions do matter. |
| `2` | 2 |
| `S2_Title` | OPTIMIZE YOU MOBILE AND SPEED |
| `S2_DESCRIPTION` | Most shoppers use phones—so make sure your website is mobile-friendly and fast-loading. A slow or clunky experience will drive people away. |
| `3` | 3 |
| `S3_Tittle` | LEVERAGE SOCIAL PROOF |
| `S3_DESCRIPTION` | Show off reviews, testimonials, and user-generated content. People trust what others say about you more than what you say about yourself. |
| `4` | 4 |
| `S4_Title` | USE STRATEGIC CONTENT MARKETING |
| `S4_DESCRIPTION` | Share valuable content through blogs, videos, emails, or social posts. Educate, entertain, or inspire your audience while subtly promoting your products. |
| `5` | 5 |
| `S5_Title` | RUN SMART ADS AND PROMOTION |
| `S5_DESCRIPTION` | Use platforms like Meta (Facebook/Instagram), Google, or TikTok to target the right audience. Test, analyze, and improve your ad performance regularly. |
| `FONT_COLOR` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/modern-business-promo-social-media-template/6e31162e-bda1-42f5-ac8f-9eeaaefcd3e9/source.mp3 |
| `Overlay_BACKGROUND_COLOR` | #050505 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
