type SocialPlatformType = "ao" | "ig" | "fb" | "website" | "yt";

function getSocialPlatformName(platform: SocialPlatformType): string {
  switch (platform) {
    case "ao":
      return "AO3";
    case "fb":
      return "Facebook";
    case "ig":
      return "Instagram";
    case "yt":
      return "YouTube";
    case "website":
      return "Website";
  }
}

export type { SocialPlatformType };
export { getSocialPlatformName };
