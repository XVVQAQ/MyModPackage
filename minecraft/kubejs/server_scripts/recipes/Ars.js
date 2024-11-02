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
    //魔源锭
    event.recipes.ars_nouveau.enchanting_apparatus(//附魔装置
        [
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
        ], // 输入物品
    'mysticalagriculture:prosperity_ingot', // 反应物
    'kubejs:source_ingot', // 输出物品
    100, //魔源消耗
    // true // 是否保持nbt，就像锻造台那样
    );
    //灌注铁锭
    event.recipes.ars_nouveau.imbuement(//灌注
        '#forge:ingots/iron',//输入物品
        'naturesaura:infused_iron', // 输出物品
        1000, // 魔源消耗
        [
            'ars_nouveau:earth_essence',
            'ars_nouveau:water_essence',
        ] // 基座物品 // 可选
    );
})