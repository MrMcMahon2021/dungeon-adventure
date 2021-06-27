function changeLevel (levelNum: number) {
    if (levelNum == 0) {
        tiles.setTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorMixed)
    } else if (levelNum == 1) {
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorMixed)
    } else if (levelNum == 2) {
        tiles.setTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorMixed)
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    currentLevel += 1
    changeLevel(currentLevel)
})
let currentLevel = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 3 f f . . 
    . . f d f f 3 5 5 3 f d f . . . 
    . . . f f 3 3 3 3 3 f d f . . . 
    . . . f 3 3 5 3 3 5 3 f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
info.setScore(0)
currentLevel = 0
changeLevel(0)
