// Компонент для главных заголовков (Красная зона на макете)
export const SectionTitle = ({ children, className = "" }) => {
    return (
      <h2 className={`text-4xl md:text-5xl font-bold text-white uppercase tracking-tight ${className}`}>
        {children}
      </h2>
    );
  };
  
  // Компонент для описаний (Желтая зона на макете)
  export const SectionDesc = ({ children, className = "" }) => {
    return (
      <p className={`text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl ${className}`}>
        {children}
      </p>
    );
  };