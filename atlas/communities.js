import definitions from "../data/shrine_communities.json";

// Membership is the shared-person partition in analysis/shrine-communities.csv.
export function buildCommunities(sites) {
  const byId = new Map(sites.map((site) => [site.qid, site]));
  const bySite = new Map(),
    people = new Map();
  const groups = definitions.map(({ id, name, color, sites: ids }) => {
    const group = {
      id,
      name,
      color,
      sites: ids.map((qid) => byId.get(qid)),
      people: new Set(),
    };
    for (const site of group.sites) {
      bySite.set(site, group);
      for (const { qid, name } of site.people) {
        if (!people.has(qid)) people.set(qid, { qid, name, groups: new Map() });
        const person = people.get(qid);
        group.people.add(person);
        if (!person.groups.has(group)) person.groups.set(group, new Set());
        person.groups.get(group).add(site);
      }
    }
    group.people = [...group.people].sort(
      (a, b) =>
        b.groups.get(group).size - a.groups.get(group).size ||
        a.name.localeCompare(b.name),
    );
    return group;
  });
  return { groups, bySite, people };
}
