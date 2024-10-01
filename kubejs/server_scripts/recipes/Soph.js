ServerEvents.recipes(event => {
    //替换精妙铁存储箱子升级配方
    event.replaceInput({mod:'sophisticatedstorage',output:'sophisticatedstorage:basic_to_iron_tier_upgrade'},
        'minecraft:iron_ingot' , '#forge:plates/iron')
    event.replaceInput({mod:'sophisticatedstorage',output:'sophisticatedstorage:basic_to_copper_tier_upgrade'},
        'minecraft:copper_ingot' , '#forge:plates/copper')
    event.replaceInput({mod:'sophisticatedstorage',output:'sophisticatedstorage:copper_to_iron_tier_upgrade'},
        'minecraft:iron_ingot' , '#forge:plates/iron')
    //替换精妙存储金箱子升级配方
    event.replaceInput({mod:'sophisticatedstorage',output:'sophisticatedstorage:iron_to_gold_tier_upgrade'},
        'minecraft:gold_ingot' , '#forge:plates/gold')
    event.replaceInput({mod:'sophisticatedstorage',output:'sophisticatedstorage:basic_to_gold_tier_upgrade'},
        'minecraft:gold_ingot' , '#forge:plates/gold')
    event.replaceInput({mod:'sophisticatedstorage',output:'sophisticatedstorage:copper_to_gold_tier_upgrade'},
        'minecraft:gold_ingot' , '#forge:plates/gold')

})