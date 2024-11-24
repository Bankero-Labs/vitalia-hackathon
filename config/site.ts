export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bankero Spark",
  description: "Make Web3 Onboarding Easy and Scalable, with Account Abstraction and a simple FIAT-USDC ONRamp.",
  navItems: [
    {
      label: "Home",
      href: "https://bankero.co/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "Docs",
      href: "https://github.com/Bankero-labs/bankero-manifesto",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Bankero-Labs/vitalia-hackathon",
    twitter: "https://x.com/bankerolabs",
    docs: "https://github.com/Bankero-Labs/bankero-manifesto/blob/main/Bankero_Manifesto.md",
  },
};
