ServerEvents.recipes(event => {
    //基础储罐套娃
    event.remove({output:'mekanism:basic_fluid_tank'})
    event.shaped(Item.of('mekanism:basic_fluid_tank',1),[
        'ABA',
        'BCB',
        'ABA',
    ],{
        A:'minecraft:redstone',
        B:'#forge:plates/iron',
        C:'create:fluid_tank',
    })
})