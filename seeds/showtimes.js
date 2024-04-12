/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("showtimes").del();
  await knex("showtimes").insert([
    {
      id: 1,
      city: "London",
      title: "Ghostbusters: Frozen Empire",
      showtimes: "10:00 AM, 1:00 PM, 4:00 PM, 7:00 PM, 10:00 PM",
    },
    {
      id: 2,
      city: "Manchester",
      title: "Ghostbusters: Frozen Empire",
      showtimes: "11:00 AM, 2:00 PM, 5:00 PM, 8:00 PM, 11:00 PM",
    },
    {
      id: 3,
      city: "Birmingham",
      title: "Ghostbusters: Frozen Empire",
      showtimes: "10:30 AM, 1:30 PM, 4:30 PM, 7:30 PM, 10:30 PM",
    },
    {
      id: 4,
      city: "Liverpool",
      title: "Ghostbusters: Frozen Empire",
      showtimes: "10:15 AM, 1:15 PM, 4:15 PM, 7:15 PM, 10:15 PM",
    },
    {
      id: 5,
      city: "Glasgow",
      title: "Ghostbusters: Frozen Empire",
      showtimes: "10:45 AM, 1:45 PM, 4:45 PM, 7:45 PM, 10:45 PM",
    },
    {
      id: 6,
      city: "Edinburgh",
      title: "Ghostbusters: Frozen Empire",
      showtimes: "10:20 AM, 1:20 PM, 4:20 PM, 7:20 PM, 10:20 PM",
    },
    {
      id: 7,
      city: "Cardiff",
      title: "Ghostbusters: Frozen Empire",
      showtimes: "10:25 AM, 1:25 PM, 4:25 PM, 7:25 PM, 10:25 PM",
    },
    {
      id: 8,
      city: "London",
      title: "Godzilla x Kong: The New Empire",
      showtimes: "10:00 AM, 1:00 PM, 4:00 PM, 7:00 PM, 10:00 PM",
    },
    {
      id: 9,
      city: "Manchester",
      title: "Godzilla x Kong: The New Empire",
      showtimes: "11:00 AM, 2:00 PM, 5:00 PM, 8:00 PM, 11:00 PM",
    },
    {
      id: 10,
      city: "Birmingham",
      title: "Godzilla x Kong: The New Empire",
      showtimes: "10:30 AM, 1:30 PM, 4:30 PM, 7:30 PM, 10:30 PM",
    },
    {
      id: 11,
      city: "Liverpool",
      title: "Godzilla x Kong: The New Empire",
      showtimes: "10:15 AM, 1:15 PM, 4:15 PM, 7:15 PM, 10:15 PM",
    },
    {
      id: 12,
      city: "Glasgow",
      title: "Godzilla x Kong: The New Empire",
      showtimes: "10:45 AM, 1:45 PM, 4:45 PM, 7:45 PM, 10:45 PM",
    },
    {
      id: 13,
      city: "Edinburgh",
      title: "Godzilla x Kong: The New Empire",
      showtimes: "10:20 AM, 1:20 PM, 4:20 PM, 7:20 PM, 10:20 PM",
    },
    {
      id: 14,
      city: "Cardiff",
      title: "Godzilla x Kong: The New Empire",
      showtimes: "10:25 AM, 1:25 PM, 4:25 PM, 7:25 PM, 10:25 PM",
    },
    {
      id: 15,
      city: "London",
      title: "Kung Fu Panda 4",
      showtimes: "10:25 AM, 1:25 PM, 4:25 PM, 7:25 PM, 10:25 PM",
    },
    {
      id: 17,
      city: "Manchester",
      title: "Kung Fu Panda 4",
      showtimes: "11:00 AM, 2:00 PM, 5:00 PM, 8:00 PM, 11:00 PM",
    },
    {
      id: 18,
      city: "Birmingham",
      title: "Kung Fu Panda 4",
      showtimes: "10:30 AM, 1:30 PM, 4:30 PM, 7:30 PM, 10:30 PM",
    },
    {
      id: 19,
      city: "Liverpool",
      title: "Kung Fu Panda 4",
      showtimes: "10:15 AM, 1:15 PM, 4:15 PM, 7:15 PM, 10:15 PM",
    },
    {
      id: 20,
      city: "Glasgow",
      title: "Kung Fu Panda 4",
      showtimes: "10:45 AM, 1:45 PM, 4:45 PM, 7:45 PM, 10:45 PM",
    },
    {
      id: 21,
      city: "Edinburgh",
      title: "Kung Fu Panda 4",
      showtimes: "10:20 AM, 1:20 PM, 4:20 PM, 7:20 PM, 10:20 PM",
    },
    {
      id: 22,
      city: "Cardiff",
      title: "Kung Fu Panda 4",
      showtimes: "10:20 AM, 1:20 PM, 4:20 PM, 7:20 PM, 10:20 PM",
    },
    {
      id: 23,
      city: "London",
      title: "Dune: Part Two",
      showtimes: "10:00 AM, 1:00 PM, 4:00 PM, 7:00 PM, 10:00 PM",
    },
    {
      id: 24,
      city: "Manchester",
      title: "Dune: Part Two",
      showtimes: "11:00 AM, 2:00 PM, 5:00 PM, 8:00 PM, 11:00 PM",
    },
    {
      id: 25,
      city: "Birmingham",
      title: "Dune: Part Two",
      showtimes: "10:30 AM, 1:30 PM, 4:30 PM, 7:30 PM, 10:30 PM",
    },
    {
      id: 26,
      city: "Liverpool",
      title: "Dune: Part Two",
      showtimes: "10:15 AM, 1:15 PM, 4:15 PM, 7:15 PM, 10:15 PM",
    },
    {
      id: 27,
      city: "Glasgow",
      title: "Dune: Part Two",
      showtimes: "10:45 AM, 1:45 PM, 4:45 PM, 7:45 PM, 10:45 PM",
    },
    {
      id: 28,
      city: "Edinburgh",
      title: "Dune: Part Two",
      showtimes: "10:45 AM, 1:45 PM, 4:45 PM, 7:45 PM, 10:45 PM",
    },
    {
      id: 29,
      city: "London",
      title: "Back to Black",
      showtimes: "10:20 AM, 1:20 PM, 4:20 PM, 7:20 PM, 10:20 PM",
    },
    {
      id: 30,
      city: "Manchester",
      title: "Back to Black",
      showtimes: "10:25 AM, 1:25 PM, 4:25 PM, 7:25 PM, 10:25 PM",
    },
    {
      id: 31,
      city: "Birmingham",
      title: "Back to Black",
      showtimes: "10:00 AM, 1:00 PM, 4:00 PM, 7:00 PM, 10:00 PM",
    },
    {
      id: 32,
      city: "Liverpool",
      title: "Back to Black",
      showtimes: "11:00 AM, 2:00 PM, 5:00 PM, 8:00 PM, 11:00 PM",
    },
    {
      id: 33,
      city: "Glasgow",
      title: "Back to Black",
      showtimes: "10:30 AM, 1:30 PM, 4:30 PM, 7:30 PM, 10:30 PM",
    },
    {
      id: 34,
      city: "Edinburgh",
      title: "Back to Black",
      showtimes: "10:15 AM, 1:15 PM, 4:15 PM, 7:15 PM, 10:15 PM",
    },
    {
      id: 35,
      city: "Cardiff",
      title: "Back to Black",
      showtimes: "10:45 AM, 1:45 PM, 4:45 PM, 7:45 PM, 10:45 PM",
    },
  ]);
};
