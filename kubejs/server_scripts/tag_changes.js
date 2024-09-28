ServerEvents.tags('item', event => {
   
    event.removeAll("#blue_skies:cobblestone");
    event.add("#forge:cobblestone",['blue_skies:turquoise_cobblestone']);
    event.add("#forge:cobblestone",['blue_skies:lunar_cobblestone']);
  })