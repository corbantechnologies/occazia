import type { StaticImageData } from "next/image";
import hotelFrontImg from "../../public/images/exterior/hotel-front.jpg";
import mainEntranceImg from "../../public/images/exterior/main-entrance.jpg";
import buildingViewImg from "../../public/images/exterior/building-view.jpg";
import receptionEntranceImg from "../../public/images/exterior/reception-entrance.jpg";
import frontDeskImg from "../../public/images/exterior/front-desk.jpg";
import corridorImg from "../../public/images/exterior/corridor.jpg";
import executiveRoomLoungeImg from "../../public/images/rooms/executive-room-lounge.jpg";
import executiveRoomBathrobeImg from "../../public/images/rooms/executive-room-bathrobe.jpg";
import deluxeRoomImg from "../../public/images/rooms/deluxe-room.jpg";
import deluxeRoomTeaStationImg from "../../public/images/rooms/deluxe-room-tea-station.jpg";
import deluxeRoomWardrobeImg from "../../public/images/rooms/deluxe-room-wardrobe.jpg";
import standardRoomBedImg from "../../public/images/rooms/standard-room-bed.jpg";
import standardRoomPillowsImg from "../../public/images/rooms/standard-room-pillows.jpg";
import standardBedImg from "../../public/images/rooms/standard/bed.jpg";
import standardDeskTvImg from "../../public/images/rooms/standard/desk-tv.jpg";
import standardDeskKettleImg from "../../public/images/rooms/standard/desk-kettle.jpg";
import standardShowerImg from "../../public/images/rooms/standard/shower.jpg";
import deluxeBedSeatingImg from "../../public/images/rooms/deluxe/bed-seating.jpg";
import deluxeArmchairsImg from "../../public/images/rooms/deluxe/armchairs.jpg";
import deluxeWardrobeImg from "../../public/images/rooms/deluxe/wardrobe.jpg";
import executiveRoomImg from "../../public/images/rooms/executive/room.jpg";
import executiveRoomWindowImg from "../../public/images/rooms/executive/room-window.jpg";
import executiveBedImg from "../../public/images/rooms/executive/bed.jpg";
import executiveLoungeImg from "../../public/images/rooms/executive/lounge.jpg";
import executiveViewImg from "../../public/images/rooms/executive/view-from-bed.jpg";
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
import bartenderImg from "../../public/images/lounge/bartender.jpg";
import barSpiritsImg from "../../public/images/lounge/bar-spirits.jpg";
import rooftopTerraceImg from "../../public/images/rooftop/terrace.jpg";
import rooftopSignImg from "../../public/images/rooftop/terrace-sign.jpg";
import rooftopUmbrellasImg from "../../public/images/rooftop/terrace-umbrellas.jpg";
import rooftopDuskImg from "../../public/images/rooftop/terrace-dusk.jpg";
import rooftopSunsetImg from "../../public/images/rooftop/sunset.jpg";
import rooftopSunsetLakeImg from "../../public/images/rooftop/sunset-lake.jpg";
import rooftopLakeViewImg from "../../public/images/rooftop/lake-view.jpg";
import bathroomImg from "../../public/images/rooms/bathroom.jpg";
import bathroomShowerImg from "../../public/images/rooms/bathroom-shower.jpg";
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
// owner's Documents/Occazia/Media folder (resized to 1024px wide, 1920px for
// rooftop photos used full-width, metadata stripped). To add one: save it in the right folder, import it above, and
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
  executiveRoom: { src: executiveRoomImg, alt: "Executive Room with a double bed by the window, armchairs and a coffee table", category: "rooms" },
  executiveRoomWindow: { src: executiveRoomWindowImg, alt: "Executive Room seating area beside floor-length windows and red curtains", category: "rooms" },
  executiveBed: { src: executiveBedImg, alt: "Executive Room bed with branded pillows and a red bow runner", category: "rooms" },
  executiveLounge: { src: executiveLoungeImg, alt: "Executive Room lounge corner with two armchairs and a coffee table", category: "rooms" },
  executiveView: { src: executiveViewImg, alt: "View across the Executive Room from the bed to the lounge and desk", category: "rooms" },
  deluxeBedSeating: { src: deluxeBedSeatingImg, alt: "Deluxe Room double bed with sheer curtains and an armchair", category: "rooms" },
  deluxeArmchairs: { src: deluxeArmchairsImg, alt: "Deluxe Room armchairs and coffee table facing the bed", category: "rooms" },
  deluxeWardrobe: { src: deluxeWardrobeImg, alt: "Deluxe Room wardrobe with a bathrobe hanging inside", category: "rooms" },
  standardBed: { src: standardBedImg, alt: "Standard Room double bed between red curtains and bedside tables", category: "rooms" },
  standardDeskTv: { src: standardDeskTvImg, alt: "Standard Room desk, wall-mounted TV and full-length mirror", category: "rooms" },
  standardDeskKettle: { src: standardDeskKettleImg, alt: "Standard Room writing desk with kettle and a standing fan", category: "rooms" },
  standardShower: { src: standardShowerImg, alt: "Standard Room en-suite with a rain shower", category: "rooms" },
  executiveRoomLounge: { src: executiveRoomLoungeImg, alt: "Seating area with armchairs, desk and wall-mounted TV", category: "rooms" },
  executiveRoomBathrobe: { src: executiveRoomBathrobeImg, alt: "Wardrobe with a hotel bathrobe hanging inside", category: "rooms" },
  deluxeRoom: { src: deluxeRoomImg, alt: "Guest room double bed with red runner, bedside lamps and floor-to-ceiling curtains", category: "rooms" },
  deluxeRoomTeaStation: { src: deluxeRoomTeaStationImg, alt: "Hot drinks tray with kettle, cups and bottled water", category: "rooms" },
  deluxeRoomWardrobe: { src: deluxeRoomWardrobeImg, alt: "Wardrobe, full-length mirror and room entrance door", category: "rooms" },
  standardRoomBed: { src: standardRoomBedImg, alt: "Guest room bed with a folded red bow and towel swans", category: "rooms" },
  standardRoomPillows: { src: standardRoomPillowsImg, alt: "Close-up of a made bed with branded pillows and a towel swan", category: "rooms" },
  bathroom: { src: bathroomImg, alt: "En-suite bathroom with washbasin and toilet", category: "rooms" },
  bathroomShower: { src: bathroomShowerImg, alt: "Walk-in shower in a tiled en-suite bathroom", category: "rooms" },
  hall1Screen: { src: hall1ScreenImg, alt: "Hall 1 set classroom-style for 120 with a projector screen and red chairs", category: "events" },
  hall1Wide: { src: hall1WideImg, alt: "Wide view of Hall 1 with rows of delegate tables", category: "events" },
  hall1Rows: { src: hall1RowsImg, alt: "Rows of tables and red chairs in Hall 1", category: "events" },
  hall1Tables: { src: hall1TablesImg, alt: "Delegate tables with water and notepads in Hall 1", category: "events" },
  hall2Screen: { src: hall2ScreenImg, alt: "Hall 2 set classroom-style facing a projector screen and flip chart", category: "events" },
  hall2Classroom: { src: hall2ClassroomImg, alt: "Hall 2 classroom layout with long tables and a projector screen", category: "events" },
  hall2Tables: { src: hall2TablesImg, alt: "Hall 2 delegate tables with flip-chart notes on the wall", category: "events" },
  hall2Banquet: { src: hall2BanquetImg, alt: "Hall 2 laid out with round tables for an event lunch", category: "events" },
  hall3Banquet: { src: hall3BanquetImg, alt: "Hall 3 with round tables in red cloths and blue banquet chairs", category: "events" },
  hall3RoundTables: { src: hall3RoundTablesImg, alt: "Round banquet tables in Hall 3", category: "events" },
  hall3Meeting: { src: hall3MeetingImg, alt: "Hall 3 laid out with wooden tables for a workshop", category: "events" },
  hall3UShape: { src: hall3UShapeImg, alt: "Hall 3 with wooden tables in a U-shape and red chairs", category: "events" },
  conferenceHallScreen: { src: conferenceHallScreenImg, alt: "Delegate tables facing a projector screen and flip chart", category: "events" },
  conferenceTableSetting: { src: conferenceTableSettingImg, alt: "Conference table set with notepads, pens and bottled water", category: "events" },
  conferenceProjector: { src: conferenceProjectorImg, alt: "Projector set up on a delegate table", category: "events" },
  banquetHall: { src: banquetHallImg, alt: "Hall 3 arranged for a banquet with round tables", category: "events" },
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
  "rooms-standard": photos.standardBed,
  "rooms-deluxe": photos.deluxeBedSeating,
  "rooms-executive": photos.executiveRoom,
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
  room: photos.executiveRoom,
  conference: photos.hall1Screen,
  hotel: photos.hotelFront,
};

// Photo carousels on each room page, first photo first. Sorted into room
// types by the owner (Media/rooms and conference/1-Standard etc., Nov 2026).
export const roomPhotos: Record<string, Photo[]> = {
  standard: [photos.standardBed, photos.standardDeskTv, photos.standardDeskKettle, photos.standardShower],
  deluxe: [photos.deluxeBedSeating, photos.deluxeArmchairs, photos.deluxeWardrobe],
  executive: [photos.executiveRoom, photos.executiveBed, photos.executiveLounge, photos.executiveRoomWindow, photos.executiveView],
};

// Photos for each conference hall, keyed by Hall.id in events.ts.
export const hallPhotos: Record<string, Photo[]> = {
  "hall-1": [photos.hall1Screen, photos.hall1Wide, photos.hall1Rows, photos.hall1Tables],
  "hall-2": [photos.hall2Screen, photos.hall2Classroom, photos.hall2Banquet, photos.hall2Tables],
  "hall-3": [photos.hall3Banquet, photos.hall3UShape, photos.hall3Meeting, photos.hall3RoundTables],
};

export const eventPhotos: Photo[] = [
  photos.conferenceHallScreen,
  photos.conferenceTableSetting,
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

export const loungePhotos: Photo[] = [photos.bartender, photos.loungeSeating, photos.barSpirits];

// Gallery photos, in display order within each category.
export const gallery: (Photo & { category: PhotoCategory })[] = Object.values(photos);

// Home page "experience" row: people and atmosphere, not repeats of the section photos.
export const experiencePhotos: Photo[] = [photos.rooftopSunset, photos.restaurantTeam, photos.chef];
