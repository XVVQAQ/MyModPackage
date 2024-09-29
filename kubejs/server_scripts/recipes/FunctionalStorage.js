ServerEvents.recipes(event => {
    //液体抽屉配方更改
    event.replaceInput({mod:'functionalstorage',output:'functionalstorage:fluid_1'},
        '#minecraft:planks', 'forge:ingots/iron')
    event.replaceInput({mod:'functionalstorage',output:'functionalstorage:fluid_1'},
        'minecraft:bucket' , 'create:fluid_tank')
    event.replaceInput({mod:'functionalstorage',output:'functionalstorage:fluid_2'},
        '#minecraft:planks', 'forge:ingots/iron')
    event.replaceInput({mod:'functionalstorage',output:'functionalstorage:fluid_2'},
        'minecraft:bucket' , 'create:fluid_tank')
    event.replaceInput({mod:'functionalstorage',output:'functionalstorage:fluid_4'},
        '#minecraft:planks', 'forge:ingots/iron')
    event.replaceInput({mod:'functionalstorage',output:'functionalstorage:fluid_4'},
        'minecraft:bucket' , 'create:fluid_tank')


})