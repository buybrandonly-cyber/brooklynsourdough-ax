function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/17182127323"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-[max(1rem,calc((100vw-480px)/2+1rem))] bottom-5 z-50 flex items-center gap-2.5 animate-whatsapp-float transition-transform hover:scale-[1.05] active:scale-[0.95]"
    >
      <span className="animate-contact-pop whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold" style={{ backgroundColor: CREAM, color: BRAND, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
        Contact us
      </span>
      <img
        src={whatsappBtnImg}
        alt="WhatsApp"
        className="h-14 w-14 object-contain"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}
      />
    </a>
  );
}
