export default function TabButton({ children, isSelected, ...props }) {
	/** ...props -> forwarding pattern */
	return (
		<li>
			<button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
		</li>
	);
}
