"use client";

import Contacts from "../components/Contacts/contacts"
import Link from "next/link"
import { useState } from "react"
import Map from "../components/Map/Map";

function Page() {
  const [isHovered, setIsHovered] = useState(false);

  // Стили для свечения (вынес отдельно для чистоты кода)
  const glowStyle = {
    color: '#D9A962',
    textShadow: isHovered 
      ? '0 0 10px rgba(255, 255, 255), 0 0 20px rgba(255, 255, 255), 0 0 30px rgba(255, 255, 255), 0 0 40px rgba(217,169,98,0.7)' 
      : 'none',
    transition: 'all 0.4s ease-in-out',
  };

  return (
    <div style={{
      minHeight: '100vh', 
      backgroundColor: '#0d0d0d', // Сделал чуть темнее для лучшего контраста свечения
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
    }}>
        
        {/* Кнопка возврата на главную */}
        <Link 
          href="/" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            textDecoration: 'none',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            zIndex: 100,
            cursor: 'pointer',
            ...glowStyle // Применяем стили свечения сюда
          }}
        >
          <span style={{ 
            fontSize: '24px', 
            lineHeight: '0',
            // Стрелка светится чуть сильнее
            textShadow: isHovered ? '0 0 15px #fff' : 'none' 
          }}>
            ←
          </span> 
          
          <span style={{ 
            fontWeight: '700',
            opacity: isHovered ? 1 : 0.6 
          }}>
            На главную
          </span>
        </Link>

        <Contacts />
        <Map />
    </div>
  )
}

export default Page;