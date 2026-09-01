# Business Performance Comparison - Revenue vs. Net Profit

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 32s · **Format:** mp4 · **Category:** News

![Business Performance Comparison - Revenue vs. Net Profit preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Business_Performance_Comparison_Revenue_vs_Net_Profit_03aeae0459.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/business-performance-comparison/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/business-performance-comparison
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
graph_1_title,bar_1,bar_2,graph_1_x_axis,graph_1_y_axis,var1_y_axis,var2_y_axis,var3_y_axis,var4_y_axis,var5_y_axis,var1_x_axis,var2_x_axis,text_font_color,bar_1_colour,bar_2_color_2,s1_video_src,s2_image_src,s3_video_src_2,s1_line_color,s1_background_color,s4_video_src,bar_3_color,s2_background_color,s5_video_src,s2_line_color,graph_2_title,s2_var1_x_axis,s2_var2_x_axis,graph_2_x_axis,s2_var1_y_axis,s2_var2_y_axis,s2_var3_y_axis,s2_var4_y_axis,s2_var5_y_axis,s2_var6_y_axis,graph_2_y_axis,s2_text_font_color,bar_1_height,bar_2_height,bar_3_height,bar_4_height,bar_5_height,bar_6_height
```

| Field | Default value |
| --- | --- |
| `Graph_1_Title` | Revenue and Net Profit Comparison |
| `Bar_1` | Revenue |
| `Bar_2` | Net Profit |
| `Graph_1_X_Axis` | Quarter |
| `Graph_1_Y_Axis` | AUM ($ USD) |
| `Var1_Y_Axis` | 0 |
| `Var2_Y_Axis` | 5 |
| `Var3_Y_Axis` | 10 |
| `Var4_Y_Axis` | 15 |
| `Var5_Y_Axis` | 20 |
| `Var1_X_Axis` | Q3 |
| `Var2_X_Axis` | Q3 |
| `TEXT_FONT_COLOR` | #000000 |
| `Bar_1_Colour` | #2b299e |
| `Bar_2_COLOR_2` | #1db5e7 |
| `S1_VIDEO_SRC` | https://templates.shotstack.io/business-performance-comparison/69343146-2ed4-40d0-8155-0745222ffaa4/shotstack-proxy.mp4 |
| `S2_IMAGE_SRC` | https://templates.shotstack.io/business-performance-comparison/243ab11c-cfa4-453c-a9f8-c6b50221b4ca/shotstack-proxy.webp |
| `S3_VIDEO_SRC_2` | https://templates.shotstack.io/business-performance-comparison/5d79b275-7597-467a-bf87-806d0b10c8f8/shotstack-proxy.mp4 |
| `S1_Line_COLOR` | #000000 |
| `S1_BACKGROUND_COLOR` | #ffffff |
| `S4_VIDEO_SRC` | https://templates.shotstack.io/business-performance-comparison/badb1406-f8e6-4a37-955c-e1a6b5d3bf2b/shotstack-proxy.mp4 |
| `Bar_3_COLOR` | #0091ff |
| `S2_BACKGROUND_COLOR` | #ffffff |
| `S5_VIDEO_SRC` | https://templates.shotstack.io/business-performance-comparison/c7bf258e-8bbe-456e-939e-7c5e19cc50a2/shotstack-proxy.mp4 |
| `S2_Line_COLOR` | #000000 |
| `Graph_2_Title` | Asset Under Management (AUM) Growth |
| `S2_Var1_X_Axis` | Q3 |
| `S2_Var2_X_Axis` | Q3 |
| `Graph_2_X_Axis` | Quarter |
| `S2_Var1_Y_Axis` | 0 |
| `S2_Var2_Y_Axis` | 10 |
| `S2_Var3_Y_Axis` | 20 |
| `S2_Var4_Y_Axis` | 30 |
| `S2_Var5_Y_Axis` | 40 |
| `S2_Var6_Y_Axis` | 50 |
| `Graph_2_Y_Axis` | AUM ($ USD) |
| `S2_TEXT_FONT_COLOR` | #000000 |
| `BAR_1_HEIGHT` | 0.175 |
| `BAR_2_HEIGHT` | 0.076 |
| `BAR_3_HEIGHT` | 0.175 |
| `BAR_4_HEIGHT` | 0.076 |
| `BAR_5_HEIGHT` | -0.011 |
| `BAR_6_HEIGHT` | 0.13 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
