import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Entrance motion for content lists: article rows and path cards rise in as
 * they scroll into view. Anything already on screen when the page loads is
 * left alone, so nothing waits for this script and nothing flashes.
 */
const ITEMS = ".path-card, .article-card";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function reveal(targets: Element[]) {
	if (targets.length === 0) return;

	gsap.fromTo(
		targets,
		{ opacity: 0, y: 10 },
		{
			opacity: 1,
			y: 0,
			duration: 0.28,
			ease: "power2.out",
			stagger: 0.02,
			overwrite: true,
			// Leaves hover transforms defined in CSS free to work afterwards.
			clearProps: "opacity,transform",
		},
	);
}

if (!reducedMotion.matches) {
	gsap.registerPlugin(ScrollTrigger);

	const belowTheFold = gsap.utils
		.toArray<HTMLElement>(ITEMS)
		.filter((item) => item.getBoundingClientRect().top > window.innerHeight);

	gsap.set(belowTheFold, { opacity: 0 });
	ScrollTrigger.batch(belowTheFold, {
		start: "top 100%",
		once: true,
		onEnter: (batch) => reveal(batch),
	});

	// Filters and the reshuffle button announce that a list changed: its
	// visible rows come in again, and pending scroll reveals are dropped.
	document.addEventListener("devly:content-change", (event) => {
		if (!(event.target instanceof Element)) return;

		const rows = [...event.target.querySelectorAll<HTMLElement>(ITEMS)];
		for (const trigger of ScrollTrigger.getAll()) trigger.kill();
		gsap.set(gsap.utils.toArray<HTMLElement>(ITEMS), {
			clearProps: "opacity,transform",
		});
		reveal(rows.filter((row) => !row.hidden).slice(0, 12));
	});
}
