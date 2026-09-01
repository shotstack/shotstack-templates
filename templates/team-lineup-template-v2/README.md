# Team Lineup Template - Showcase Your Players

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 34s · **Format:** mp4 · **Category:** Other

![Team Lineup Template - Showcase Your Players preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Team_Lineup_Template_Showcase_Your_Players_6418511463.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/team-lineup-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/team-lineup-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
1player_name,2player_name,3player_name,4player_name,5player_name,6player_name,7player_name,8player_name,9player_name,10player_name,11player_name,12player_name,13player_name,14player_name,15player_name,16player_name,17player_name,18player_name,19player_name,20player_name,21player_name,22player_name,1player_position ,2player_position,3player_position,4player_position,5player_position,6player_position,7player_position,8player_position,9player_position,10player_position,11player_position,background_image_src,header_background_color,list_background_color,field_image_src,1player_position_offset_x,1player_position_y,2player_position_x_2,2player_position_y_2,3player_position_x_3,3player_position_y_3,4player_position_x_4,4player_position_y_4,5player_position_x_5,5player_position_y_5,6player_position_x_6,6player_position_y_6,7player_position_x_7,7player_position_y_7,8player_position_x_8,8player_position_y_8,9player_position_x_9,9player_position_y_9,10player_position_x_10,10player_position_y_10,11player_position_x_11,11player_position_y_11,all_text_font_color,a1player_positionn_offset_x,a1player_position_offset_y,a2player_position_offset_x_2,a2player_position_offset_y_2,a3player_position_offset_x_3,a3player_position_offset_y_3,a4player_position_offset_x_4,a4player_position_offset_y_4,a5player_position_offset_x_5,a5player_position_offset_y_5,a6player_position_offset_x_6,a6player_position_offset_y_6,a7player_position_offset_x_7,a7player_position_offset_y_7,a8player_position_offset_x_8,a8player_position_offset_y_8,a9player_position_offset_x_9,a9player_position_offset_y_9,a10player_position_offset_x_10,a10player_position_offset_y_10,a11player_position_offset_x_11,a11player_position_offset_y_11,text_background_color,1player_image_src,2player_image_src_2,3player_image_src_3,4player_image_src_4,5player_image_src_5,6player_image_src_6,7player_image_src_7,8player_image_src_8,9player_image_src_9,10player_image_src_10,11player_image_src_11
```

| Field | Default value |
| --- | --- |
| `1PLAYER_Name` | 06 - Ethan Reynolds |
| `2PLAYER_Name` | 01 - Lucas Bennett |
| `3PLAYER_Name` | 03 - Daniel Carter |
| `4PLAYER_Name` | 04 - James Fletcher |
| `5PLAYER_Name` | 11 - Mason Caldwell |
| `6PLAYER_Name` | 08 - Noah Sinclair |
| `7PLAYER_Name` | 02 - Sebastian Holt |
| `8PLAYER_Name` | 14 - Julian Mercer |
| `9PLAYER_Name` | 10 - Liam Donovan |
| `10PLAYER_Name` | 05 - Alexander Hayes |
| `11PLAYER_Name` | 09 - Nathan Cross |
| `12PLAYER_Name` | 19 - Gabriel Whitman |
| `13PLAYER_Name` | 23 - Samuel Prescott |
| `14PLAYER_Name` | 21 - Elijah Townsend |
| `15PLAYER_Name` | 17 - Gabriel WhitmanU |
| `16PLAYER_Name` | 20 - Dominic Sutherland |
| `17PLAYER_Name` | 13 - Caleb Morrison |
| `18PLAYER_Name` | 24 - Ryan Lancaster |
| `19PLAYER_Name` | 31 - Zachary Vaughn |
| `20PLAYER_Name` | 45 - Henry Caldwell |
| `21PLAYER_Name` | 18 - Evan Harrington |
| `22PLAYER_Name` | 18 - Tristan Holloway |
| `1PLAYER_POSITION` | 6 |
| `2PLAYER_POSITION` | 1 |
| `3PLAYER_POSITION` | 3 |
| `4PLAYER_POSITION` | 4 |
| `5PLAYER_POSITION` | 11 |
| `6PLAYER_POSITION` | 8 |
| `7PLAYER_POSITION` | 2 |
| `8PLAYER_POSITION` | 14 |
| `9PLAYER_POSITION` | 10 |
| `10PLAYER_POSITION` | 5 |
| `11PLAYER_POSITION` | 9 |
| `BACKGROUND_IMAGE_SRC` | https://templates.shotstack.io/team-lineup-template/ae3c182f-f2f8-4b34-ae44-c21252028def/shotstack-proxy.webp |
| `HEADER_BACKGROUND_COLOR` | #77641d |
| `LIST_BACKGROUND_COLOR` | #cd411d |
| `FIELD_IMAGE_SRC` | https://templates.shotstack.io/team-lineup-template/6bda63a0-cc0e-41b1-9721-86fdbc9aaa2c/source.png |
| `1PLAYER_POSITION_OFFSET_X` | -0.028 |
| `1PLAYER_POSITION_Y` | -0.228 |
| `2PLAYER_POSITION_X_2` | 0.01 |
| `2PLAYER_POSITION_Y_2` | -0.133 |
| `3PLAYER_POSITION_X_3` | -0.07 |
| `3PLAYER_POSITION_Y_3` | -0.138 |
| `4PLAYER_POSITION_X_4` | -0.091 |
| `4PLAYER_POSITION_Y_4` | -0.091 |
| `5PLAYER_POSITION_X_5` | 0.02 |
| `5PLAYER_POSITION_Y_5` | -0.076 |
| `6PLAYER_POSITION_X_6` | -0.028 |
| `6PLAYER_POSITION_Y_6` | -0.058 |
| `7PLAYER_POSITION_X_7` | -0.013 |
| `7PLAYER_POSITION_Y_7` | 0.014 |
| `8PLAYER_POSITION_X_8` | -0.079 |
| `8PLAYER_POSITION_Y_8` | 0.084 |
| `9PLAYER_POSITION_X_9` | -0.031 |
| `9PLAYER_POSITION_Y_9` | 0.084 |
| `10PLAYER_POSITION_X_10` | 0.018 |
| `10PLAYER_POSITION_Y_10` | 0.084 |
| `11PLAYER_POSITION_X_11` | -0.023 |
| `11PLAYER_POSITION_Y_11` | 0.138 |
| `All_TEXT_FONT_COLOR` | #ffffff |
| `A1PLAYER_POSITIONN_OFFSET_X` | 0.319 |
| `A1PLAYER_POSITION_OFFSET_Y` | -0.019 |
| `A2PLAYER_POSITION_OFFSET_X_2` | 0.246 |
| `A2PLAYER_POSITION_OFFSET_Y_2` | -0.171 |
| `A3PLAYER_POSITION_OFFSET_X_3` | 0.243 |
| `A3PLAYER_POSITION_OFFSET_Y_3` | 0.08 |
| `A4PLAYER_POSITION_OFFSET_X_4` | 0.194 |
| `A4PLAYER_POSITION_OFFSET_Y_4` | -0.185 |
| `A5PLAYER_POSITION_OFFSET_X_5` | 0.191 |
| `A5PLAYER_POSITION_OFFSET_Y_5` | 0.15 |
| `A6PLAYER_POSITION_OFFSET_X_6` | 0.13 |
| `A6PLAYER_POSITION_OFFSET_Y_6` | -0.143 |
| `A7PLAYER_POSITION_OFFSET_X_7` | 0.127 |
| `A7PLAYER_POSITION_OFFSET_Y_7` | 0.096 |
| `A8PLAYER_POSITION_OFFSET_X_8` | 0.008 |
| `A8PLAYER_POSITION_OFFSET_Y_8` | -0.246 |
| `A9PLAYER_POSITION_OFFSET_X_9` | 0.038 |
| `A9PLAYER_POSITION_OFFSET_Y_9` | -0.03 |
| `A10PLAYER_POSITION_OFFSET_X_10` | 0.008 |
| `A10PLAYER_POSITION_OFFSET_Y_10` | 0.189 |
| `A11PLAYER_POSITION_OFFSET_X_11` | -0.049 |
| `A11PLAYER_POSITION_OFFSET_Y_11` | -0.023 |
| `TEXT_BACKGROUND_COLOR` | #ffffff |
| `1PLAYER_IMAGE_SRC` | https://templates.shotstack.io/team-lineup-template/20c51743-e839-4860-9613-713983f279ae/source.png |
| `2PLAYER_IMAGE_SRC_2` | https://templates.shotstack.io/team-lineup-template/9ed82553-bf1d-44d7-94c3-619e9933e2d7/source.png |
| `3PLAYER_IMAGE_SRC_3` | https://templates.shotstack.io/team-lineup-template/9f9328a0-ca05-45f8-98d6-fdb9fdbb35e1/source.png |
| `4PLAYER_IMAGE_SRC_4` | https://templates.shotstack.io/team-lineup-template/5575dd88-2ad4-4f73-8d7d-44dea71d4ebe/source.png |
| `5PLAYER_IMAGE_SRC_5` | https://templates.shotstack.io/team-lineup-template/24e1798a-c492-4916-ae5f-8b088d5c1800/source.png |
| `6PLAYER_IMAGE_SRC_6` | https://templates.shotstack.io/team-lineup-template/c2017f80-385f-4514-9a78-e81f3395cefa/source.png |
| `7PLAYER_IMAGE_SRC_7` | https://templates.shotstack.io/team-lineup-template/5c6bb5f8-fc1b-436b-838b-ae8db71a2a73/source.png |
| `8PLAYER_IMAGE_SRC_8` | https://templates.shotstack.io/team-lineup-template/9c663fa0-d6f8-4e88-a641-1262d163c22b/source.png |
| `9PLAYER_IMAGE_SRC_9` | https://templates.shotstack.io/team-lineup-template/af752dc9-ad09-4404-ad00-4ea546565259/source.png |
| `10PLAYER_IMAGE_SRC_10` | https://templates.shotstack.io/team-lineup-template/dde499f1-9c04-489c-91a8-84721f79575a/source.png |
| `11PLAYER_IMAGE_SRC_11` | https://templates.shotstack.io/team-lineup-template/c777f82f-4f6c-43be-8a13-3579ecb00aef/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
