import { useState } from "react";

export type QuizProps = {
	question: string;
	options: string[];
	answer: number;
};

export function Quiz({ question, options, answer }: QuizProps) {
	const [selected, setSelected] = useState<number | null>(null);

	return (
		<fieldset className="quiz">
			<legend>{question}</legend>
			{options.map((option, index) => (
				<button
					key={option}
					type="button"
					aria-pressed={selected === index}
					onClick={() => setSelected(index)}
				>
					{option}
				</button>
			))}
			{selected !== null && (
				<p role="status">
					{selected === answer
						? "Correcto."
						: "No es correcto, prueba otra vez."}
				</p>
			)}
		</fieldset>
	);
}
