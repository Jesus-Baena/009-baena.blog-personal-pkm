import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Nimetön",
    description: "Ei kuvausta saatavilla",
  },
  components: {
    callout: {
      note: "Merkintä",
      abstract: "Tiivistelmä",
      info: "Info",
      todo: "Tehtävälista",
      tip: "Vinkki",
      success: "Onnistuminen",
      question: "Kysymys",
      warning: "Varoitus",
      failure: "Epäonnistuminen",
      danger: "Vaara",
      bug: "Virhe",
      example: "Esimerkki",
      quote: "Lainaus",
    },
    backlinks: {
      title: "Takalinkit",
      noBacklinksFound: "Takalinkkejä ei löytynyt",
    },
    themeToggle: {
      lightMode: "Vaalea tila",
      darkMode: "Tumma tila",
    },
    readerMode: {
      title: "Lukijatila",
    },
    explorer: {
      title: "Selain",
    },
    footer: {
      createdWith: "Luotu käyttäen",
      emailTitle: "Lähetä minulle sähköpostia",
    },
    graph: {
      title: "Verkkonäkymä",
      globalGraph: "Koko verkko",
    },
    breadcrumbs: {
      home: "Etusivu",
    },
    langSwitcher: {
      switchTo: "Vaihda kieltä",
      english: "Englanti",
      spanish: "Espanja",
    },
    propertyMeta: {
      header: "OMINAISUUDET",
      empty: "Tyhjä",
      description: "kuvaus",
      lastUpdated: "lastUpdated",
      tags: "tunnisteet",
      status: "tila",
      link: "linkki",
      article: "artikkeli",
      github: "github",
      post: "julkaisu",
    },
    recentNotes: {
      title: "Viimeisimmät muistiinpanot",
      seeRemainingMore: ({ remaining }) => `Näytä ${remaining} lisää →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Upote kohteesta ${targetSlug}`,
      linkToOriginal: "Linkki alkuperäiseen",
    },
    search: {
      title: "Haku",
      searchBarPlaceholder: "Hae jotain",
      noResults: "Ei tuloksia.",
    },
    tableOfContents: {
      title: "Sisällysluettelo",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min lukuaika`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Viimeisimmät muistiinpanot",
      lastFewNotes: ({ count }) => `Viimeiset ${count} muistiinpanoa`,
    },
    error: {
      title: "Ei löytynyt",
      notFound: "Tämä sivu on joko yksityinen tai sitä ei ole olemassa.",
      home: "Palaa etusivulle",
    },
    folderContent: {
      folder: "Kansio",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 kohde tässä kansiossa." : `${count} kohdetta tässä kansiossa.`,
    },
    tagContent: {
      tag: "Tunniste",
      tagIndex: "Tunnisteluettelo",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 kohde tällä tunnisteella." : `${count} kohdetta tällä tunnisteella.`,
      showingFirst: ({ count }) => `Näytetään ensimmäiset ${count} tunnistetta.`,
      totalTags: ({ count }) => `Löytyi yhteensä ${count} tunnistetta.`,
    },
  },
} as const satisfies Translation
