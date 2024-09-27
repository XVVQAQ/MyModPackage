# MoreJSEvents.updateAbstractVillagerOffers

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: UpdateAbstractVillagerOffersEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| isWanderer |  |  | boolean | ✘ |
| isVillager |  |  | boolean | ✘ |
| getVillagerTrades | VillagerProfession, int |  | List<VillagerTrades$ItemListing> | ✘ |
| getVillagerTrades | VillagerProfession |  | List<VillagerTrades$ItemListing> | ✘ |
| getOffers |  |  | MerchantOffers | ✘ |
| getWandererTrades |  |  | List<VillagerTrades$ItemListing> | ✘ |
| getWandererTrades | int |  | List<VillagerTrades$ItemListing> | ✘ |
| invokeEvent | AbstractVillager, MerchantOffers, ItemListing[], List<MerchantOffer> |  | void | ✔ |
| getEntity |  |  | Entity | ✘ |
| deleteAddedOffers |  |  | void | ✘ |
| getUsedTrades |  |  | List<VillagerTrades$ItemListing> | ✘ |
| getAddedOffers |  |  | Collection<MerchantOffer> | ✘ |
| addRandomOffer | List<VillagerTrades$ItemListing> |  | MerchantOffer | ✘ |
| addRandomOffer |  |  | MerchantOffer | ✘ |
| getVillagerData |  |  | VillagerData | ✘ |
| getPlayer |  |  | Player | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
MoreJSEvents.updateAbstractVillagerOffers((event) => {
	// This space (un)intentionally left blank
});
```

