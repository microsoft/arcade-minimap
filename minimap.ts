enum MinimapScale {
    Original,
    Half,
    Quarter,
    Eighth,
    Sixteenth
}
enum MinimapSpriteScale {
    MinimapScale,
    Double,
    Quadruple,
    Octuple
}
//% color=#cfab0c icon="\uf278"
//% groups='["Images"]'
namespace minimap {
    // TODO: cannot extend native interfaces (https://github.com/microsoft/pxt/issues/6859),
    //      would prefer to extend Image
    export interface Minimap {
        image: Image;
        scale: MinimapScale;
        borderWidth: number;
        borderColor: number;
    }

    function renderScaledImage(source: Image, destination: Image, x: number, y: number, scale: MinimapScale) {
        const tile = source
        for (let i = 0; i < source.width; i += 1 << scale) {
            for (let j = 0; j < source.height; j += 1 << scale) {
                if (source.getPixel(i, j) != 0) {
                    destination.setPixel(x + (i >> scale), y + (j >> scale), source.getPixel(i, j))
                }
            }
        }
    }

    //% block="minimap || %scale scale with border $borderWidth $borderColor"
    //% blockId="create_minimap"
    //% expandableArgumentMode="toggle"
    //% scale.defl=MinimapScale.Half
    //% borderWidth.defl=2
    //% borderColor.shadow=colorindexpicker
    export function minimap(scale: MinimapScale = MinimapScale.Half, borderWidth = 0, borderColor = 0): Minimap {
        const tilemap = game.currentScene().tileMap;

        const numRows = tilemap.areaHeight() >> tilemap.scale
        const numCols = tilemap.areaWidth() >> tilemap.scale
        const tileWidth = 1 << tilemap.scale

        const minimap: Image = image.create(
            (numCols * tileWidth >> scale) + borderWidth * 2, 
            (numRows * tileWidth >> scale) + borderWidth * 2)

        if (borderWidth > 0)
            minimap.fill(borderColor)

        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                const idx = tilemap.getTileIndex(c, r)
                const tile = tilemap.getTileImage(idx)
                const nx = (c * tileWidth >> scale) + borderWidth
                const ny = (r * tileWidth >> scale) + borderWidth
                renderScaledImage(tile, minimap, nx, ny, scale);
            }
        }

        // TODO: https://github.com/microsoft/pxt/issues/6859
        // minimap.minimapScale = scale;
        
        return {
            image: minimap,
            scale: scale,
            borderWidth,
            borderColor
        }
    }

    //% block="$minimap image"
    //% minimap.shadow=create_minimap
    export function getImage(minimap: Minimap): Image {
        return minimap.image
    }

    //% block="draw $sprite on $minimap || at $spriteScale scale"
    //% minimap.shadow=variables_get
    //% minimap.defl=minimap
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    export function includeSprite(minimap: Minimap, sprite: Sprite, spriteScale = MinimapSpriteScale.MinimapScale) {
        const scale = Math.max(minimap.scale - spriteScale, 0)
        const x = (sprite.x >> minimap.scale) - ((sprite.width / 2) >> scale) + minimap.borderWidth
        const y = (sprite.y >> minimap.scale) - ((sprite.height / 2) >> scale) + minimap.borderWidth
        renderScaledImage(sprite.image, minimap.image, x, y, scale);
    }
} 