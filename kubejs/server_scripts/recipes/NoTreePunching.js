ServerEvents.recipes(event => {
    
    //Flint Tools Recipes
    event.remove({output:'notreepunching:flint_axe'})
    event.shaped(Item.of('notreepunching:flint_axe',1),[
        'AB',
        ' C',
    ],{
        A:'kubejs:flint_axe_head',
        B:"#forge:string",
        C:"#forge:rods/wooden",
    })

    event.remove({output:'notreepunching:flint_hoe'})
    event.shaped(Item.of('notreepunching:flint_hoe',1),[
        'AB',
        ' C',
    ],{
        A:'kubejs:flint_hoe_head',
        B:"#forge:string",
        C:"#forge:rods/wooden",
    })

    event.remove({output:'notreepunching:flint_knife'})
    event.shaped(Item.of('notreepunching:flint_knife',1),[
        'A',
        'C ',
    ],{
        A:'kubejs:flint_knife_head',
        B:"#forge:string",
        C:"#forge:rods/wooden",
    })

    //Tool Head Recipe
    event.shaped(Item.of('kubejs:flint_knife_head',1),[
        'A ',
        ' ',
    ],{
        A:'minecraft:flint',
    })

    event.shaped(Item.of('kubejs:flint_knife_head',1),[
        'A ',
        ' ',
    ],{
        A:'minecraft:flint',
    })
})