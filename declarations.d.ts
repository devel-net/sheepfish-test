declare module "*.svg" {
	import type React from "react";
	const content: React.FC<React.SVGProps<SVGSVGElement>>;
	export default content;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.webp";
declare module "*.css";
