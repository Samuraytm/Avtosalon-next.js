export default function Map() {
    return (
      <section className="w-full h-[500px] leading-[0] overflow-hidden bg-[#121212]">
        {/* Контейнер для карты */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.331206109312!2d69.3361596!3d41.3233306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzI0LjAiTiA2OcKwMjAnMTAuMiJF!5e0!3m2!1sru!2s!4v1700000000000!5m2!1sru!2s"
          width="100%"
          height="100%"
          className="border-0 grayscale contrast-110 invert-[0.9] opacity-70"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    );
  }