const paths = {
  map: '<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16m6-14v16"/>',
  book: '<path d="M3 4q5-2 9 1 4-3 9-1v15q-5-2-9 1-4-3-9-1zM12 5v15"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.7"/><path d="m16 16 5 5"/>',
  filter:
    '<path d="M3 7h9m5 0h4M3 17h3m5 0h10"/><circle cx="14.5" cy="7" r="2.5"/><circle cx="8.5" cy="17" r="2.5"/>',
  layers: '<path d="m2 9 10-6 10 6-10 6zM2 13l10 6 10-6M3 17l9 5 9-5"/>',
  overhead:
    '<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 11h16m-9-7v16"/>',
  plus: '<path d="M12 4v16M4 12h16"/>',
  minus: '<path d="M4 12h16"/>',
  locate:
    '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 1v4m0 14v4M1 12h4m14 0h4"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 5 7 7-7 7"/>',
  "chevron-left": '<path d="m15 5-7 7 7 7"/>',
  record:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/>',
  hand: '<path d="M8 13V6c0-2 3-2 3 0v6-8c0-2 3-2 3 0v8-6c0-2 3-2 3 0v6-4c0-2 3-2 3 0v7q0 6-6 6h-1q-3 0-5-3l-4-6c-1-2 1-3 3-1z"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
};
export const icon = (name) =>
  '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
  paths[name] +
  "</svg>";
export const types = {
  shrine: "Jazz shrine",
  org: "Organization",
  inst: "Institution",
};
export function category(site) {
  if (site.kind.some((k) => ["school", "institution", "museum"].includes(k)))
    return "inst";
  if (site.kind.includes("organization")) return "org";
  return site.kind.includes("shrine") ? "shrine" : "org";
}
