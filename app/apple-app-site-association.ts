import type { MetadataRoute } from "next"

export default function AppleAppSiteAssociation(): MetadataRoute.AppleAppSiteAssociation {
  return {
    applinks: {
      apps: [],
      details: [
        {
          appID: "web.bet88.app",
          paths: ["*"],
        },
      ],
    },
    webcredentials: {
      apps: ["web.bet88.app"],
    },
  }
}

