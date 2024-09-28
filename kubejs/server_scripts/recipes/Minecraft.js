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
    
    event.remove({output:'minecraft:crafting_table'})
    event.shaped(Item.of('minecraft:crafting_table',1),[
        'AB',
        'CD',
    ],{
        A:"#minecraft:logs",
        B:"#minecraft:axes",
        C:"#forge:pickaxes",
        D:"#notreepunching:knives",
    })
    
    
})