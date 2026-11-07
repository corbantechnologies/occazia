import type { StaticImageData } from "next/image";
import hotelFrontImg from "../../public/images/exterior/hotel-front.jpg";
import mainEntranceImg from "../../public/images/exterior/main-entrance.jpg";
import buildingViewImg from "../../public/images/exterior/building-view.jpg";
import receptionEntranceImg from "../../public/images/exterior/reception-entrance.jpg";
import frontDeskImg from "../../public/images/exterior/front-desk.jpg";
import corridorImg from "../../public/images/exterior/corridor.jpg";
import standardBedWindowImg from "../../public/images/rooms/standard/bed-window.jpg";
import standardBedNetImg from "../../public/images/rooms/standard/bed-net-canopy.jpg";
import standardBedCloseImg from "../../public/images/rooms/standard/bed-close.jpg";
import standardDeskArmchairImg from "../../public/images/rooms/standard/desk-armchair.jpg";
import standardDeskWardrobeImg from "../../public/images/rooms/standard/desk-wardrobe.jpg";
import standardDeskMirrorImg from "../../public/images/rooms/standard/desk-mirror.jpg";
import standardBalconyImg from "../../public/images/rooms/standard/balcony.jpg";
import standardBathroomShowerImg from "../../public/images/rooms/standard/bathroom-shower.jpg";
import standardBathroomBasinImg from "../../public/images/rooms/standard/bathroom-basin.jpg";
import deluxeRoomWideImg from "../../public/images/rooms/deluxe/room-wide.jpg";
import deluxeBedImg from "../../public/images/rooms/deluxe/bed.jpg";
import deluxeBedTowelSwanImg from "../../public/images/rooms/deluxe/bed-towel-swan.jpg";
import deluxeSeatingAreaImg from "../../public/images/rooms/deluxe/seating-area.jpg";
import deluxeDeskWardrobeImg from "../../public/images/rooms/deluxe/desk-wardrobe.jpg";
import deluxeTeaTrayImg from "../../public/images/rooms/deluxe/tea-tray.jpg";
import deluxeMirrorImg from "../../public/images/rooms/deluxe/mirror.jpg";
import deluxeBathroomImg from "../../public/images/rooms/deluxe/bathroom.jpg";
import executiveRoomSeatingImg from "../../public/images/rooms/executive/room-seating.jpg";
import executiveBedTowelArtImg from "../../public/images/rooms/executive/bed-towel-art.jpg";
import executiveBedWindowImg from "../../public/images/rooms/executive/bed-window.jpg";
import executiveLoungeDeskImg from "../../public/images/rooms/executive/lounge-desk.jpg";
import executiveDeskWardrobeImg from "../../public/images/rooms/executive/desk-wardrobe.jpg";
import executiveTeaTrayImg from "../../public/images/rooms/executive/tea-tray.jpg";
import executiveBalconyViewImg from "../../public/images/rooms/executive/balcony-view.jpg";
import executiveBathroomShowerImg from "../../public/images/rooms/executive/bathroom-shower.jpg";
import executiveBathroomBasinImg from "../../public/images/rooms/executive/bathroom-basin.jpg";
import hall1ScreenImg from "../../public/images/events/hall-1/screen.jpg";
import hall1WideImg from "../../public/images/events/hall-1/wide.jpg";
import hall1RowsImg from "../../public/images/events/hall-1/rows.jpg";
import hall1TablesImg from "../../public/images/events/hall-1/delegate-tables.jpg";
import hall2ScreenImg from "../../public/images/events/hall-2/screen.jpg";
import hall2ClassroomImg from "../../public/images/events/hall-2/classroom.jpg";
import hall2TablesImg from "../../public/images/events/hall-2/tables.jpg";
import hall2BanquetImg from "../../public/images/events/hall-2/banquet.jpg";
import hall3BanquetImg from "../../public/images/events/hall-3/banquet.jpg";
import hall3RoundTablesImg from "../../public/images/events/hall-3/round-tables.jpg";
import hall3MeetingImg from "../../public/images/events/hall-3/meeting.jpg";
import hall3UShapeImg from "../../public/images/events/hall-3/u-shape.jpg";
import hall3SkirtedUShapeImg from "../../public/images/events/hall-3/u-shape-skirted.jpg";
import hall3HollowSquareImg from "../../public/images/events/hall-3/hollow-square.jpg";
import hall3WindowSideImg from "../../public/images/events/hall-3/window-side.jpg";
import hall3LongTablesImg from "../../public/images/events/hall-3/long-tables.jpg";
import banquetRoundTablesImg from "../../public/images/events/banquet/round-tables.jpg";
import banquetTableForSixImg from "../../public/images/events/banquet/table-for-six.jpg";
import barCounterGrilleImg from "../../public/images/lounge/bar/counter.jpg";
import barShelvesImg from "../../public/images/lounge/bar/shelves.jpg";
import barWhiskyImg from "../../public/images/lounge/bar/spirits.jpg";
import barSoftDrinksImg from "../../public/images/lounge/bar/soft-drinks.jpg";
import bartenderImg from "../../public/images/lounge/bartender.jpg";
import barSpiritsImg from "../../public/images/lounge/bar-spirits.jpg";
import rooftopTerraceImg from "../../public/images/rooftop/terrace.jpg";
import rooftopSignImg from "../../public/images/rooftop/terrace-sign.jpg";
import rooftopUmbrellasImg from "../../public/images/rooftop/terrace-umbrellas.jpg";
import rooftopDuskImg from "../../public/images/rooftop/terrace-dusk.jpg";
import rooftopSunsetImg from "../../public/images/rooftop/sunset.jpg";
import rooftopSunsetLakeImg from "../../public/images/rooftop/sunset-lake.jpg";
import rooftopLakeViewImg from "../../public/images/rooftop/lake-view.jpg";
import conferenceHallScreenImg from "../../public/images/events/conference-hall-screen.jpg";
import conferenceTableSettingImg from "../../public/images/events/conference-table-setting.jpg";
import conferenceProjectorImg from "../../public/images/events/conference-projector.jpg";
import banquetHallImg from "../../public/images/events/banquet-hall.jpg";
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
import barServiceImg from "../../public/images/lounge/bar-service.jpg";
import barCounterImg from "../../public/images/lounge/bar-counter.jpg";
import loungeSeatingImg from "../../public/images/lounge/lounge-seating.jpg";
import loungeBalconyImg from "../../public/images/lounge/lounge-balcony.jpg";
import terraceTablesImg from "../../public/images/lounge/terrace-tables.jpg";

// Photos live in /public/images/<category>/ and are imported statically so
// next/image gets their size and a blur placeholder. Originals are in the
// owner's Documents/Occazia/Media and Documents/Occazia/Photos folders (resized
// to 1024px wide, 1920px for rooftop photos used full-width, metadata stripped).
// To add one: save it in the right folder, import it above, and
// add it to `photos` with alt text that describes what is in the picture.

export type Photo = {
  src: StaticImageData;
  alt: string;
};

export type PhotoCategory = "rooftop" | "rooms" | "events" | "dining" | "lounge" | "exterior";

export const photoCategories: { id: PhotoCategory; label: string }[] = [
  { id: "rooftop", label: "Rooftop" },
  { id: "rooms", label: "Rooms" },
  { id: "events", label: "Conferences" },
  { id: "dining", label: "Dining" },
  { id: "lounge", label: "Bar & lounge" },
  { id: "exterior", label: "Hotel" },
];

const photos = {
  rooftopSunsetLake: { src: rooftopSunsetLakeImg, alt: "Sunset over Lake Victoria and the hills from the Hotel Occazia rooftop terrace", category: "rooftop" },
  rooftopSunset: { src: rooftopSunsetImg, alt: "Rooftop terrace tables under green umbrellas at sunset", category: "rooftop" },
  rooftopSign: { src: rooftopSignImg, alt: "Rooftop terrace with umbrellas and the Hotel Occazia sign", category: "rooftop" },
  rooftopUmbrellas: { src: rooftopUmbrellasImg, alt: "Tables, chairs and potted palms on the rooftop terrace", category: "rooftop" },
  rooftopLakeView: { src: rooftopLakeViewImg, alt: "Rooftop table looking out over Homa Bay towards the lake at dusk", category: "rooftop" },
  rooftopDusk: { src: rooftopDuskImg, alt: "Rooftop terrace seating at dusk with the hills beyond", category: "rooftop" },
  rooftopTerrace: { src: rooftopTerraceImg, alt: "Open-air rooftop terrace with umbrellas and potted plants", category: "rooftop" },
  hotelFront: { src: hotelFrontImg, alt: "Hotel Occazia Homa Bay building and main entrance under a clear blue sky", category: "exterior" },
  mainEntrance: { src: mainEntranceImg, alt: "Main entrance of Hotel Occazia Homa Bay with its sign and potted plants", category: "exterior" },
  buildingView: { src: buildingViewImg, alt: "The Hotel Occazia building in Homa Bay with balconies on every floor", category: "exterior" },
  receptionEntrance: { src: receptionEntranceImg, alt: "Glass doors opening into the reception area", category: "exterior" },
  frontDesk: { src: frontDeskImg, alt: "Receptionist on the phone at the front desk", category: "exterior" },
  corridor: { src: corridorImg, alt: "Bright corridor leading to the guest rooms", category: "exterior" },
  executiveRoomSeating: { src: executiveRoomSeatingImg, alt: "Executive Room with two red armchairs and a round coffee table in front of a double bed with a mosquito net", category: "rooms" },
  executiveBedTowelArt: { src: executiveBedTowelArtImg, alt: "Executive Room bed with Hotel Occazia pillows, a red cushion and folded towel art", category: "rooms" },
  executiveBedWindow: { src: executiveBedWindowImg, alt: "Executive Room double bed beside a bright window with red curtains", category: "rooms" },
  executiveLoungeDesk: { src: executiveLoungeDeskImg, alt: "Executive Room armchairs and coffee table, with a desk, wall-mounted TV, fan and wardrobe beyond", category: "rooms" },
  executiveDeskWardrobe: { src: executiveDeskWardrobeImg, alt: "Executive Room writing desk with kettle, wall-mounted TV, standing fan and wardrobe with mirror", category: "rooms" },
  executiveTeaTray: { src: executiveTeaTrayImg, alt: "Tea tray with kettle, cups, glasses and bottled water on the Executive Room desk", category: "rooms" },
  executiveBalconyView: { src: executiveBalconyViewImg, alt: "Private balcony with two chairs and a small table overlooking green hills", category: "rooms" },
  executiveBathroomShower: { src: executiveBathroomShowerImg, alt: "Executive Room en-suite with a rain shower, toilet and washbasin", category: "rooms" },
  executiveBathroomBasin: { src: executiveBathroomBasinImg, alt: "Executive Room en-suite washbasin, mirror and slippers", category: "rooms" },
  deluxeRoomWide: { src: deluxeRoomWideImg, alt: "Deluxe Room with a red armchair and coffee table beside a double bed and tall windows", category: "rooms" },
  deluxeBed: { src: deluxeBedImg, alt: "Deluxe Room double bed with a padded headboard, red cushion and mosquito net", category: "rooms" },
  deluxeBedTowelSwan: { src: deluxeBedTowelSwanImg, alt: "Deluxe Room bed with Hotel Occazia pillows and a towel swan", category: "rooms" },
  deluxeSeatingArea: { src: deluxeSeatingAreaImg, alt: "Deluxe Room seating area with a red armchair, coffee table and desk", category: "rooms" },
  deluxeDeskWardrobe: { src: deluxeDeskWardrobeImg, alt: "Deluxe Room desk with kettle, wall-mounted TV, standing fan and wardrobe with mirror", category: "rooms" },
  deluxeTeaTray: { src: deluxeTeaTrayImg, alt: "Tea tray with kettle, cups, glasses and bottled water in the Deluxe Room", category: "rooms" },
  deluxeMirror: { src: deluxeMirrorImg, alt: "Full-length mirror reflecting the Deluxe Room seating area", category: "rooms" },
  deluxeBathroom: { src: deluxeBathroomImg, alt: "Tiled en-suite bathroom with a rain shower and toilet", category: "rooms" },
  standardBedWindow: { src: standardBedWindowImg, alt: "Standard Room double bed with a red cushion and mosquito net beside a bright window", category: "rooms" },
  standardBedNet: { src: standardBedNetImg, alt: "Standard Room double bed with a mosquito net, red curtains and a wooden door", category: "rooms" },
  standardBedClose: { src: standardBedCloseImg, alt: "Standard Room bed with Hotel Occazia pillows and a red runner", category: "rooms" },
  standardDeskArmchair: { src: standardDeskArmchairImg, alt: "Standard Room desk with kettle, armchair, standing fan and wall-mounted TV", category: "rooms" },
  standardDeskWardrobe: { src: standardDeskWardrobeImg, alt: "Standard Room writing desk, wall-mounted TV and wardrobe", category: "rooms" },
  standardDeskMirror: { src: standardDeskMirrorImg, alt: "Standard Room desk with kettle, mirror, standing fan and wardrobe", category: "rooms" },
  standardBalcony: { src: standardBalconyImg, alt: "Standard Room balcony with a chair, looking out onto trees", category: "rooms" },
  standardBathroomShower: { src: standardBathroomShowerImg, alt: "Tiled en-suite bathroom with a rain shower and toilet", category: "rooms" },
  standardBathroomBasin: { src: standardBathroomBasinImg, alt: "Tiled en-suite bathroom with washbasin and toilet", category: "rooms" },
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
  hall3RoundTables: { src: hall3RoundTablesImg, alt: "Round banquet tables in Hall 3", category: "events" },
  hall3Meeting: { src: hall3MeetingImg, alt: "Hall 3 laid out with wooden tables for a workshop", category: "events" },
  hall3UShape: { src: hall3UShapeImg, alt: "Hall 3 with wooden tables in a U-shape and red chairs", category: "events" },
  conferenceHallScreen: { src: conferenceHallScreenImg, alt: "Delegate tables facing a projector screen and flip chart", category: "events" },
  conferenceTableSetting: { src: conferenceTableSettingImg, alt: "Conference table set with notepads, pens and bottled water", category: "events" },
  conferenceProjector: { src: conferenceProjectorImg, alt: "Projector set up on a delegate table", category: "events" },
  banquetHall: { src: banquetHallImg, alt: "Hall 3 arranged for a banquet with round tables", category: "events" },
  banquetRoundTables: { src: banquetRoundTablesImg, alt: "Conference hall set banquet-style with round tables in red cloths and red chairs", category: "events" },
  banquetTableForSix: { src: banquetTableForSixImg, alt: "Round banquet table in a red cloth with gold-framed red chairs", category: "events" },
  eventBuffet: { src: eventBuffetImg, alt: "Buffet station with chafing dishes and plates for event catering", category: "events" },
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
  barWhisky: { src: barWhiskyImg, alt: "Bottles of wine and whisky on the bar counter", category: "lounge" },
  barSoftDrinks: { src: barSoftDrinksImg, alt: "Canned drinks lined up on the bar counter", category: "lounge" },
  barSpirits: { src: barSpiritsImg, alt: "Spirits and liqueurs lined up on the bar counter", category: "lounge" },
  bar: { src: barImg, alt: "Bartender at the well-stocked hotel bar", category: "lounge" },
  barService: { src: barServiceImg, alt: "Bartender pouring a drink at the bar", category: "lounge" },
  barCounter: { src: barCounterImg, alt: "Spirits and a wine glass on the bar counter", category: "lounge" },
  loungeSeating: { src: loungeSeatingImg, alt: "Lounge with leather sofas and a marble coffee table", category: "lounge" },
  loungeBalcony: { src: loungeBalconyImg, alt: "Lounge seating beside open doors to the balcony", category: "lounge" },
  terraceTables: { src: terraceTablesImg, alt: "Bright upstairs lounge with high tables and large windows", category: "lounge" },
} satisfies Record<string, Photo & { category: PhotoCategory }>;

// Spots on the site that show a single photo.
export const photoSlots: Record<string, Photo | undefined> = {
  hero: photos.rooftopSunsetLake,
  "rooms-standard": photos.standardBedWindow,
  "rooms-deluxe": photos.deluxeRoomWide,
  "rooms-executive": photos.executiveRoomSeating,
  events: photos.hall1Screen,
  dining: photos.restaurant,
  lounge: photos.bartender,
  rooftop: photos.rooftopSunset,
  location: photos.mainEntrance,
  explore: photos.rooftopLakeView,
  booking: photos.frontDesk,
};

// Slides in the home page hero carousel, first slide first. The first one is
// also the poster shown before (or instead of) the hero video.
export const heroPhotos = {
  rooftop: photos.rooftopSunsetLake,
  room: photos.executiveRoomSeating,
  conference: photos.hall1Screen,
  hotel: photos.hotelFront,
};

// Photo carousels on each room page, first photo first. Sorted into room
// types by the owner (Photos/STANDARD ROOM, DELUXE ROOM, EXECUTIVE ROOM, Nov 2026).
// The balcony view photo was filed under both Deluxe and Executive.
export const roomPhotos: Record<string, Photo[]> = {
  standard: [
    photos.standardBedWindow,
    photos.standardBedNet,
    photos.standardDeskArmchair,
    photos.standardBedClose,
    photos.standardDeskWardrobe,
    photos.standardDeskMirror,
    photos.standardBalcony,
    photos.standardBathroomShower,
    photos.standardBathroomBasin,
  ],
  deluxe: [
    photos.deluxeRoomWide,
    photos.deluxeBed,
    photos.deluxeSeatingArea,
    photos.deluxeBedTowelSwan,
    photos.deluxeDeskWardrobe,
    photos.deluxeTeaTray,
    photos.executiveBalconyView,
    photos.deluxeMirror,
    photos.deluxeBathroom,
  ],
  executive: [
    photos.executiveRoomSeating,
    photos.executiveBedTowelArt,
    photos.executiveLoungeDesk,
    photos.executiveBedWindow,
    photos.executiveDeskWardrobe,
    photos.executiveBalconyView,
    photos.executiveTeaTray,
    photos.executiveBathroomShower,
    photos.executiveBathroomBasin,
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

// Gallery photos, in display order within each category.
export const gallery: (Photo & { category: PhotoCategory })[] = Object.values(photos);

// Home page "experience" row: people and atmosphere, not repeats of the section photos.
export const experiencePhotos: Photo[] = [photos.rooftopSunset, photos.restaurantTeam, photos.chef];
