ServerEvents.recipes(event => {
    event.remove({output:'twilightforest:uncrafting_table'})//移除拆解台
    event.remove({output:'cyclic:uncrafter'})//移除拆解台 
})