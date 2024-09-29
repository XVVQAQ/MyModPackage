ServerEvents.recipes(event => {
    //火山核心

    const BlockTank = Item.of('mob_grinding_utils:tank', '{Amount:32000,FluidName:"minecraft:lava",ForgeCaps:{}}').weakNBT()
    event.remove({output:'alexscaves:volcanic_core'})
    event.shaped(Item.of('alexscaves:volcanic_core',1),[
        'ABA',
        'BCB',
        'ABA',
    ],{
        A:'#forge:obsidian',
        B:'minecraft:magma_block',
        C: BlockTank,
    })
    //解锁新生魔艺后配方
    event.remove({output:'alexscaves:volcanic_core'})
    event.shaped(Item.of('alexscaves:volcanic_core',1),[
        'ABA',
        'BCB',
        'ABA',
    ],{
        A:'#forge:obsidian',
        B:'minecraft:magma_block',
        C:'ars_nouveau:fire_essence',
    })
})