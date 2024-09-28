StartupEvents.registry("block", (event) => {
    event.create("arcane_ore") // Create a new block
    .material("wood") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("my_namespace:my_other_tag") // Tag the block with `#my_namespace:my_other_tag`
    .tagBlock("mineable/axe") //can be mined faster with an axe
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .tagBlock("forge:ores")
})