// app/about/page.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import Contacts from '../components/Contacts/contacts';
import Map from '../components/Map/Map';
import './about.css'; // Подключаем отдельный CSS

export default function AboutPage() {
  return (
    <main className="about-page-main">

   {/* 1. Герой-секция */}
   <section className="hero-section">
  {/* Фоновое изображение */}
  <Image
    src="/bg-fon.png"
    alt="HADID Showroom"
    fill
    className="hero-bg-image contrast-[1.1] scale-[1.02]"
    priority
  />

  {/* 1. Хлебные крошки (позиционирование через .breadcrumbs-top в CSS) */}
  <div className="breadcrumbs-top flex items-center gap-3">
    <Link href="/" className="hover:text-white transition-colors duration-300">
      Главная
    </Link>
    <span className="opacity-50">/</span>
    <span>О нас</span>
  </div>

  {/* 2. Заголовок (центрирование через .hero-section в CSS) */}
  <div className="hero-content container-custom">
    <h1 className="main-title">
      О компании
    </h1>
  </div>
</section>
      {/* 2. Почему мы? */}
      <section className="why-us-section container-custom">
        <h2 className="section-title gold-title">
          Почему мы?
        </h2>

        <p className="description-text">
          Более 5 лет HADID помогает клиентам приобретать автомобили премиум и люкс-класса. Прямые поставки, честные цены, индивидуальный подход и полный спектр услуг — от подбора до оформления.
        </p>

        <div className="stats-grid">
          {[
            { val: "5/8", label: "лет опыта на рынке" },
            { val: "5+",  label: "филиалов по стране" },
            { val: "5+",  label: "официальных партнеров" },
            { val: "5+",  label: "международных наград" },
          ].map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value gold-giant">
                {stat.val}
              </span>
              <p className="stat-label">
                {stat.label.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Наша миссия */}
      <section className="mission-section">
  <div className="container-custom">
    <div className="mission-grid">
      
      {/* Левая часть: Контент */}
      <div className="mission-text-content">
        <h2 className="mission-main-title">Наша миссия</h2>
        
        <div className="text-blocks-wrapper">
          <p className="mission-p">
            Последовательно продолжая концепцию заднего расположения двигателя, 
            лежащую в основе всех моделей семейства, версия отражает её новое прочтение.
          </p>

          <p className="mission-p">
            Специально разработанная дизайнерским подразделением новая ливрея 
            символизирует кульминацию производства — гармоничное сочетание форм.
          </p>

          {/* Горизонтальная линия между 2 и 3 абзацем */}
          <hr className="mission-divider" />

          <p className="mission-p highlight">
            Уникальное сочетание чистых форм и спортивной сущности — так рождается легенда стиля.
          </p>
        </div>
      </div>

      {/* Правая часть: Наклонные изображения */}
      <div className="mission-visual-box">
        <div className="mission-image-container">
          {/* Левая картинка (выше) */}
          <div className="mission-img-card card-left">
            <Image 
              src="/Mision.png" 
              alt="Mission detail 1" 
              fill 
              className="mission-image" 
              priority
            />
          </div>
          
          {/* Правая картинка (ниже + перекрытие) */}
          <div className="mission-img-card card-right">
            <Image 
              src="/Mission-2.png" 
              alt="Mission detail 2" 
              fill 
              className="mission-image"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 4. Видео */}
      <section className="video-section container-custom">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/uohmVBbhbwI?modestbranding=1&rel=0&showinfo=0"
            title="HADID MOTORS – официальное видео"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          />
        </div>
      </section>

      {/* 5. Контакты и Карта */}
 <Contacts/>
        <Map />
    </main>
  );
}