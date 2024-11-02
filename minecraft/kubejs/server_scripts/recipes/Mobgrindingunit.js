ServerEvents.recipes(event => {
    //储罐配方更改
    event.replaceInput(
        {mod:'mob_grinding_utils',
            output:'mob_grinding_utils:tank'
        },'#forge:ingots/iron', 'minecraft:obsidian'
    )
})