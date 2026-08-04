export function filterPendingGuestsByName(guests, query) {
  if (!query) return [];

  const normalizedQuery = query.toLowerCase();

  return guests.filter((guest) => guest.fullName.toLowerCase().includes(normalizedQuery));
}
