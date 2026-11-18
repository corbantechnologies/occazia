import type { StaticImageData } from "next/image";
import hotelFrontImg from "../../public/images/exterior/hotel-front.jpg";
import mainEntranceImg from "../../public/images/exterior/main-entrance.jpg";
import buildingViewImg from "../../public/images/exterior/building-view.jpg";
import receptionEntranceImg from "../../public/images/exterior/reception-entrance.jpg";
import frontDeskImg from "../../public/images/exterior/front-desk.jpg";
import corridorImg from "../../public/images/exterior/corridor.jpg";
import standardBedNetDoorImg from "../../public/images/rooms/standard/bed-net-door.jpg";
import standardBedHeadboardImg from "../../public/images/rooms/standard/bed-headboard.jpg";
import standardRoomTvDeskImg from "../../public/images/rooms/standard/room-tv-desk.jpg";
import standardRoomWardrobeImg from "../../public/images/rooms/standard/room-wardrobe.jpg";
import standardWritingDeskImg from "../../public/images/rooms/standard/writing-desk.jpg";
import standardEnSuiteImg from "../../public/images/rooms/standard/en-suite.jpg";
import deluxeBedDoorImg from "../../public/images/rooms/deluxe/bed-door.jpg";
import deluxeBedCushionImg from "../../public/images/rooms/deluxe/bed-cushion.jpg";
import deluxeRoomWideWindowImg from "../../public/images/rooms/deluxe/room-wide-window.jpg";
import deluxeDeskFanImg from "../../public/images/rooms/deluxe/desk-fan.jpg";
import deluxeDeskTvWardrobeImg from "../../public/images/rooms/deluxe/desk-tv-wardrobe.jpg";
import deluxeDeskGreyWardrobeImg from "../../public/images/rooms/deluxe/desk-grey-wardrobe.jpg";
import deluxeBalconyChairImg from "../../public/images/rooms/deluxe/balcony-chair.jpg";
import executive1SeatingBedImg from "../../public/images/rooms/executive/option-1/seating-bed.jpg";
import executive1BedTowelArtImg from "../../public/images/rooms/executive/option-1/bed-towel-art.jpg";
import executive1BedWindowImg from "../../public/images/rooms/executive/option-1/bed-window.jpg";
import executive1ViewFromBedImg from "../../public/images/rooms/executive/option-1/view-from-bed.jpg";
import executive1LoungeDeskImg from "../../public/images/rooms/executive/option-1/lounge-desk.jpg";
import executive1SeatingDoorImg from "../../public/images/rooms/executive/option-1/seating-door.jpg";
import executive1SeatingBedWideImg from "../../public/images/rooms/executive/option-1/seating-bed-wide.jpg";
import executive1BedPillowsImg from "../../public/images/rooms/executive/option-1/bed-pillows.jpg";
import executive1TeaTrayImg from "../../public/images/rooms/executive/option-1/tea-tray.jpg";
import executiveBalconyHillViewImg from "../../public/images/rooms/executive/balcony-hill-view.jpg";
import executive1RainShowerImg from "../../public/images/rooms/executive/option-1/rain-shower.jpg";
import executive1EnSuiteImg from "../../public/images/rooms/executive/option-1/en-suite.jpg";
import executive2RoomWideImg from "../../public/images/rooms/executive/option-2/room-wide.jpg";
import executive2ArmchairBedImg from "../../public/images/rooms/executive/option-2/armchair-bed.jpg";
import executive2BedImg from "../../public/images/rooms/executive/option-2/bed.jpg";
import executive2BedTowelSwanImg from "../../public/images/rooms/executive/option-2/bed-towel-swan.jpg";
import executive2SeatingDeskImg from "../../public/images/rooms/executive/option-2/seating-desk.jpg";
import executive2BedWindowsImg from "../../public/images/rooms/executive/option-2/bed-windows.jpg";
import executive2TeaTrayImg from "../../public/images/rooms/executive/option-2/tea-tray.jpg";
import executive2WardrobeMirrorImg from "../../public/images/rooms/executive/option-2/wardrobe-mirror.jpg";
import executive2MirrorImg from "../../public/images/rooms/executive/option-2/mirror.jpg";
import executive2EnSuiteImg from "../../public/images/rooms/executive/option-2/en-suite.jpg";
import hall1ScreenImg from "../../public/images/events/hall-1/screen.jpg";
import hall1WideImg from "../../public/images/events/hall-1/wide.jpg";
import hall1RowsImg from "../../public/images/events/hall-1/rows.jpg";
import hall1TablesImg from "../../public/images/events/hall-1/delegate-tables.jpg";
import hall2ScreenImg from "../../public/images/events/hall-2/screen.jpg";
import hall2ClassroomImg from "../../public/images/events/hall-2/classroom.jpg";
import hall2TablesImg from "../../public/images/events/hall-2/tables.jpg";
import hall2BanquetImg from "../../public/images/events/hall-2/banquet.jpg";
import hall3BanquetImg from "../../public/images/events/hall-3/banquet.jpg";
import hall3UShapeImg from "../../public/images/events/hall-3/u-shape.jpg";
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
import bartenderImg from "../../public/images/lounge/bartender.jpg";
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
import restaurantDiningRoomImg from "../../public/images/dining/restaurant-dining-room.jpg";
import restaurantTableSettingImg from "../../public/images/dining/restaurant-table-setting.jpg";
import restaurantWindowTablesImg from "../../public/images/dining/restaurant-window-tables.jpg";
import tableForTwoImg from "../../public/images/dining/table-for-two.jpg";
import chefImg from "../../public/images/dining/chef.jpg";
import kitchenPrepImg from "../../public/images/dining/kitchen-prep.jpg";
import restaurantTeamImg from "../../public/images/dining/restaurant-team.jpg";
import barImg from "../../public/images/lounge/bar.jpg";
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
  // Short visible label, e.g. which Executive Room layout a photo shows.
  caption?: string;
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
  frontDesk: { src: frontDeskImg, alt: "Receptionist on the phone at the front desk", category: "exterior" },
  corridor: { src: corridorImg, alt: "Bright corridor leading to the guest rooms", category: "exterior" },
  standardBedNetDoor: { src: standardBedNetDoorImg, alt: "Standard Room double bed with a mosquito net, red curtains and a wooden door", category: "rooms" },
  standardBedHeadboard: { src: standardBedHeadboardImg, alt: "Standard Room double bed with Hotel Occazia pillows, a red runner and bedside table", category: "rooms" },
  standardRoomTvDesk: { src: standardRoomTvDeskImg, alt: "Standard Room writing desk, wall-mounted TV and wardrobe seen from the bed", category: "rooms" },
  standardRoomWardrobe: { src: standardRoomWardrobeImg, alt: "Standard Room wardrobe, mirror, wall-mounted TV and desk", category: "rooms" },
  standardWritingDesk: { src: standardWritingDeskImg, alt: "Standard Room wooden writing desk with a chair and bottled water", category: "rooms" },
  standardEnSuite: { src: standardEnSuiteImg, alt: "Tiled en-suite bathroom with shower, toilet and washbasin", category: "rooms" },
  deluxeBedDoor: { src: deluxeBedDoorImg, alt: "Deluxe Room double bed with a red cushion beside a bright window, red curtains and an armchair", category: "rooms" },
  deluxeBedCushion: { src: deluxeBedCushionImg, alt: "Deluxe Room bed with a padded headboard, red cushion, mosquito net and wall light", category: "rooms" },
  deluxeRoomWideWindow: { src: deluxeRoomWideWindowImg, alt: "Deluxe Room with a double bed, desk, armchair, standing fan and wall-mounted TV", category: "rooms" },
  deluxeDeskFan: { src: deluxeDeskFanImg, alt: "Deluxe Room desk with a kettle, red armchair and standing fan", category: "rooms" },
  deluxeDeskTvWardrobe: { src: deluxeDeskTvWardrobeImg, alt: "Deluxe Room desk, wall-mounted TV, mirror and wardrobe", category: "rooms" },
  deluxeDeskGreyWardrobe: { src: deluxeDeskGreyWardrobeImg, alt: "Deluxe Room desk with a red armchair, wall-mounted TV, fan and wardrobe", category: "rooms" },
  deluxeBalconyChair: { src: deluxeBalconyChairImg, alt: "Deluxe Room balcony with a chair, looking out onto trees", category: "rooms" },
  executive1SeatingBed: { src: executive1SeatingBedImg, alt: "Executive Room (option 1) with two red armchairs and a round coffee table in front of the bed", caption: "Option 1", category: "rooms" },
  executive1BedTowelArt: { src: executive1BedTowelArtImg, alt: "Executive Room (option 1) bed with Hotel Occazia pillows, a red cushion and folded towel art", caption: "Option 1", category: "rooms" },
  executive1BedWindow: { src: executive1BedWindowImg, alt: "Executive Room (option 1) double bed beside a bright window with red curtains", caption: "Option 1", category: "rooms" },
  executive1ViewFromBed: { src: executive1ViewFromBedImg, alt: "View from the bed in the Executive Room (option 1) to the armchairs, desk, TV and wardrobe", caption: "Option 1", category: "rooms" },
  executive1LoungeDesk: { src: executive1LoungeDeskImg, alt: "Executive Room (option 1) armchairs and coffee table with flowers, with a desk and standing fan beyond", caption: "Option 1", category: "rooms" },
  executive1SeatingDoor: { src: executive1SeatingDoorImg, alt: "Executive Room (option 1) armchairs and coffee table by the window, with the bed behind", caption: "Option 1", category: "rooms" },
  executive1SeatingBedWide: { src: executive1SeatingBedWideImg, alt: "Executive Room (option 1) seating area and bed under a mosquito net", caption: "Option 1", category: "rooms" },
  executive1BedPillows: { src: executive1BedPillowsImg, alt: "Close-up of the Executive Room (option 1) bed with branded pillows and towel art", caption: "Option 1", category: "rooms" },
  executive1TeaTray: { src: executive1TeaTrayImg, alt: "Tea tray with kettle, cups, glasses and bottled water in the Executive Room (option 1)", caption: "Option 1", category: "rooms" },
  executiveBalconyHillView: { src: executiveBalconyHillViewImg, alt: "Executive Room balcony with two chairs and a small table overlooking a green hill", category: "rooms" },
  executive1RainShower: { src: executive1RainShowerImg, alt: "Executive Room (option 1) en-suite with a rain shower and toilet", caption: "Option 1", category: "rooms" },
  executive1EnSuite: { src: executive1EnSuiteImg, alt: "Executive Room (option 1) tiled en-suite with shower, toilet and washbasin", caption: "Option 1", category: "rooms" },
  executive2RoomWide: { src: executive2RoomWideImg, alt: "Executive Room (option 2) with a red armchair and coffee table in front of a bed with a mosquito net", caption: "Option 2", category: "rooms" },
  executive2ArmchairBed: { src: executive2ArmchairBedImg, alt: "Executive Room (option 2) armchair, coffee table with flowers and double bed by tall windows", caption: "Option 2", category: "rooms" },
  executive2Bed: { src: executive2BedImg, alt: "Executive Room (option 2) double bed with a padded headboard and red cushion", caption: "Option 2", category: "rooms" },
  executive2BedTowelSwan: { src: executive2BedTowelSwanImg, alt: "Executive Room (option 2) bed with Hotel Occazia pillows and a towel swan", caption: "Option 2", category: "rooms" },
  executive2SeatingDesk: { src: executive2SeatingDeskImg, alt: "Executive Room (option 2) armchair and coffee table, with a desk, TV and standing fan beyond", caption: "Option 2", category: "rooms" },
  executive2BedWindows: { src: executive2BedWindowsImg, alt: "Executive Room (option 2) bed, armchair and coffee table beside bright windows", caption: "Option 2", category: "rooms" },
  executive2TeaTray: { src: executive2TeaTrayImg, alt: "Tea tray with kettle, cups, glasses and bottled water in the Executive Room (option 2)", caption: "Option 2", category: "rooms" },
  executive2WardrobeMirror: { src: executive2WardrobeMirrorImg, alt: "Executive Room (option 2) wardrobe and full-length mirror by the door", caption: "Option 2", category: "rooms" },
  executive2Mirror: { src: executive2MirrorImg, alt: "Full-length mirror reflecting the Executive Room (option 2) seating area", caption: "Option 2", category: "rooms" },
  executive2EnSuite: { src: executive2EnSuiteImg, alt: "Executive Room (option 2) tiled en-suite with shower and toilet", caption: "Option 2", category: "rooms" },
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
  hall3UShape: { src: hall3UShapeImg, alt: "Hall 3 with wooden tables in a U-shape and red chairs", category: "events" },
  conferenceHallScreen: { src: conferenceHallScreenImg, alt: "Delegate tables facing a projector screen and flip chart", category: "events" },
  conferenceTableSetting: { src: conferenceTableSettingImg, alt: "Conference table set with notepads, pens and bottled water", category: "events" },
  conferenceProjector: { src: conferenceProjectorImg, alt: "Projector set up on a delegate table", category: "events" },
  banquetRoundTablesWindows: { src: banquetRoundTablesWindowsImg, alt: "Round tables in red cloths with red and gold banquet chairs in a bright hall", category: "events" },
  banquetRoundTables: { src: banquetRoundTablesImg, alt: "Conference hall set banquet-style with round tables in red cloths and red chairs", category: "events" },
  banquetTableForSix: { src: banquetTableForSixImg, alt: "Round banquet table in a red cloth with gold-framed red chairs", category: "events" },
  eventBuffet: { src: eventBuffetImg, alt: "Buffet station with chafing dishes and plates for event catering", category: "events" },
  fishPlate: { src: fishPlateImg, alt: "Whole fish topped with onions, peppers and tomatoes, served with a side and a dipping sauce", category: "dining" },
  restaurant: { src: restaurantImg, alt: "Hotel Occazia restaurant with wooden chairs, white tables and fresh flowers", category: "dining" },
  restaurantDiningRoom: { src: restaurantDiningRoomImg, alt: "Restaurant tables laid for dinner with red-cushioned chairs", category: "dining" },
  restaurantTableSetting: { src: restaurantTableSettingImg, alt: "Table set with folded napkins, cutlery and glasses", category: "dining" },
  restaurantWindowTables: { src: restaurantWindowTablesImg, alt: "Tables for four by the restaurant's curtained windows", category: "dining" },
  tableForTwo: { src: tableForTwoImg, alt: "Table for two set with plates, bowls and flowers", category: "dining" },
  chef: { src: chefImg, alt: "Chef preparing fresh vegetables in the hotel kitchen", category: "dining" },
  kitchenPrep: { src: kitchenPrepImg, alt: "Fresh onions and peppers being chopped in the kitchen", category: "dining" },
  restaurantTeam: { src: restaurantTeamImg, alt: "Restaurant team at the entrance to the restaurant", category: "dining" },
  bartender: { src: bartenderImg, alt: "Smiling bartender pouring a drink at the hotel bar", category: "lounge" },
  barCounterGrille: { src: barCounterGrilleImg, alt: "Hotel bar counter with stocked shelves and a drinks fridge behind a steel grille", category: "lounge" },
  barShelves: { src: barShelvesImg, alt: "Wine and whisky bottles on the bar counter in front of shelves of spirits", category: "lounge" },
  barSoftDrinks: { src: barSoftDrinksImg, alt: "Canned drinks lined up on the bar counter", category: "lounge" },
  barWineWhisky: { src: barWineWhiskyImg, alt: "Bottles of wine and whisky on the bar counter", category: "lounge" },
  loungeSofas: { src: loungeSofasImg, alt: "Lounge with black leather sofas, chairs and a marble-top coffee table", category: "lounge" },
  bar: { src: barImg, alt: "Bartender at the well-stocked hotel bar", category: "lounge" },
  loungeSeating: { src: loungeSeatingImg, alt: "Lounge with leather sofas and a marble coffee table", category: "lounge" },
  loungeBalcony: { src: loungeBalconyImg, alt: "Lounge seating beside open doors to the balcony", category: "lounge" },
  terraceTables: { src: terraceTablesImg, alt: "Bright upstairs lounge with high tables and large windows", category: "lounge" },
} satisfies Record<string, Photo & { category: PhotoCategory }>;

// Spots on the site that show a single photo.
export const photoSlots: Record<string, Photo | undefined> = {
  hero: photos.rooftopSunsetLake,
  "rooms-standard": photos.standardBedNetDoor,
  "rooms-deluxe": photos.deluxeBedDoor,
  "rooms-executive": photos.executive1SeatingBed,
  events: photos.hall1Screen,
  dining: photos.restaurant,
  lounge: photos.bartender,
  rooftop: photos.rooftopSunset,
  location: photos.mainEntrance,
  explore: photos.rooftopLakeView,
  booking: photos.frontDesk,
};

// Slides in the home page hero carousel, first slide first. The first one is
// preloaded as the LCP image.
// Sorted by the owner into Categorized Media/Hero (Nov 2026).
export const heroPhotos = {
  rooftopLake: photos.rooftopUmbrellaLake,
  reception: photos.receptionDesk,
  conference: photos.hall3SkirtedUShape,
  food: photos.fishPlate,
  rooftopHill: photos.rooftopUmbrellaHill,
  banquet: photos.banquetRoundTablesWindows,
  lounge: photos.loungeSofas,
  rooftopPlants: photos.rooftopTerracePlants,
  bar: photos.barWineWhisky,
  drinks: photos.barSoftDrinks,
};

// Photo carousels on each room page, first photo first. Sorted into room
// types by the owner (Categorized Media/Standard Room, Deluxe Room and
// Executive Room/Exec1 + Exec2, Nov 2026). The Executive Room has two layouts:
// option 1 photos come first, then option 2; each carries a caption so the
// gallery labels it. The owner filed the same balcony photo under both options;
// it is listed once (a repeat would duplicate React keys in RoomGallery).
// Standard and Deluxe share the en-suite photo for the same reason.
export const roomPhotos: Record<string, Photo[]> = {
  standard: [
    photos.standardBedNetDoor,
    photos.standardBedHeadboard,
    photos.standardRoomTvDesk,
    photos.standardRoomWardrobe,
    photos.standardWritingDesk,
    photos.standardEnSuite,
  ],
  deluxe: [
    photos.deluxeBedDoor,
    photos.deluxeBedCushion,
    photos.deluxeRoomWideWindow,
    photos.deluxeDeskFan,
    photos.deluxeDeskTvWardrobe,
    photos.deluxeDeskGreyWardrobe,
    photos.deluxeBalconyChair,
    photos.standardEnSuite,
  ],
  executive: [
    photos.executive1SeatingBed,
    photos.executive1BedTowelArt,
    photos.executive1BedWindow,
    photos.executive1ViewFromBed,
    photos.executive1LoungeDesk,
    photos.executive1SeatingDoor,
    photos.executive1SeatingBedWide,
    photos.executive1BedPillows,
    photos.executive1TeaTray,
    photos.executiveBalconyHillView,
    photos.executive1RainShower,
    photos.executive1EnSuite,
    photos.executive2RoomWide,
    photos.executive2ArmchairBed,
    photos.executive2Bed,
    photos.executive2BedTowelSwan,
    photos.executive2SeatingDesk,
    photos.executive2BedWindows,
    photos.executive2TeaTray,
    photos.executive2WardrobeMirror,
    photos.executive2Mirror,
    photos.executive2EnSuite,
  ],
};

// Photos for each conference hall, keyed by Hall.id in events.ts.
export const hallPhotos: Record<string, Photo[]> = {
  "hall-1": [photos.hall1Screen, photos.hall1Wide, photos.hall1Rows, photos.hall1Tables],
  "hall-2": [photos.hall2Screen, photos.hall2Classroom, photos.hall2Banquet, photos.hall2Tables],
  // New Nov 2026 shots first (Photos/COFERENCE ROOM: same folding doors and
  // floor as Hall 3), then the older banquet and wooden-table layouts.
  "hall-3": [
    photos.hall3SkirtedUShape,
    photos.hall3HollowSquare,
    photos.hall3WindowSide,
    photos.hall3LongTables,
    photos.hall3Banquet,
    photos.hall3UShape,
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
  photos.chef,
  photos.restaurantWindowTables,
  photos.tableForTwo,
  photos.restaurantTeam,
];

export const loungePhotos: Photo[] = [photos.bartender, photos.barCounterGrille, photos.loungeSeating, photos.barShelves];

// Gallery page photos in display order: categories in the same order as the
// filter tabs, best photo first in each. Near-duplicates of a photo already
// listed (e.g. the shared Standard/Deluxe bathroom) are left out on purpose.
// A photo added to `photos` above only shows here once it is added below.
export const gallery: (Photo & { category: PhotoCategory })[] = [
  // Rooms: the best photo of each room first, then the rest by room
  photos.executive1SeatingBed,
  photos.executive2RoomWide,
  photos.deluxeBedDoor,
  photos.standardBedNetDoor,
  photos.executive1BedTowelArt,
  photos.executive1BedWindow,
  photos.executive1ViewFromBed,
  photos.executive1LoungeDesk,
  photos.executive1SeatingDoor,
  photos.executive1SeatingBedWide,
  photos.executive1BedPillows,
  photos.executive1TeaTray,
  photos.executiveBalconyHillView,
  photos.executive1RainShower,
  photos.executive1EnSuite,
  photos.executive2ArmchairBed,
  photos.executive2Bed,
  photos.executive2BedTowelSwan,
  photos.executive2SeatingDesk,
  photos.executive2BedWindows,
  photos.executive2TeaTray,
  photos.executive2WardrobeMirror,
  photos.executive2Mirror,
  photos.executive2EnSuite,
  photos.deluxeBedCushion,
  photos.deluxeRoomWideWindow,
  photos.deluxeDeskFan,
  photos.deluxeDeskTvWardrobe,
  photos.deluxeDeskGreyWardrobe,
  photos.deluxeBalconyChair,
  photos.standardEnSuite,
  photos.standardBedHeadboard,
  photos.standardRoomTvDesk,
  photos.standardRoomWardrobe,
  photos.standardWritingDesk,
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
  photos.hall3UShape,
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
  photos.restaurantWindowTables,
  photos.restaurantTableSetting,
  photos.tableForTwo,
  photos.chef,
  photos.kitchenPrep,
  photos.restaurantTeam,
  // Bar & lounge
  photos.bartender,
  photos.barCounterGrille,
  photos.bar,
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
  photos.frontDesk,
  photos.corridor,
];

// Home page "experience" row: people and atmosphere, not repeats of the section photos.
export const experiencePhotos: Photo[] = [photos.rooftopSunset, photos.restaurantTeam, photos.chef];
