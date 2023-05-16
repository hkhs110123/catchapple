input.onButtonPressed(Button.A, function () {
    people.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    game.resume()
    game.setScore(0)
    run = 1
    time = 500
})
input.onButtonPressed(Button.B, function () {
    people.change(LedSpriteProperty.X, 1)
})
let apple: game.LedSprite = null
let time = 0
let run = 0
let people: game.LedSprite = null
people = game.createSprite(2, 4)
run = 0
basic.forever(function () {
    if (run == 1) {
        apple = game.createSprite(randint(0, 4), 0)
        apple.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 5; index++) {
            if (apple.isDeleted()) {
                break;
            }
            if (index == 5) {
                apple.delete()
                run = 0
                game.pause()
                basic.showNumber(game.score())
            }
            apple.set(LedSpriteProperty.Y, index)
            basic.pause(time)
        }
        apple.delete()
        time += -20
    }
})
basic.forever(function () {
    if (run == 1) {
        if (people.isTouching(apple)) {
            game.addScore(1)
            apple.delete()
        }
    }
})
