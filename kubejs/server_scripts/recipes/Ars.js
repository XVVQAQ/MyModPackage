ServerEvents.recipes(event => {
    //火山魔源通道
    event.remove({output:'ars_nouveau:volcanic_sourcelink'})
    event.shaped(Item.of('ars_nouveau:volcanic_sourcelink',1),[
        'ACA',
        'DBD',
        'AAA',
    ],{
        A:'#forge:plates/gold',
        B:'alexscaves:volcanic_core',
        C:'minecraft:blaze_powder',
        D:'minecraft:blaze_rod',
    })
})