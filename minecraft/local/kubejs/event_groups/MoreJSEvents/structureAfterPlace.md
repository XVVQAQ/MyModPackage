# MoreJSEvents.structureAfterPlace

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: StructureAfterPlaceEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getId |  |  | ResourceLocation | ✘ |
| getType |  |  | ResourceLocation | ✘ |
| getChunkPos |  |  | ChunkPos | ✘ |
| getLevel |  |  | Level | ✘ |
| getStructureManager |  |  | StructureManager | ✘ |
| getStructure |  |  | Structure | ✘ |
| getChunkGenerator |  |  | ChunkGenerator | ✘ |
| getRandomSource |  |  | RandomSource | ✘ |
| getChunkBoundingBox |  |  | BoundingBox | ✘ |
| getStructureBoundingBox |  |  | BoundingBox | ✘ |
| getIntersectionPieces |  |  | Collection<StructurePiece> | ✘ |
| getIntersectionBoxes |  |  | Collection<BoundingBox> | ✘ |
| getPiecesContainer |  |  | PiecesContainer | ✘ |
| getGenStep |  |  | String | ✘ |
| getWorldGenLevel |  |  | WorldGenLevel | ✘ |
| getIntersectionMap |  |  | Map<StructurePiece, BoundingBox> | ✘ |
| getPieceType | StructurePieceType |  | ResourceLocation | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
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

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

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
MoreJSEvents.structureAfterPlace((event) => {
	// This space (un)intentionally left blank
});
```

