export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/59894239220"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        gap-3
        bg-[#25D366]
        hover:bg-[#1ebe5d]
        text-white
        px-5
        py-3
        rounded-full
        shadow-[0_8px_25px_rgba(37,211,102,0.30)]
        font-semibold
        text-sm
        transition-all
        duration-300
        hover:scale-105
        border
        border-white/20
      "
    >
      <span
        className="
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.1-4.1A8.5 8.5 0 1 1 21 11.5Z" />

          <path d="M8.5 9.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.4.5c-.1.2-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.3.1.5 0l.5-.4c.2-.1.4-.1.6 0l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.4.2-1.2-.2-2.4-.8-3.4-1.8s-1.6-2.2-1.8-3.4c-.1-.5 0-1 .2-1.4.2-.4.4-.4.7-.4Z" />
        </svg>
      </span>

      <span className="whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}
