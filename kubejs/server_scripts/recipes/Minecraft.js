ServerEvents.recipes(event => {
    //Vanilla
    
    event.remove({output:'minecraft:furnace'})

    event.shaped(Item.of('minecraft:furnace',1),[
        'AAA',
        'BCB',
        'AAA',
    ],{
        A:"#forge:cobblestone",
        B:'minecraft:flint',
        C:"#minecraft:logs",
    })
})