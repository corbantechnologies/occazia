import type { StaticImageData } from "next/image";
import hotelFrontImg from "../../public/images/exterior/hotel-front.jpg";
import mainEntranceImg from "../../public/images/exterior/main-entrance.jpg";
import buildingViewImg from "../../public/images/exterior/building-view.jpg";
import receptionEntranceImg from "../../public/images/exterior/reception-entrance.jpg";
import corridorImg from "../../public/images/exterior/corridor.jpg";
import standardBedNetDoorImg from "../../public/images/rooms/standard/bed-net-door.jpg";
import standardRoomWardrobeImg from "../../public/images/rooms/standard/room-wardrobe.jpg";
import standardEnSuiteImg from "../../public/images/rooms/standard/en-suite.jpg";
import deluxeBedDoorImg from "../../public/images/rooms/deluxe/bed-door.jpg";
import deluxeRoomWideWindowImg from "../../public/images/rooms/deluxe/room-wide-window.jpg";
import deluxeDeskGreyWardrobeImg from "../../public/images/rooms/deluxe/desk-grey-wardrobe.jpg";
import deluxeBalconyChairImg from "../../public/images/rooms/deluxe/balcony-chair.jpg";
import executiveSeatingBedImg from "../../public/images/rooms/executive/seating-bed.jpg";
import executiveRoomWideImg from "../../public/images/rooms/executive/room-wide.jpg";
import executiveBedTowelArtImg from "../../public/images/rooms/executive/bed-towel-art.jpg";
import executiveViewFromBedImg from "../../public/images/rooms/executive/view-from-bed.jpg";
import executiveBalconyHillViewImg from "../../public/images/rooms/executive/balcony-hill-view.jpg";
import executiveTeaTrayImg from "../../public/images/rooms/executive/tea-tray.jpg";
import executiveRainShowerImg from "../../public/images/rooms/executive/rain-shower.jpg";
import hall1ScreenImg from "../../public/images/events/hall-1/screen.jpg";
import hall1WideImg from "../../public/images/events/hall-1/wide.jpg";
import hall1RowsImg from "../../public/images/events/hall-1/rows.jpg";
import hall1TablesImg from "../../public/images/events/hall-1/delegate-tables.jpg";
import hall2ScreenImg from "../../public/images/events/hall-2/screen.jpg";
import hall2ClassroomImg from "../../public/images/events/hall-2/classroom.jpg";
import hall2TablesImg from "../../public/images/events/hall-2/tables.jpg";
import hall2BanquetImg from "../../public/images/events/hall-2/banquet.jpg";
import hall3BanquetImg from "../../public/images/events/hall-3/banquet.jpg";
import hall3SkirtedUShapeImg from "../../public/images/events/hall-3/u-shape-skirted-wide.jpg";
import banquetRoundTablesWindowsImg from "../../public/images/events/banquet/round-tables-windows.jpg";
import rooftopUmbrellaLakeImg from "../../public/images/rooftop/umbrella-lake-view.jpg";
import rooftopUmbrellaHillImg from "../../public/images/rooftop/umbrella-hill-view.jpg";
import rooftopTerracePlantsImg from "../../public/images/rooftop/terrace-plants.jpg";
import receptionDeskImg from "../../public/images/exterior/reception-desk.jpg";
import fishPlateImg from "../../public/images/dining/fish-plate.jpg";
import loungeSofasImg from "../../public/images/lounge/lounge-sofas.jpg";
import barWineWhiskyImg from "../../public/images/lounge/bar/wine-whisky.jpg";
import hall3HollowSquareImg from "../../public/images/events/hall-3/hollow-square.jpg";
import hall3WindowSideImg from "../../public/images/events/hall-3/window-side.jpg";
import hall3LongTablesImg from "../../public/images/events/hall-3/long-tables.jpg";
import banquetRoundTablesImg from "../../public/images/events/banquet/round-tables.jpg";
import banquetTableForSixImg from "../../public/images/events/banquet/table-for-six.jpg";
import barCounterGrilleImg from "../../public/images/lounge/bar/counter.jpg";
import barShelvesImg from "../../public/images/lounge/bar/shelves.jpg";
import barSoftDrinksImg from "../../public/images/lounge/bar/soft-drinks-wide.jpg";
import rooftopSignImg from "../../public/images/rooftop/terrace-sign.jpg";
import rooftopUmbrellasImg from "../../public/images/rooftop/terrace-umbrellas.jpg";
import rooftopDuskImg from "../../public/images/rooftop/terrace-dusk.jpg";
import rooftopSunsetImg from "../../public/images/rooftop/sunset.jpg";
import rooftopSunsetLakeImg from "../../public/images/rooftop/sunset-lake.jpg";
import rooftopLakeViewImg from "../../public/images/rooftop/lake-view.jpg";
import conferenceHallScreenImg from "../../public/images/events/conference-hall-screen.jpg";
import conferenceTableSettingImg from "../../public/images/events/conference-table-setting.jpg";
import conferenceProjectorImg from "../../public/images/events/conference-projector.jpg";
import eventBuffetImg from "../../public/images/events/event-buffet.jpg";
import restaurantImg from "../../public/images/dining/restaurant.jpg";
import restaurantTablesTvImg from "../../public/images/dining/restaurant-tables-tv.jpg";
import receptionistPhoneImg from "../../public/images/exterior/receptionist-phone.jpg";
import restaurantDiningRoomImg from "../../public/images/dining/restaurant-dining-room.jpg";
import restaurantTableSettingImg from "../../public/images/dining/restaurant-table-setting.jpg";
import restaurantWindowTablesImg from "../../public/images/dining/restaurant-window-tables.jpg";
import tableForTwoImg from "../../public/images/dining/table-for-two.jpg";
import chefImg from "../../public/images/dining/chef.jpg";
import loungeSeatingImg from "../../public/images/lounge/lounge-seating.jpg";
import loungeBalconyImg from "../../public/images/lounge/lounge-balcony.jpg";
import terraceTablesImg from "../../public/images/lounge/terrace-tables.jpg";

// Photos live in /public/images/<category>/ and are imported statically so
// next/image gets their size and a blur placeholder. Originals are in the
// owner's Documents/Occazia/Media, Photos and Categorized Media folders (resized
// to 1024-1600px wide, up to 1920px for photos used full-width such as the home
// hero slides, metadata stripped).
// To add one: save it in the right folder, import it above, and
// add it to `photos` with alt text that describes what is in the picture.

export type Photo = {
  src: StaticImageData;
  alt: string;
};

export type PhotoCategory = "rooftop" | "rooms" | "events" | "dining" | "lounge" | "exterior";

export const photoCategories: { id: PhotoCategory; label: string }[] = [
  { id: "rooms", label: "Rooms" },
  { id: "events", label: "Conferences" },
  { id: "rooftop", label: "Rooftop" },
  { id: "dining", label: "Dining" },
  { id: "lounge", label: "Bar & lounge" },
  { id: "exterior", label: "Hotel" },
];

const photos = {
  rooftopUmbrellaLake: { src: rooftopUmbrellaLakeImg, alt: "Rooftop terrace table under a green umbrella, looking out over the lake and hills on a sunny day", category: "rooftop" },
  rooftopUmbrellaHill: { src: rooftopUmbrellaHillImg, alt: "Rooftop terrace table under a green umbrella beside a palm, with a green hill beyond", category: "rooftop" },
  rooftopTerracePlants: { src: rooftopTerracePlantsImg, alt: "Rooftop terrace with potted plants and umbrella-shaded tables under a blue sky", category: "rooftop" },
  rooftopSunsetLake: { src: rooftopSunsetLakeImg, alt: "Sunset over Lake Victoria and the hills from the Hotel Occazia rooftop terrace", category: "rooftop" },
  rooftopSunset: { src: rooftopSunsetImg, alt: "Rooftop terrace tables under green umbrellas at sunset", category: "rooftop" },
  rooftopSign: { src: rooftopSignImg, alt: "Rooftop terrace with umbrellas and the Hotel Occazia sign", category: "rooftop" },
  rooftopUmbrellas: { src: rooftopUmbrellasImg, alt: "Tables, chairs and potted palms on the rooftop terrace", category: "rooftop" },
  rooftopLakeView: { src: rooftopLakeViewImg, alt: "Rooftop table looking out over Homa Bay towards the lake at dusk", category: "rooftop" },
  rooftopDusk: { src: rooftopDuskImg, alt: "Rooftop terrace seating at dusk with the hills beyond", category: "rooftop" },
  receptionDesk: { src: receptionDeskImg, alt: "Hotel reception with a curved front desk, chandelier and wall-mounted TV", category: "exterior" },
  hotelFront: { src: hotelFrontImg, alt: "Hotel Occazia Homa Bay building and main entrance under a clear blue sky", category: "exterior" },
  mainEntrance: { src: mainEntranceImg, alt: "Main entrance of Hotel Occazia Homa Bay with its sign and potted plants", category: "exterior" },
  buildingView: { src: buildingViewImg, alt: "The Hotel Occazia building in Homa Bay with balconies on every floor", category: "exterior" },
  receptionEntrance: { src: receptionEntranceImg, alt: "Glass doors opening into the reception area", category: "exterior" },
  corridor: { src: corridorImg, alt: "Bright corridor leading to the guest rooms", category: "exterior" },
  standardBedNetDoor: { src: standardBedNetDoorImg, alt: "Standard Room queen bed with a mosquito net, red curtains and a wooden door", category: "rooms" },
  standardRoomWardrobe: { src: standardRoomWardrobeImg, alt: "Standard Room wardrobe, mirror, wall-mounted TV and desk", category: "rooms" },
  standardEnSuite: { src: standardEnSuiteImg, alt: "Tiled en-suite bathroom with shower, toilet and washbasin", category: "rooms" },
  deluxeBedDoor: { src: deluxeBedDoorImg, alt: "Deluxe Room queen bed with a red cushion beside a bright window, red curtains and an armchair", category: "rooms" },
  deluxeRoomWideWindow: { src: deluxeRoomWideWindowImg, alt: "Deluxe Room with a queen bed, desk, armchair, standing fan and wall-mounted TV", category: "rooms" },
  deluxeDeskGreyWardrobe: { src: deluxeDeskGreyWardrobeImg, alt: "Deluxe Room desk with a red armchair, wall-mounted TV, fan and wardrobe", category: "rooms" },
  deluxeBalconyChair: { src: deluxeBalconyChairImg, alt: "Private balcony with a chair, looking out onto trees", category: "rooms" },
  executiveSeatingBed: { src: executiveSeatingBedImg, alt: "Executive Room with two red armchairs and a round coffee table in front of the bed", category: "rooms" },
  executiveRoomWide: { src: executiveRoomWideImg, alt: "Executive Room with a red armchair and coffee table in front of a bed with a mosquito net, beside tall bright windows", category: "rooms" },
  executiveBedTowelArt: { src: executiveBedTowelArtImg, alt: "Executive Room bed with Hotel Occazia pillows, a red cushion and folded towel art", category: "rooms" },
  executiveViewFromBed: { src: executiveViewFromBedImg, alt: "View from the Executive Room bed to the armchairs, desk, TV and wardrobe", category: "rooms" },
  executiveBalconyHillView: { src: executiveBalconyHillViewImg, alt: "Executive Room balcony with two chairs and a small table overlooking a green hill", category: "rooms" },
  executiveTeaTray: { src: executiveTeaTrayImg, alt: "Tea tray with kettle, cups, glasses and bottled water in the Executive Room", category: "rooms" },
  executiveRainShower: { src: executiveRainShowerImg, alt: "Executive Room en-suite with a rain shower and toilet", category: "rooms" },
  hall1Screen: { src: hall1ScreenImg, alt: "Hall 1 set classroom-style for 120 with a projector screen and red chairs", category: "events" },
  hall1Wide: { src: hall1WideImg, alt: "Wide view of Hall 1 with rows of delegate tables", category: "events" },
  hall1Rows: { src: hall1RowsImg, alt: "Rows of tables and red chairs in Hall 1", category: "events" },
  hall1Tables: { src: hall1TablesImg, alt: "Delegate tables with water and notepads in Hall 1", category: "events" },
  hall2Screen: { src: hall2ScreenImg, alt: "Hall 2 set classroom-style facing a projector screen and flip chart", category: "events" },
  hall2Classroom: { src: hall2ClassroomImg, alt: "Hall 2 classroom layout with long tables and a projector screen", category: "events" },
  hall2Tables: { src: hall2TablesImg, alt: "Hall 2 delegate tables with flip-chart notes on the wall", category: "events" },
  hall2Banquet: { src: hall2BanquetImg, alt: "Hall 2 laid out with round tables for an event lunch", category: "events" },
  hall3SkirtedUShape: { src: hall3SkirtedUShapeImg, alt: "Hall 3 set in a U-shape with white tablecloths, red skirting and blue chairs", category: "events" },
  hall3HollowSquare: { src: hall3HollowSquareImg, alt: "Hall 3 tables in a hollow square with blue chairs, set for a workshop", category: "events" },
  hall3WindowSide: { src: hall3WindowSideImg, alt: "Hall 3 U-shape tables beside bright windows", category: "events" },
  hall3LongTables: { src: hall3LongTablesImg, alt: "Long skirted tables and blue chairs along the side of Hall 3", category: "events" },
  hall3Banquet: { src: hall3BanquetImg, alt: "Hall 3 with round tables in red cloths and blue banquet chairs", category: "events" },
  conferenceHallScreen: { src: conferenceHallScreenImg, alt: "Delegate tables facing a projector screen and flip chart", category: "events" },
  conferenceTableSetting: { src: conferenceTableSettingImg, alt: "Conference table set with notepads, pens and bottled water", category: "events" },
  conferenceProjector: { src: conferenceProjectorImg, alt: "Projector set up on a delegate table", category: "events" },
  banquetRoundTablesWindows: { src: banquetRoundTablesWindowsImg, alt: "Round tables in red cloths with red and gold banquet chairs in a bright hall", category: "events" },
  banquetRoundTables: { src: banquetRoundTablesImg, alt: "Conference hall set banquet-style with round tables in red cloths and red chairs", category: "events" },
  banquetTableForSix: { src: banquetTableForSixImg, alt: "Round banquet table in a red cloth with gold-framed red chairs", category: "events" },
  eventBuffet: { src: eventBuffetImg, alt: "Buffet station with chafing dishes and plates for event catering", category: "events" },
  fishPlate: { src: fishPlateImg, alt: "Whole fish topped with onions, peppers and tomatoes, served with a side and a dipping sauce", category: "dining" },
  restaurantTablesTv: { src: restaurantTablesTvImg, alt: "Restaurant tables laid with napkins and flowers, red-cushioned chairs and a wall-mounted TV", category: "dining" },
  receptionistPhone: { src: receptionistPhoneImg, alt: "Smiling receptionist on the phone at the front desk", category: "exterior" },
  restaurant: { src: restaurantImg, alt: "Hotel Occazia restaurant with wooden chairs, white tables and fresh flowers", category: "dining" },
  restaurantDiningRoom: { src: restaurantDiningRoomImg, alt: "Restaurant tables laid for dinner with red-cushioned chairs", category: "dining" },
  restaurantTableSetting: { src: restaurantTableSettingImg, alt: "Table set with folded napkins, cutlery and glasses", category: "dining" },
  restaurantWindowTables: { src: restaurantWindowTablesImg, alt: "Tables for four by the restaurant's curtained windows", category: "dining" },
  tableForTwo: { src: tableForTwoImg, alt: "Table for two set with plates, bowls and flowers", category: "dining" },
  chef: { src: chefImg, alt: "Chef preparing fresh vegetables in the hotel kitchen", category: "dining" },
  barCounterGrille: { src: barCounterGrilleImg, alt: "Hotel bar counter with stocked shelves and a drinks fridge behind a steel grille", category: "lounge" },
  barShelves: { src: barShelvesImg, alt: "Wine and whisky bottles on the bar counter in front of shelves of spirits", category: "lounge" },
  barSoftDrinks: { src: barSoftDrinksImg, alt: "Canned drinks lined up on the bar counter", category: "lounge" },
  barWineWhisky: { src: barWineWhiskyImg, alt: "Bottles of wine and whisky on the bar counter", category: "lounge" },
  loungeSofas: { src: loungeSofasImg, alt: "Lounge with black leather sofas, chairs and a marble-top coffee table", category: "lounge" },
  loungeSeating: { src: loungeSeatingImg, alt: "Lounge with leather sofas and a marble coffee table", category: "lounge" },
  loungeBalcony: { src: loungeBalconyImg, alt: "Lounge seating beside open doors to the balcony", category: "lounge" },
  terraceTables: { src: terraceTablesImg, alt: "Bright upstairs lounge with high tables and large windows", category: "lounge" },
} satisfies Record<string, Photo & { category: PhotoCategory }>;

// Spots on the site that show a single photo.
export const photoSlots: Record<string, Photo | undefined> = {
  hero: photos.rooftopSunsetLake,
  "rooms-standard": photos.standardBedNetDoor,
  "rooms-deluxe": photos.deluxeBedDoor,
  "rooms-executive": photos.executiveSeatingBed,
  events: photos.hall1Screen,
  dining: photos.restaurant,
  lounge: photos.barShelves,
  rooftop: photos.rooftopSunset,
  location: photos.mainEntrance,
  explore: photos.rooftopLakeView,
  booking: photos.receptionDesk,
};

// Slides in the home page hero carousel, first slide first (it is preloaded as
// the LCP image). Synced to the owner's Categorized Media/Hero folder (19 Nov 2026).
export const heroPhotos = {
  rooftopLake: photos.rooftopUmbrellaLake,
  room: photos.executiveSeatingBed,
  conference: photos.hall3SkirtedUShape,
  reception: photos.receptionDesk,
  food: photos.fishPlate,
  rooftopHill: photos.rooftopUmbrellaHill,
  banquet: photos.banquetRoundTablesWindows,
  rooftopPlants: photos.rooftopTerracePlants,
  bar: photos.barWineWhisky,
  drinks: photos.barSoftDrinks,
};

// Photo carousels on each room page, best wide shot first. Synced to the
// owner's Categorized Media room folders (19 Nov 2026). The Standard and Deluxe
// rooms share the balcony and en-suite photos (the owner filed the same files
// in both folders).
export const roomPhotos: Record<string, Photo[]> = {
  standard: [photos.standardBedNetDoor, photos.standardRoomWardrobe, photos.deluxeBalconyChair, photos.standardEnSuite],
  deluxe: [
    photos.deluxeBedDoor,
    photos.deluxeRoomWideWindow,
    photos.deluxeDeskGreyWardrobe,
    photos.deluxeBalconyChair,
    photos.standardEnSuite,
  ],
  executive: [
    photos.executiveSeatingBed,
    photos.executiveRoomWide,
    photos.executiveBedTowelArt,
    photos.executiveViewFromBed,
    photos.executiveBalconyHillView,
    photos.executiveTeaTray,
    photos.executiveRainShower,
  ],
};

// Photos for each conference hall, keyed by Hall.id in events.ts.
export const hallPhotos: Record<string, Photo[]> = {
  "hall-1": [photos.hall1Screen, photos.hall1Wide, photos.hall1Rows, photos.hall1Tables],
  "hall-2": [photos.hall2Screen, photos.hall2Classroom, photos.hall2Banquet, photos.hall2Tables],
  // New Nov 2026 shots first (Photos/COFERENCE ROOM: same folding doors and
  // floor as Hall 3), then the older banquet layout. The bare wooden-table
  // photo was removed at the owner's request (19 Nov 2026).
  "hall-3": [
    photos.hall3SkirtedUShape,
    photos.hall3HollowSquare,
    photos.hall3WindowSide,
    photos.hall3LongTables,
    photos.hall3Banquet,
  ],
};

export const eventPhotos: Photo[] = [
  photos.conferenceHallScreen,
  photos.banquetRoundTables,
  photos.hall3SkirtedUShape,
  photos.eventBuffet,
];

export const rooftopPhotos: Photo[] = [photos.rooftopSunset, photos.rooftopSign, photos.rooftopLakeView];

export const diningPhotos: Photo[] = [
  photos.restaurantDiningRoom,
  photos.restaurantTableSetting,
  photos.fishPlate,
  photos.restaurantWindowTables,
  photos.tableForTwo,
  photos.restaurantTablesTv,
];

export const loungePhotos: Photo[] = [photos.barWineWhisky, photos.barCounterGrille, photos.loungeSeating, photos.barShelves];

// Gallery page photos in display order: categories in the same order as the
// filter tabs, best photo first in each. At the owner's request (19 Nov 2026)
// photos of staff are left out except the chef; the receptionist photo was
// added by the owner from Categorized Media/Gallery. Near-duplicates of a photo already
// listed (e.g. the shared Standard/Deluxe bathroom) are left out on purpose.
// A photo added to `photos` above only shows here once it is added below.
export const gallery: (Photo & { category: PhotoCategory })[] = [
  // Rooms: the best photo of each room first, then the rest by room
  photos.executiveSeatingBed,
  photos.deluxeBedDoor,
  photos.standardBedNetDoor,
  photos.executiveRoomWide,
  photos.executiveBedTowelArt,
  photos.executiveViewFromBed,
  photos.executiveBalconyHillView,
  photos.executiveTeaTray,
  photos.executiveRainShower,
  photos.deluxeRoomWideWindow,
  photos.deluxeDeskGreyWardrobe,
  photos.deluxeBalconyChair,
  photos.standardRoomWardrobe,
  photos.standardEnSuite,
  // Conferences: one of each hall first, then the other layouts
  photos.hall1Screen,
  photos.hall2Classroom,
  photos.hall3SkirtedUShape,
  photos.banquetRoundTablesWindows,
  photos.hall1Wide,
  photos.hall2Screen,
  photos.hall3HollowSquare,
  photos.hall2Banquet,
  photos.hall3Banquet,
  photos.hall3WindowSide,
  photos.banquetRoundTables,
  photos.banquetTableForSix,
  photos.hall1Rows,
  photos.hall2Tables,
  photos.hall3LongTables,
  photos.hall1Tables,
  photos.conferenceTableSetting,
  photos.conferenceProjector,
  photos.eventBuffet,
  // Rooftop
  photos.rooftopSunsetLake,
  photos.rooftopUmbrellaLake,
  photos.rooftopUmbrellaHill,
  photos.rooftopSunset,
  photos.rooftopTerracePlants,
  photos.rooftopLakeView,
  photos.rooftopSign,
  photos.rooftopDusk,
  photos.rooftopUmbrellas,
  // Dining
  photos.restaurant,
  photos.fishPlate,
  photos.restaurantTablesTv,
  photos.restaurantWindowTables,
  photos.restaurantTableSetting,
  photos.tableForTwo,
  photos.chef,
  // Bar & lounge
  photos.barCounterGrille,
  photos.barShelves,
  photos.barWineWhisky,
  photos.barSoftDrinks,
  photos.loungeSofas,
  photos.loungeSeating,
  photos.loungeBalcony,
  photos.terraceTables,
  // Hotel
  photos.hotelFront,
  photos.buildingView,
  photos.mainEntrance,
  photos.receptionDesk,
  photos.receptionEntrance,
  photos.receptionistPhone,
  photos.corridor,
];

// Home page "experience" row: atmosphere, not repeats of the section photos.
// No staff photos outside the gallery, at the owner's request (19 Nov 2026).
export const experiencePhotos: Photo[] = [photos.rooftopSunset, photos.fishPlate, photos.loungeSofas];
