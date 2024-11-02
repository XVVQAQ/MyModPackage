ServerEvents.recipes(event => {
    //替换工程师锤子
    event.replaceInput({mod:'immersiveengineering',output:'#immersiveengineering:tools/hammers'},
        'minecraft:iron_ingot' , '#forge:storage_blocks/iron')
    event.replaceInput({mod:'immersiveengineering',output:'#immersiveengineering:tools/hammers'},
        'minecraft:string' , 'kubejs:golden_string')
    //焦炉块配方更改
    //高炉配方更改
})