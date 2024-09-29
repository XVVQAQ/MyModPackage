ServerEvents.recipes(event => {
    //增强机械动力液体储罐配方
    event.remove({output:'create:fluid_tank'})
    event.shaped(Item.of('create:fluid_tank',1),[
        'AAA',
        'ABA',
        'AAA',
    ],{
        A:'#forge:plates/copper',
        B:'minecraft:barrel',
    })
})