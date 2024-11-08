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
        B:'notreepunching:flint_pickaxe',
        C:'notreepunching:flint_axe',
        D:"#notreepunching:knives",
    }).damageIngredient('notreepunching:flint_pickaxe','notreepunching:flint_axe',"#notreepunching:knives");

    event.remove({output:'minecraft:chest'})
    event.shaped(Item.of('minecraft:chest',2),[
        'ABA',
        'ACA',
        'ABA',
    ],{
        A:'#minecraft:planks',
        B:'#minecraft:logs',
        C:"#forge:nuggets/iron",
    })
    //移除木炭配方
    event.remove({output:'minecraft:charcoal'})
    //烟熏高炉
    event.remove({output:'minecraft:smoker'})
    event.shaped(Item.of('minecraft:smoker',1),[
        'AAA',
        'BCB',
        'AAA',
    ],{
        A:'#minecraft:logs',
        B:'minecraft:charcoal',
        C:'minecraft:furnace',
    })
    event.replaceInput({mod:'minecraft',output:'minecraft:blast_furnace'},
        'minecraft:iron_ingot' , '#forge:plates/iron')
})