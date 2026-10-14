import mermaid from "mermaid";

/**
 * Draws ```mermaid code blocks as SVG diagrams in the site's colours. Text
 * diagrams drawn with box characters misaligned whenever the code font lacked
 * a glyph; Mermaid lays the diagram out itself. Without JavaScript the source
 * stays visible as a code block.
 */
const SELECTOR = 'pre[data-language="mermaid"]';
const root = document.documentElement;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

type Diagram = { figure: HTMLElement; source: string };
const diagrams: Diagram[] = [
	...document.querySelectorAll<HTMLElement>(SELECTOR),
].map((pre) => {
	const figure = document.createElement("figure");
	figure.className = "diagram";
	pre.replaceWith(figure);
	figure.append(pre);
	return { figure, source: pre.textContent ?? "" };
});

function token(name: string) {
	return getComputedStyle(root).getPropertyValue(name).trim();
}

function configure() {
	mermaid.initialize({
		startOnLoad: false,
		securityLevel: "strict",
		theme: "base",
		fontFamily: token("--font-body"),
		themeVariables: {
			darkMode:
				root.dataset.theme === "dark" ||
				(root.dataset.theme !== "light" && systemDark.matches),
			background: token("--surface"),
			fontFamily: token("--font-body"),
			fontSize: "15px",
			primaryColor: token("--quiet"),
			primaryTextColor: token("--ink"),
			primaryBorderColor: token("--accent-solid"),
			secondaryColor: token("--surface"),
			secondaryTextColor: token("--ink"),
			secondaryBorderColor: token("--rule"),
			tertiaryColor: token("--bg"),
			tertiaryTextColor: token("--ink"),
			tertiaryBorderColor: token("--rule"),
			lineColor: token("--muted"),
			textColor: token("--ink"),
			mainBkg: token("--quiet"),
			nodeBorder: token("--accent-solid"),
			clusterBkg: token("--bg"),
			clusterBorder: token("--rule"),
			edgeLabelBackground: token("--surface"),
			actorBkg: token("--quiet"),
			actorBorder: token("--accent-solid"),
			actorTextColor: token("--ink"),
			actorLineColor: token("--muted"),
			signalColor: token("--ink"),
			signalTextColor: token("--ink"),
			labelBoxBkgColor: token("--quiet"),
			labelTextColor: token("--ink"),
			noteBkgColor: token("--surface"),
			noteTextColor: token("--ink"),
			noteBorderColor: token("--rule"),
		},
	});
}

let generation = 0;

async function renderAll() {
	const current = ++generation;
	configure();
	for (const [index, diagram] of diagrams.entries()) {
		try {
			const { svg } = await mermaid.render(
				`diagrama-${current}-${index}`,
				diagram.source,
			);
			// A newer pass (a theme switch) replaces this one.
			if (current !== generation) return;
			diagram.figure.innerHTML = svg;
			diagram.figure.dataset.rendered = "";
		} catch {
			// A diagram that fails to parse keeps showing its source.
		}
	}
}

new MutationObserver(renderAll).observe(root, {
	attributeFilter: ["data-theme"],
});
systemDark.addEventListener("change", renderAll);
renderAll();
