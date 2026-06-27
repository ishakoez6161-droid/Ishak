export const openingHours = [
  { day: "Montag", hours: "12:00–21:00" },
  { day: "Dienstag", hours: "Geschlossen" },
  { day: "Mittwoch", hours: "12:00–21:00" },
  { day: "Donnerstag", hours: "12:00–21:00" },
  { day: "Freitag", hours: "12:00–21:00" },
  { day: "Samstag", hours: "12:00–21:00" },
  { day: "Sonntag", hours: "12:00–21:00" },
];

const CLOSED_WEEKDAY = 2; // Date#getDay(): Tuesday
const OPEN_MINUTES = 12 * 60;
const CLOSE_MINUTES = 21 * 60;

export function getOpenStatus(now = new Date()) {
  const isOpenDay = now.getDay() !== CLOSED_WEEKDAY;
  const minutes = now.getHours() * 60 + now.getMinutes();

  if (isOpenDay && minutes >= OPEN_MINUTES && minutes < CLOSE_MINUTES) {
    return { isOpen: true, label: "Geöffnet · schließt um 21:00 Uhr" };
  }
  if (isOpenDay && minutes < OPEN_MINUTES) {
    return { isOpen: false, label: "Geschlossen · öffnet um 12:00 Uhr" };
  }
  return { isOpen: false, label: "Heute geschlossen" };
}
