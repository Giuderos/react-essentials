export default function Section({ title, children, ...props }) {
    /** ...props -> forwarding pattern */
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}