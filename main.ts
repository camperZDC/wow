sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.say("enemy")
    pause(200)
    mySprite.destroy()
})
let mySprite: Sprite = null
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . 2 e e e e 2 . . . . . . 
. . . . e 2 e e 2 e . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . . e e e e . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . . 2 1 1 2 . . . . . . . 
. . . . . f 1 1 f . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . c c . . . f e e e e f f e e e f . 
. . . . . . . c d c . f e 2 2 2 2 e e f f f f . 
. . . . . . . c d d c f 2 e f f f f 2 2 2 e f . 
. . . . . . . . c d d c f f e e e f f f f f f f 
. . . . . . . . . c d d c e 4 4 f b e 4 4 e f f 
. . . . . . . . . . c d c e d d f 1 4 d 4 e e f 
. . . . . . . . . . c c c d e d d d 4 e e e f . 
. . . . . . . . . . . e d d 4 e 4 4 e e f f . . 
. . . . . . . . . . . . e e 4 4 2 2 2 2 f . . . 
. . . . . . . . . . . . . f 2 e 2 2 2 2 f . . . 
. . . . . . . . . . . . . f 5 5 4 4 4 4 f . . . 
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . . . . f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . . 4 4 4 4 4 4 7 . . . . . 
. . . 4 4 4 4 4 4 4 4 7 . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite)
music.wawawawaa.playUntilDone()
game.onUpdate(function () {
    mySprite.x += controller.dx()
    mySprite.x += controller.dy()
})
