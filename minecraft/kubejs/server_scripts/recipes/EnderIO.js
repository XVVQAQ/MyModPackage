ServerEvents.recipes(event => {
    //储罐配方替换
    event.replaceInput({mod:'enderio',output:'enderio:fluid_tank'},'#forge:glass','create:fluid_tank')
})