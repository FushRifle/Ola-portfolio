export default function Contact() {
    return (
        <section id="contact">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Wanna Work Together?</h2>
                <p className="text-xl mb-8">
                    I’m currently accepting freelance work, full-time roles, or just fun tech discussions.<br />
                    (Also open to memes and cat videos.)
                </p>
                <form className="max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 mb-4 rounded bg-white bg-opacity-20 placeholder-black"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 mb-4 rounded bg-white bg-opacity-20 placeholder-black"
                    />
                    <textarea
                        placeholder="Your Message (e.g., 'We need someone who can break things elegantly.')"
                        className="w-full p-3 mb-6 rounded bg-white bg-opacity-20 placeholder-black"
                        rows={5}
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
                    >
                        SEND MESSAGE 🚀
                    </button>
                </form>
            </div>
        </section>
    );
}