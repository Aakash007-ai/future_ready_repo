'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "89115e8c0b85c9af07293a2cbbeb0369",
".git/config": "c14e1f1f50437230593514a938a88f56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "07720e90c18b5c1c729c0163f7e75671",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ada49693c671e4eae85e26e72d09e43",
".git/logs/refs/heads/master": "2ada49693c671e4eae85e26e72d09e43",
".git/logs/refs/remotes/microsoft_future_ready/main": "2226c3cf0ba3dbdc340c20697ee62dc8",
".git/objects/00/4525bf0b15a1f5a7f7504392a3ffc4da43c0ce": "68bf1bfb194e60b8fc5ca7ae2fdc1de3",
".git/objects/06/49fbd5fe1c90d10a58e8106570429d70509eab": "02ff82bf2c8a9d8d6ba96ddbe21ae953",
".git/objects/0a/91678b684d80b4b7af8ebc6d7dff293aa9b368": "46411f83640fb315193abea289ce00f9",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/12/049eaef8059f98cf39f662c41cc5c95510b5f2": "be13361d5b6673de7ec0158b3585345c",
".git/objects/12/3f67d6dfb423687b0c7fe16f7fbd63e0b88571": "6e3d37d8c230a17093ddcf2c20c150f0",
".git/objects/14/f6246146e38e2bd713f89eb805e7ddf298daa4": "ec9fe5f806dc848ab966ea22212d3dd2",
".git/objects/20/776aa71503a67fc79e13377b90d782167725df": "378d757147db486a2e970a7c3fc81848",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/a6fbc89bf17180f470fad01722c05a5f8f64f3": "dfeec195faef25cc99e1e2be06e2a7f0",
".git/objects/26/dc5b3fce5dd0e0c460f911d850b8b5b59b011a": "19b8750d95d5e7f522b694b97b4eda2d",
".git/objects/27/2ead389462575424c8b628e9f2cb4ebe7975df": "1c5225c4d71dabcebab52310f547f13f",
".git/objects/27/60e4b71400e59f424e1221be1ef91c96bd2345": "b9fa3aca786199102f1d9497a30c2913",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/28/a9bca11579104f75ff8b47d698e2a3576ad8be": "ab4040f99befd704ccb3a28dcb58274d",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/d3778ba8fb7fdb53769b8cd9b158e5dd158bb9": "3fb5c8538c7b0414d87854f163ddf087",
".git/objects/2f/c1eaa41e0780f1417e82e7f46fa3490f64b94a": "0f9f12178937286f52af2b1e88aca0b1",
".git/objects/31/3b80ecf027e698a7e5cfb643553e0df03df0a8": "f9d245652e90db07d7e5873af63f7101",
".git/objects/31/79d6280907d4d5b898005e2f2593d22ae33fc4": "66de6c70f708046d66445798b168dec8",
".git/objects/34/2fae664553c66f950025fe6fb2d21f61d2925f": "b1ed8fd180f593227f093cac063baa6f",
".git/objects/3c/69229ca491cf3fcf43903820e59c7fc0d4dcd5": "a17d0412beb5cad20e6139c04be4c9a1",
".git/objects/3e/4b35822b2a97d48df521d07789b393341219cb": "0cd8c08126adae773daf1cde9bfd083d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/31f021be01fd8cfa1238c2a1569d68911c4e91": "f63ebd10edd610a4349869414b0b2419",
".git/objects/4a/44d365e9ef5ad605cfee12a8b2d18284816b87": "caefb40e33acac198d20ca98e1511bce",
".git/objects/4e/3bbdc21398a6575b1f622024ec00be3dddcf19": "2087aaebec35a254d5a26fdc6a16747c",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/a914e4350b1a205ed3b632094cab50c5f2365b": "32dcb3ede67a103eda30eee1a69c73e9",
".git/objects/4f/52bedcd1fdfaf7687985f81934011be3e5c025": "7b469ad365d1adfbcbf1b513c94cd70e",
".git/objects/51/2de4ac14a880f020bb6c4fc8412d4b4ed0585b": "4e4202d6bbab8679fc0a3039c73cf766",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/56/07d92739216c4fbc5979717bc48f09d354a122": "e6158386c78ee8c27503eca737b3aab2",
".git/objects/56/ad24de0ceeeb8b1e3d6b5b25f5cc0834f03dfc": "989aad58f6ddff9c1321984c29ceff4b",
".git/objects/5d/0a6642225aead219272df55696b2191bd78d51": "c203fb84328577247f54f82199558786",
".git/objects/61/4ea46f8561b04f6c36c53aa2a1f5c37faa3d88": "45be7da6471f970cb1500c788ae08921",
".git/objects/69/d2ea328405f0efeaf7d80c8ffc450d4ed49ee0": "5b7847a681d2bdc7d2749a0863661886",
".git/objects/6d/d40ed1850c03a27a436697c6086f8a4fcb2373": "12c2c8e625a8cb273b688b25f6ca959f",
".git/objects/70/411f46f3d9570a7fbd9b8420310945c38dd593": "8c4da4003edc316f479d83c821f8a003",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/4e3060cd55ef5a7e88c6749997c1715a0111fb": "bf86a8f7ce60d27769667d04111c9a57",
".git/objects/80/e0a0416574f61bf6fb8355f748fe0a80820f16": "2c6d1e8827e631bb15b37c375d07076a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fc2f8d330466018601dfa2739b43747be152ac": "f212408de0b589f05cb54facf990af34",
".git/objects/93/a6752b3a6b5ed11942ae63905cd11b2fd73109": "13a6be848ec8196ed46d68cce69a738c",
".git/objects/97/013b2a61c925e9da5d0f88a2c93d72be3a6290": "fb0fe8cfebe24b0b624c03d1d759bd6f",
".git/objects/98/967fe8d47ed495c835945d8d63992ca25b23ad": "fe2fc1e000cfdd30b9ca9ab208712899",
".git/objects/99/81718ab53a739daa0875d00c3333e2f5f3fcf1": "d697a3ba58c29c8da46b8c33c9be79fa",
".git/objects/9a/27a90f5d3b51f644e00cb2c58e201d8b7401c2": "377a1b57bc2386ec6b4efe01a8a7461a",
".git/objects/9b/d43fc7760cc79c1a269beb08f8964f0dd2bdee": "90a6f1ecb9c9a869255dc48a16ee747d",
".git/objects/9e/23a8b7dec35c6c2c2f395987ea341c54371632": "7ff283fb286868a61303d10115d079a0",
".git/objects/9f/8a193d2b05839fd9fadafe9b4d2ca4578ee4a3": "2c52bca331e60954d3b55b35a1dd0699",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/66f12251834cff8addaf518a73c9fabbab67ab": "be053235515c3d8262951d325114a19e",
".git/objects/a5/f911fe416ba47696c79bc0459c9a324e22ca3f": "51e8c23759d1c0ee3ac44cee1d6b56d3",
".git/objects/a7/e93cc95c46cc054dacffca85154ce15af2aec7": "51afb3365672f0007e4a5f83c0c3fd46",
".git/objects/a8/9ebfb40bc07a4585ac396a8bd8feaccadda023": "c8b93a12e748328f6483fe6c65dc57bb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/6179b13c42ae1f417e5d7f69b068c082a3ea89": "e358fd3606c058ccb05a777b6c3cae55",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/eee97a53727affe8dba3f12a22629c286694f1": "35086b50e34246e97cdc8a44f0017e0c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/7cdd9d4e1d741de4f551042403b0bf20044de8": "1ebcf047483b85a0c91924df1bcc7d6d",
".git/objects/c3/246f4aa4ab30eb52eb84ed7f336384e02a3a27": "e270760ed3919beb25da26c30047df3d",
".git/objects/c3/67104f006255f4ec089d4b322127c6ba2fd730": "d00c4709d75c05ab3de9ff303f958d1a",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/b77b621f33c77fc173678a42959bb646078248": "37236a3c366cdb7eccbdd6bac7c1af9c",
".git/objects/c6/84c3584191414bf4c7bfde78e9b758910a061c": "4d1fc56eae30aa7c46be3d6d1a3f4b95",
".git/objects/c8/b30a10ac9d492d1573ab2ec1d4ce6bde22015b": "fd232dbe4f0747f78ca131800b4a936c",
".git/objects/ca/dad223f74eae66566e87710086307207c5ed1f": "ae0a040528f8993888b15bd3c04313c3",
".git/objects/cc/993f0dc8fca37d98b09194732ae0e2b8493e70": "889c1cd8c34d1da4d1a230ee1e718f80",
".git/objects/d4/d777fad113af5210522b9883194092ea257441": "a5c5bcf2238345b9cb82819897761fe8",
".git/objects/d6/8825124779b5ec122f4941f8be3c2f565a0c33": "f60b5094efcba4da677a222cc4d955fa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/a9bf11d05bbcfb826285fc6812481a6f111965": "0bdb34300c43ccae89906ff5af640318",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/e9792787a6c5718f13dae6e7964a621a7eb5b0": "7f49d3041d90fb9fcd8b7bc44befab3a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c3bab058c537348a8e710aee201de381111ede": "de8f1c1883b18560b08480c3aaef54c2",
".git/objects/ef/7571143f6083146993201470dabdbfc5cc06b9": "d8bd006e6a07cf74d8f6f4149578a7da",
".git/objects/f2/a10ac10b665c5d1a97aae8c7a218bf58094020": "6b9e49d269a0e91707ceaec91aea3d9a",
".git/objects/f2/c6de4e004ed4ffaad3845c8c011e58f3cc6ad8": "1de728f0ad1169424733a7ab434f0290",
".git/objects/f5/29c1c21312ab49224e49b23257eb0494888a9d": "a7b1aa13daa9a67f5b3d5739188fd4cb",
".git/objects/f7/977d27dbd10c11904d67882f373cccf4d2a632": "014431c3687e515dc0613c2725966f02",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/b3f1d829cd4bd500b458cbd55a064d17186912": "d30e9d34759f824cd128ad7b8a25c117",
".git/refs/heads/master": "a5655d42e2542b5a16a9d27c2d46e609",
".git/refs/remotes/microsoft_future_ready/main": "8c73cadcf7d77dbc66a09e47e071d77a",
"assets/AssetManifest.json": "a1582be36d0ade4aaed329ba6eaebf57",
"assets/assets/fooderlich_assets/empty_list.png": "fd8ae8afd0b3a57cac11d107cead2d34",
"assets/assets/fooderlich_assets/list.png": "589407bfa52cb1b07c41f74c865a6d2e",
"assets/assets/fooderlich_assets/recommend.png": "8fad21adf4d94a6a57771fdbc9a8e80a",
"assets/assets/fooderlich_assets/rw_logo.png": "82be520659a802d202f2ad11866d4a85",
"assets/assets/fooderlich_assets/sheet.png": "477215e0559841944120213057896e30",
"assets/assets/food_pics/food_banana.jpg": "28b81838736f4ea48228a37589d694bf",
"assets/assets/food_pics/food_brussels_sprouts.jpg": "4749cd82747801875a1c1d545cb5f435",
"assets/assets/food_pics/food_burger.jpg": "ffc3463799a04569d0741019f3901df2",
"assets/assets/food_pics/food_cucumber.jpg": "8fa5d8fdb838a5bc3d709d6d35369ed7",
"assets/assets/food_pics/food_cupcake.jpg": "3a18b5a33e5ef956273a7e9aff184469",
"assets/assets/food_pics/food_curry.jpg": "451de7dc12ddcc47abe1b061ec9423d9",
"assets/assets/food_pics/food_dozen_eggs.jpg": "3dd6c07b0560270e3055221207d81ed7",
"assets/assets/food_pics/food_flour.jpg": "635a6dac95e89f29b18794b669785148",
"assets/assets/food_pics/food_friedrice.jpg": "99c906c9c472ba662e567e6578372578",
"assets/assets/food_pics/food_green_beans.jpg": "82d95c746ba5744eca9cd9d37684243a",
"assets/assets/food_pics/food_pancake.jpg": "d9b0a474f1c0c496821fad8b5e5d8050",
"assets/assets/food_pics/food_peanutbutter.png": "009e6fd0b6cdcad24c1af0f5056fe50b",
"assets/assets/food_pics/food_pho.jpg": "8901532618080a276cf6a53b792903e0",
"assets/assets/food_pics/food_salmon.jpg": "875f12fcf5985eb2864c1dcef8da1063",
"assets/assets/food_pics/food_soymilk.png": "2756ae43b13f8364f2b0226c4b74d137",
"assets/assets/food_pics/food_spaghetti.jpg": "352bc4733d3ba759fa977f14881d8fa6",
"assets/assets/images/dismiss.svg": "c2db5c5a5bae6840e4db27008a368516",
"assets/assets/images/empty_bookmarks.svg": "b07ca39f30620ac75da05c1e8c5d8c3c",
"assets/assets/images/empty_shopping.svg": "f662c33fd2f67987b602e929c4f107c4",
"assets/assets/images/icon_bookmark.svg": "f89538e433eced40e30e989700c5137b",
"assets/assets/images/icon_bookmarks.svg": "c322b12e1f7e3cb8e0c2a219a91c2568",
"assets/assets/images/icon_recipe.svg": "4fe19d2e9dd534e1306bf8fac32d3ed9",
"assets/assets/images/icon_shopping_list.svg": "cbbb26c85b7ecfbabb493d1f7169c50d",
"assets/assets/magazine_pics/card_bread.jpg": "fc720a6180f591b9fdde03c642fb3d00",
"assets/assets/magazine_pics/card_carrot.png": "0d2b21e99c63449763a1d5ed4dfc45a7",
"assets/assets/magazine_pics/card_salad.png": "612e2e487cb51a5b1f5782760ce15373",
"assets/assets/magazine_pics/card_smoothie.png": "66130bc238c886240790cfb1b440adb6",
"assets/assets/magazine_pics/mag1.png": "083c4fa992d0b95058ff1915a6780a1d",
"assets/assets/magazine_pics/mag2.png": "66130bc238c886240790cfb1b440adb6",
"assets/assets/magazine_pics/mag3.png": "0d2b21e99c63449763a1d5ed4dfc45a7",
"assets/assets/magazine_pics/mag4.png": "bd572d0a2d5001b5c0ed7493a6041eed",
"assets/assets/magazine_pics/mag5.png": "612e2e487cb51a5b1f5782760ce15373",
"assets/assets/profile_pics/person_cesare.jpeg": "953a93138a29882976b30c386396305a",
"assets/assets/profile_pics/person_crispy.png": "f72ff9baa079eb3a9eacd6b805d77c43",
"assets/assets/profile_pics/person_joe.jpeg": "c03b996f28a9a0f74e81d0565d4218a3",
"assets/assets/profile_pics/person_katz.jpeg": "9d93dc4bef3ce0e055eeb486a1af911a",
"assets/assets/profile_pics/person_kelvin.jpg": "074164acdd5150eee97179b89b183b15",
"assets/assets/profile_pics/person_kevin.jpeg": "ecc19eb1c1dc1704fca0c7502adb7e5e",
"assets/assets/profile_pics/person_manda.png": "4b13f8089c95e0334717e05c8c0aeb68",
"assets/assets/profile_pics/person_ray.jpeg": "d21589f30a1f5c968bd4686520e50b25",
"assets/assets/profile_pics/person_sandra.jpeg": "313347d60d8a6693b8528cbf38be4435",
"assets/assets/profile_pics/person_stef.jpeg": "e2ce6888dbf5fc392c9322d9cfb54b29",
"assets/assets/profile_pics/person_tiffani.jpeg": "10f1b0e3af37b5569f59c07c61cdb970",
"assets/assets/recipes1.json": "ea5cd200ec9d0757fe8c3df76245f65e",
"assets/assets/recipes2.json": "43bb81ba34cee0dd6ea85fe939b58ff4",
"assets/assets/sample_data/sample_explore_recipes.json": "8792704afd03d7ba7881780c72749eba",
"assets/assets/sample_data/sample_friends_feed.json": "d961425f2d69e0ff911bc4efeccb0922",
"assets/assets/sample_data/sample_recipes.json": "eef92958972df34b7035692b5c3544e7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2bda1d8f513eb8df9d728ce643f78074",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a1979d16914e8fb718a294925b9ecc4e",
"/": "a1979d16914e8fb718a294925b9ecc4e",
"main.dart.js": "f059855a13cb5e5766194f55c6f737c1",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
