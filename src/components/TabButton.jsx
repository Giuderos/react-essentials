export default function TabButton(props) {
    function handleClick() {
        console.log('Hello');
    }
	return (
		<li>
			<button onClick={handleClick}>{props.children}</button>
		</li>
	);
}