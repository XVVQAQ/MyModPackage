ServerEvents.recipes(event => {
    //熔炉配方加难
    event.replaceInput({mod:'ironfurnaces',output:'ironfurnaces:silver_furnace'},
        '#forge:ingots/silver' , '#forge:plates/silver')
    event.replaceInput({mod:'ironfurnaces',output:'ironfurnaces:iron_furnace'},
        '#forge:ingots/iron' , '#forge:plates/iron')
    event.replaceInput({mod:'ironfurnaces',output:'ironfurnaces:gold_furnace'},
        '#forge:ingots/gold' , '#forge:plates/gold')
    event.replaceInput({mod:'ironfurnaces',output:'ironfurnaces:netherite_furnace'},
        '#forge:ingots/netherite' , '#forge:plates/netherite')
    event.replaceInput({mod:'ironfurnaces',output:'ironfurnaces:copper_furnace'},
        '#forge:ingots/copper' , '#forge:plates/copper')
    //熔炉升级
})