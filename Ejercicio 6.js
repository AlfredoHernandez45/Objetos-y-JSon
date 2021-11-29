/**
 * Ejercicio 6
 * 
 * {
  "kind": "youtube#searchListResponse",
  "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "KE",
  "pageInfo": {
    "totalResults": 4249,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCJowOS1R0FnhipXVqEnYU1A"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Eqa2nAAhHN0"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "IirngItQuVs"
      }
    }
  ]
}

 */

var objetoJson = new Object();
objetoJson.kind = "youtube#searchListResponse";
objetoJson.etag = "\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"";
objetoJson.nextPageToken =  "CAUQAA";
objetoJson.regionCode = "KE";
//   nuevo pageInfo
objetoJson.pageInfo = new Object();
objetoJson.pageInfo.totalResults = 4249;
objetoJson.pageInfo.resultsPerPage = 5;
//   nuevo items
objetoJson.items = new Array();
//      posicion 0
objetoJson.items[0] = new Object();
objetoJson.items[0].kind = "youtube#searchResult";
objetoJson.items[0].etag = "\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"";
//            nuevo id
objetoJson.items[0].id = new Object();
objetoJson.items[0].id.kind = "youtube#channel";
objetoJson.items[0].id.channelId = "UCJowOS1R0FnhipXVqEnYU1A";
//      posicion 1
objetoJson.items[1] = new Object();
objetoJson.items[1].kind = "youtube#searchResult";
objetoJson.items[1].etag = "\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"";
//            nuevo id
objetoJson.items[1].id = new Object();
objetoJson.items[1].id.kind = "youtube#video";
objetoJson.items[1].id.videoId = "Eqa2nAAhHN0";
//      posicion 2
objetoJson.items[2] = new Object();
objetoJson.items[2].kind = "youtube#searchResult";
objetoJson.items[2].etag =  "\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"";
//            nuevo id
objetoJson.items[2].id = new Object();
objetoJson.items[2].id.kind = "youtube#video";
objetoJson.items[2].id.videoId = "IirngItQuVs";

console.log(objetoJson);