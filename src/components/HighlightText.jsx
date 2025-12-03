export const HighlightText = ({ text="", query="" }) => {
    if (!query) return <>{text}</>;

        const lowerText = String(text).toLowerCase();
        const lowerQuery = String(query).toLowerCase();

        // Build an array of booleans indicating which positions matched
        const matchPositions = new Array(text.length).fill(false);
        let qIndex = 0;

        for (let i = 0; i < lowerText.length && qIndex < lowerQuery.length; i++) {
            if (lowerText[i] === lowerQuery[qIndex]) {
                matchPositions[i] = true;
                qIndex++;
            }
        }

        // If not all query chars matched, we still highlight what matched (optional)
        // Build JSX from original text using matchPositions
        return (
            <>
                {text.split("").map((char, i) =>
                    matchPositions[i] ? (
                        <span key={i} className="font-bold text-pink-500">
                            {char}
                        </span>
                    ) : (
                        <span key={i}>{char}</span>
                    )
                )}
            </>
        );
    
    // const regex = new RegExp((`${ query }`), "gi");

    // const parts = text.split(regex);

    // return parts.map((part, index) =>
    //     part.toLowerCase() === query.toLowerCase() ? (
    //         <span key={index} className="font-bold text-pink-500">
    //             {part}
    //         </span>
    //     ) : (
    //         part
    //     )
    // );
};