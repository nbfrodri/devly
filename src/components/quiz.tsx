import { useState } from "react";

export type QuizProps = {
	question: string;
	options: string[];
	answer: number;
};

export function Quiz({ question, options, answer }: QuizProps) {
	const [selected, setSelected] = useState<number | null>(null);
	const isCorrect = selected === answer;

	return (
		<fieldset className="quiz">
			<legend>Compruébalo</legend>
			<p className="quiz-question">{question}</p>
			<div className="quiz-options">
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
			</div>
			{selected !== null && (
				<output key={selected} className="quiz-result" data-correct={isCorrect}>
					{isCorrect ? "Correcto." : "No es correcto, prueba otra vez."}
				</output>
			)}
		</fieldset>
	);
}
