StartupEvents.registry("block", (event) => {
    event.create("arcane_ore") // Create a new block
    .material("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/axe") //can be mined faster with an axe
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .tagBlock("forge:ores")
    .fullBlock(true)
    .textureAll('kubejs:block/arcane_ore')
})