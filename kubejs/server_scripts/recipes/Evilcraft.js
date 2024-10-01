ServerEvents.recipes(event => {
    event.remove({output:'evilcraft:golden_string'})
    event.shaped(Item.of('evilcraft:golden_string',1),[
        ' A',
        'CBC',
        ' A ',
    ],{
        A:'kubejs:golden_string',
        B:'#forge:string',
        C:'aether:enchanted_berry',
    })
})