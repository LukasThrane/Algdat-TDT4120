export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Algdat",
	description: "Algorithms and Data Structures",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Algorithms",
			href: "/algorithms",
		},
		{
			label: "Data Structures",
			href: "/datastructures",
		},
		{
			label: "Theory",
			href: "/theory",
		},
		{
			label: "About",
			href: "/about",
		},
	],
	links: {
		github: "https://github.com/Windove/AlgDat",
	},
};
