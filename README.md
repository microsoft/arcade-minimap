# Minimaps ![Build status badge](https://github.com/microsoft/arcade-minimap/workflows/MakeCode/badge.svg)

## Use this extension

This extension allows you to create "minimaps". Minimaps are smaller representations of the tilemap and optionally any sprites you would like to include.

### Basic usage
Here's the most basic way to use the minimap:
![arcade-screenshot (3)](https://user-images.githubusercontent.com/6453828/90169355-56697f80-dd53-11ea-97f3-bcdfb5250a1c.png)
<img width="347" alt="Screen Shot 2020-08-13 at 10 45 19 AM" src="https://user-images.githubusercontent.com/6453828/90169305-45b90980-dd53-11ea-85c4-175d04b1d114.png">

### Including sprites
To include sprites on the minimap, use the "draw (mySprite) on (myMinimap)" block:
![arcade-screenshot (4)](https://user-images.githubusercontent.com/6453828/90169376-5d908d80-dd53-11ea-9a98-ea22a25a7adb.png)
<img width="345" alt="Screen Shot 2020-08-13 at 10 47 10 AM" src="https://user-images.githubusercontent.com/6453828/90169312-481b6380-dd53-11ea-87ed-530729213759.png">

### Updating the minimap
To constantly update the minimap based on sprite movement and tilemap changes, use "on game update":
![arcade-screenshot (5)](https://user-images.githubusercontent.com/6453828/90169381-5f5a5100-dd53-11ea-83e4-f005fdc3a1ef.png)
![download](https://user-images.githubusercontent.com/6453828/90169327-4ea9db00-dd53-11ea-92cf-e90baf3b7c3c.gif)

### Example projects
See the forums: https://forum.makecode.com/t/minimap-extension-beta/1709

### Performance considerations
If you're updating the minimap with an "on game update" or "forever" block, be aware that this can slow your game down a lot if:
 - many sprites are being draw to the minimap
 - the tilemap is very large
 - the updates are happening faster than every 500ms

If you notice your game running slow, try reducing the speed at which you update the minimap.

## Add this extension

This repository can be added as an **extension** in MakeCode.

* open https://arcade.makecode.com/
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for the URL of this repository and import

## Edit this extension

To edit this repository in MakeCode.

* open https://arcade.makecode.com/
* click on **Import** then click on **Import URL**
* paste the repository URL and click import

## Supported targets

* for PXT/arcade
* for PXT/arcade
(The metadata above is needed for package search.)


# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
