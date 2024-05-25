import type { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { BASE_URL } from "../config/constant";

const FAVICONS: Array<Icon> = [
	// Favicon
	{ rel: "shortcut icon", url: `${BASE_URL}/favicon/favicon.ico` },
	{
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		url: `${BASE_URL}/favicon/icon-16x16.png`,
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		url: `${BASE_URL}/favicon/icon-32x32.png`,
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "48x48",
		url: `${BASE_URL}/favicon/icon-48x48.png`,
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "196x196",
		url: `${BASE_URL}/favicon/icon-196x196.png`,
	},

	// Apple Touch Icons
	{
		rel: "apple-touch-icon",
		sizes: "57x57",
		url: `${BASE_URL}/favicon/apple-touch-icon-57x57.png`,
	},
	{
		rel: "apple-touch-icon",
		sizes: "72x72",
		url: `${BASE_URL}/favicon/apple-touch-icon-72x72.png`,
	},
	{
		rel: "apple-touch-icon",
		sizes: "114x114",
		url: `${BASE_URL}/favicon/apple-touch-icon-114x114.png`,
	},
	{
		rel: "apple-touch-icon",
		sizes: "120x120",
		url: `${BASE_URL}/favicon/apple-touch-icon-120x120.png`,
	},
	{
		rel: "apple-touch-icon",
		sizes: "144x144",
		url: `${BASE_URL}/favicon/apple-touch-icon-144x144.png`,
	},
	{
		rel: "apple-touch-icon",
		sizes: "152x152",
		url: `${BASE_URL}/favicon/apple-touch-icon-152x152.png`,
	},

	// MS Application Tile Image
	{
		rel: "msapplication-TileImage",
		url: `${BASE_URL}/favicon/msapplication-tile.png`,
	},
];

export { FAVICONS };
