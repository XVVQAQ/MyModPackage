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

    event.remove({output:'notreepunching:flint_shovel'})
    event.shaped(Item.of('notreepunching:flint_shovel',1),[
        'AB',
        ' C',
    ],{
        A:'kubejs:flint_shovel_head',
        B:"#forge:string",
        C:"#forge:rods/wooden",
    })

    event.remove({output:'notreepunching:flint_knife'})
    event.shaped(Item.of('notreepunching:flint_knife',1),[
        'A ',
        'B ',
    ],{
        A:'minecraft:flint',
        B:"#forge:rods/wooden",
    })

    //Tool Head Recipe

    event.shaped(Item.of('kubejs:flint_axe_head',1),[
        'AA',
    ],{
        A:'minecraft:flint',
    })


})