import colorNames from 'colornames'

const Input = ({
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={(e) => {
    const value = e.target.value;
    setColorValue(value);

    const hex = colorNames(value);
    setHexValue(hex ? hex : '');
}}
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default Input