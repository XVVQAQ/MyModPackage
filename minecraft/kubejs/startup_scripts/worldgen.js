//WorldgenEvents.add(event => {
    //event.addOre(ore => {
    //    ore.addTarget('#minecraft:stone_ore_replaceables', 'kubejs:arcane_ore') // replace anything in the vanilla stone_ore_replaceables tag with Glowstone
     //   ore.addTarget('minecraft:deepslate', 'kubejs:arcane_ore')       // replace Deepslate with Nether Wart Blocks

     //   ore.count([45])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
    //    .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
     //   .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
     //     anchors.aboveBottom(32),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
    //      anchors.absolute(96)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
   //     )								              // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32
  
  //    // more, optional parameters (default values are shown here)
  //    ore.size = 5                          // max. vein size
  //    ore.noSurface = 0.5                     // chance to discard if the ore would be exposed to air
 //     ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
   //   ore.chance = 0
 //   })





//})