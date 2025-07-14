import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconMastodon from "@/assets/icons/IconMastodon.svg";
import IconBluesky from "@/assets/icons/IconBluesky.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconRss from "@/assets/icons/IconRss.svg";
import { SITE } from "@/config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/ebendinelli",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
    rel: "noopener",
  },
  {
    name: "Mastodon",
    href: "https://mamot.fr/@bendineliot",
    linkTitle: `${SITE.title} on Mastodon`,
    icon: IconMastodon,
    rel: "me",
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/bndy.org",
    linkTitle: `${SITE.title} on Bluesky`,
    icon: IconBluesky,
    rel: "noopener",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/eliotbendinelli/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
    rel: "noopener",
  },
    {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `RSS feed for ${SITE.title}`,
    icon: IconRss,
    rel: "noopener",
  },
  // {
  //   name: "Mail",
  //   href: "mailto:eliot@bndy.org",
  //   linkTitle: `Send an email to ${SITE.title}`,
  //   icon: IconMail,
  // },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Mastodon",
    href: "https://mamot.fr/bendineliot",
    linkTitle: `${SITE.title} on Mastodon`,
    icon: IconMastodon,
  },
  {
    name: "Bluesky",
    href: "https://mamot.fr/bendineliot",
    linkTitle: `${SITE.title} on Bluesky`,
    icon: IconBluesky,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
