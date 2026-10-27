import type { StaticImageData } from "next/image";
import hotelFrontImg from "../../public/images/exterior/hotel-front.jpg";
import mainEntranceImg from "../../public/images/exterior/main-entrance.jpg";
import buildingViewImg from "../../public/images/exterior/building-view.jpg";
import receptionEntranceImg from "../../public/images/exterior/reception-entrance.jpg";
import frontDeskImg from "../../public/images/exterior/front-desk.jpg";
import corridorImg from "../../public/images/exterior/corridor.jpg";
import executiveRoomImg from "../../public/images/rooms/executive-room.jpg";
import executiveRoomSeatingImg from "../../public/images/rooms/executive-room-seating.jpg";
import executiveRoomLoungeImg from "../../public/images/rooms/executive-room-lounge.jpg";
import executiveRoomDeskImg from "../../public/images/rooms/executive-room-desk.jpg";
import executiveRoomBathrobeImg from "../../public/images/rooms/executive-room-bathrobe.jpg";
import deluxeRoomImg from "../../public/images/rooms/deluxe-room.jpg";
import deluxeRoomBedImg from "../../public/images/rooms/deluxe-room-bed.jpg";
import deluxeRoomTeaStationImg from "../../public/images/rooms/deluxe-room-tea-station.jpg";
import deluxeRoomWorkspaceImg from "../../public/images/rooms/deluxe-room-workspace.jpg";
import deluxeRoomWardrobeImg from "../../public/images/rooms/deluxe-room-wardrobe.jpg";
import standardRoomImg from "../../public/images/rooms/standard-room.jpg";
import standardRoomBedImg from "../../public/images/rooms/standard-room-bed.jpg";
import standardRoomPillowsImg from "../../public/images/rooms/standard-room-pillows.jpg";
import bathroomImg from "../../public/images/rooms/bathroom.jpg";
import bathroomShowerImg from "../../public/images/rooms/bathroom-shower.jpg";
import conferenceHallClassroomImg from "../../public/images/events/conference-hall-classroom.jpg";
import conferenceHallWideImg from "../../public/images/events/conference-hall-wide.jpg";
import conferenceHallScreenImg from "../../public/images/events/conference-hall-screen.jpg";
import conferenceTableSettingImg from "../../public/images/events/conference-table-setting.jpg";
import conferenceProjectorImg from "../../public/images/events/conference-projector.jpg";
import meetingRoomUShapeImg from "../../public/images/events/meeting-room-u-shape.jpg";
import meetingRoomTablesImg from "../../public/images/events/meeting-room-tables.jpg";
import banquetSetupImg from "../../public/images/events/banquet-setup.jpg";
import banquetHallImg from "../../public/images/events/banquet-hall.jpg";
import eventLunchSetupImg from "../../public/images/events/event-lunch-setup.jpg";
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
// owner's Documents/Occazia/Media folder (resized to 1024px wide, metadata
// stripped). To add one: save it in the right folder, import it above, and
// add it to `photos` with alt text that describes what is in the picture.

export type Photo = {
  src: StaticImageData;
  alt: string;
};

export type PhotoCategory = "rooms" | "events" | "dining" | "lounge" | "exterior";

export const photoCategories: { id: PhotoCategory; label: string }[] = [
  { id: "rooms", label: "Rooms" },
  { id: "events", label: "Conferences" },
  { id: "dining", label: "Dining" },
  { id: "lounge", label: "Bar & lounge" },
  { id: "exterior", label: "Hotel" },
];

const photos = {
  hotelFront: { src: hotelFrontImg, alt: "Hotel Occazia Homa Bay building and main entrance under a clear blue sky", category: "exterior" },
  mainEntrance: { src: mainEntranceImg, alt: "Main entrance of Hotel Occazia Homa Bay with its sign and potted plants", category: "exterior" },
  buildingView: { src: buildingViewImg, alt: "The Hotel Occazia building in Homa Bay with balconies on every floor", category: "exterior" },
  receptionEntrance: { src: receptionEntranceImg, alt: "Glass doors opening into the reception area", category: "exterior" },
  frontDesk: { src: frontDeskImg, alt: "Receptionist on the phone at the front desk", category: "exterior" },
  corridor: { src: corridorImg, alt: "Bright corridor leading to the guest rooms", category: "exterior" },
  executiveRoom: { src: executiveRoomImg, alt: "Executive Room with a double bed, lounge chairs, coffee table and large window", category: "rooms" },
  executiveRoomSeating: { src: executiveRoomSeatingImg, alt: "Lounge chairs and coffee table in the Executive Room seating area", category: "rooms" },
  executiveRoomLounge: { src: executiveRoomLoungeImg, alt: "Seating area with armchairs, desk and wall-mounted TV", category: "rooms" },
  executiveRoomDesk: { src: executiveRoomDeskImg, alt: "Work desk, wall-mounted TV, mirror and fan in a guest room", category: "rooms" },
  executiveRoomBathrobe: { src: executiveRoomBathrobeImg, alt: "Wardrobe with a hotel bathrobe hanging inside", category: "rooms" },
  deluxeRoom: { src: deluxeRoomImg, alt: "Deluxe Room double bed with red runner, bedside lamps and floor-to-ceiling curtains", category: "rooms" },
  deluxeRoomBed: { src: deluxeRoomBedImg, alt: "Bed made up with Hotel Occazia pillows and towel art", category: "rooms" },
  deluxeRoomTeaStation: { src: deluxeRoomTeaStationImg, alt: "Hot drinks tray with kettle, cups and bottled water", category: "rooms" },
  deluxeRoomWorkspace: { src: deluxeRoomWorkspaceImg, alt: "Writing desk with chair and kettle beside a standing fan", category: "rooms" },
  deluxeRoomWardrobe: { src: deluxeRoomWardrobeImg, alt: "Wardrobe, full-length mirror and room entrance door", category: "rooms" },
  standardRoom: { src: standardRoomImg, alt: "Standard Room double bed with bedside tables and red curtains", category: "rooms" },
  standardRoomBed: { src: standardRoomBedImg, alt: "Standard Room bed with a folded red bow and towel swans", category: "rooms" },
  standardRoomPillows: { src: standardRoomPillowsImg, alt: "Close-up of a made bed with branded pillows and a towel swan", category: "rooms" },
  bathroom: { src: bathroomImg, alt: "En-suite bathroom with washbasin and toilet", category: "rooms" },
  bathroomShower: { src: bathroomShowerImg, alt: "Walk-in shower in a tiled en-suite bathroom", category: "rooms" },
  conferenceHallClassroom: { src: conferenceHallClassroomImg, alt: "Conference hall set up classroom-style with a projector screen, red chairs and bottled water", category: "events" },
  conferenceHallWide: { src: conferenceHallWideImg, alt: "Wide view of the large conference hall with long tables set for delegates", category: "events" },
  conferenceHallScreen: { src: conferenceHallScreenImg, alt: "Delegate tables facing a projector screen and flip chart", category: "events" },
  conferenceTableSetting: { src: conferenceTableSettingImg, alt: "Conference table set with notepads, pens and bottled water", category: "events" },
  conferenceProjector: { src: conferenceProjectorImg, alt: "Projector set up on a delegate table", category: "events" },
  meetingRoomUShape: { src: meetingRoomUShapeImg, alt: "Meeting room with wooden tables in a U-shape and red chairs", category: "events" },
  meetingRoomTables: { src: meetingRoomTablesImg, alt: "Meeting room laid out with wooden tables for a workshop", category: "events" },
  banquetSetup: { src: banquetSetupImg, alt: "Banquet setup with round tables in red cloths and blue chairs", category: "events" },
  banquetHall: { src: banquetHallImg, alt: "Hall arranged for a banquet with round tables", category: "events" },
  eventLunchSetup: { src: eventLunchSetupImg, alt: "Function room set with round tables for an event lunch", category: "events" },
  eventBuffet: { src: eventBuffetImg, alt: "Buffet station with chafing dishes and plates for event catering", category: "events" },
  restaurant: { src: restaurantImg, alt: "Hotel Occazia restaurant with wooden chairs, white tables and fresh flowers", category: "dining" },
  restaurantDiningRoom: { src: restaurantDiningRoomImg, alt: "Restaurant tables laid for dinner with red-cushioned chairs", category: "dining" },
  restaurantTableSetting: { src: restaurantTableSettingImg, alt: "Table set with folded napkins, cutlery and glasses", category: "dining" },
  restaurantWindowTables: { src: restaurantWindowTablesImg, alt: "Tables for four by the restaurant's curtained windows", category: "dining" },
  tableForTwo: { src: tableForTwoImg, alt: "Table for two set with plates, bowls and flowers", category: "dining" },
  chef: { src: chefImg, alt: "Chef preparing fresh vegetables in the hotel kitchen", category: "dining" },
  kitchenPrep: { src: kitchenPrepImg, alt: "Fresh onions and peppers being chopped in the kitchen", category: "dining" },
  restaurantTeam: { src: restaurantTeamImg, alt: "Restaurant team at the entrance to the restaurant", category: "dining" },
  bar: { src: barImg, alt: "Bartender at the well-stocked hotel bar", category: "lounge" },
  barService: { src: barServiceImg, alt: "Bartender pouring a drink at the bar", category: "lounge" },
  barCounter: { src: barCounterImg, alt: "Spirits and a wine glass on the bar counter", category: "lounge" },
  loungeSeating: { src: loungeSeatingImg, alt: "Lounge with leather sofas and a marble coffee table", category: "lounge" },
  loungeBalcony: { src: loungeBalconyImg, alt: "Lounge seating beside open doors to the balcony", category: "lounge" },
  terraceTables: { src: terraceTablesImg, alt: "Bright upstairs lounge with high tables and large windows", category: "lounge" },
} satisfies Record<string, Photo & { category: PhotoCategory }>;

// Spots on the site that show a single photo.
export const photoSlots: Record<string, Photo | undefined> = {
  hero: photos.hotelFront,
  "rooms-standard": photos.standardRoom,
  "rooms-deluxe": photos.deluxeRoom,
  "rooms-executive": photos.executiveRoom,
  events: photos.conferenceHallClassroom,
  dining: photos.restaurant,
  lounge: photos.bar,
  location: photos.mainEntrance,
  booking: photos.frontDesk,
};

// Slides in the home page hero carousel, first slide first.
export const heroPhotos = {
  hotel: photos.hotelFront,
  room: photos.executiveRoom,
  conference: photos.conferenceHallClassroom,
  dining: photos.restaurantDiningRoom,
};

// Photo carousels on each room page, first photo first.
// TODO: confirm with the hotel which room type each photo shows. The
// photographer's files are not labelled; the room with the lounge chairs is
// assumed to be Executive.
export const roomPhotos: Record<string, Photo[]> = {
  standard: [photos.standardRoom, photos.standardRoomBed, photos.standardRoomPillows, photos.bathroom, photos.bathroomShower],
  deluxe: [photos.deluxeRoom, photos.deluxeRoomBed, photos.deluxeRoomWorkspace, photos.deluxeRoomTeaStation, photos.deluxeRoomWardrobe, photos.bathroom],
  executive: [photos.executiveRoom, photos.executiveRoomSeating, photos.executiveRoomLounge, photos.executiveRoomDesk, photos.executiveRoomBathrobe, photos.bathroomShower],
};

export const eventPhotos: Photo[] = [
  photos.conferenceHallWide,
  photos.conferenceHallScreen,
  photos.meetingRoomUShape,
  photos.banquetSetup,
  photos.eventBuffet,
  photos.conferenceTableSetting,
];

export const diningPhotos: Photo[] = [
  photos.restaurantDiningRoom,
  photos.restaurantTableSetting,
  photos.chef,
  photos.restaurantWindowTables,
  photos.tableForTwo,
  photos.restaurantTeam,
];

export const loungePhotos: Photo[] = [photos.barService, photos.loungeSeating, photos.terraceTables];

// Gallery photos, in display order within each category.
export const gallery: (Photo & { category: PhotoCategory })[] = Object.values(photos);

// Home page "experience" row: people and atmosphere, not repeats of the section photos.
export const experiencePhotos: Photo[] = [photos.restaurantTeam, photos.chef, photos.loungeBalcony];
