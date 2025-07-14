export const SITE = {
  website: "https://bndy.org/", // replace this with your deployed domain
  author: "Eliot Bendinelli",
  profile: "https://bndy.org/",
  desc: "Thoughs and projects by Eliot Bendinelli.",
  title: "Eliot Bendinelli",
  ogImage: "favicon.svg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/ebendinelli/bndy-site/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Berlin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
