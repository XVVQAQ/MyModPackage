ServerEvents.recipes(event => {
    //金叶，自定义金线配方
    event.replaceInput({mod:'naturesaura',output:'naturesaura:gold_fiber'},
        'minecraft:grass', 'ars_nouveau:source_gem')
    event.shaped(Item.of('kubejs:golden_string',1),[
        'A A',
        ' B ',
        'A A'
    ],{
        A:'naturesaura:gold_fiber',
        B:'#forge:rods/gold',
    })
    //更改祭坛配方
    event.replaceInput({mod:'naturesaura',output:'naturesaura:token_joy'},
        '#forge:ingots/iron', 'naturesaura:infused_iron')
    event.replaceInput({mod:'naturesaura',output:'naturesaura:nature_altar'},
        '#forge:ingots/gold', 'naturesaura:infused_iron')
})