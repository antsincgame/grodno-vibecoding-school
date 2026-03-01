

import { useState } from 'react';
import type { FormEvent } from 'react';
import { getSupabase } from '@vibecoding/shared';

interface FormData {
  name: string;
  phone: string;
  email: string;
  tariff: string;
  comment: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  phone: '',
  email: '',
  tariff: 'course',
  comment: '',
};

export default function ContactSection() {
  const supabase = getSupabase();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setStatus('error');
      setErrorMessage('Пожалуйста, заполните обязательные поля');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMessage('Пожалуйста, введите корректный email');
      return;
    }

    try {
      const { error } = await supabase.from('grodno_applications').insert([
        {
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          tariff: form.tariff,
          comment: form.comment.trim(),
          source: 'grodno.vibecoding.by',
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch {
      setStatus('error');
      setErrorMessage('Произошла ошибка. Попробуйте позвонить нам: +375 (29) 282-88-78');
    }
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Как записаться на курсы программирования</h2>
      <p className="section-subtitle">
        Оставьте заявку или свяжитесь с нами напрямую — мы ответим в&nbsp;течение 24&nbsp;часов
      </p>

      <div className="contact-grid">
        <div>
          {status === 'success' ? (
            <div className="form-success">
              ✅ Спасибо за заявку!<br />
              Мы свяжемся с вами в течение 24 часов.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label className="form-label" htmlFor="name">Имя *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="cyber-input"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="phone">Телефон *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="cyber-input"
                  placeholder="+375 (XX) XXX-XX-XX"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="cyber-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="tariff">Тариф</label>
                <select
                  id="tariff"
                  name="tariff"
                  className="cyber-input"
                  value={form.tariff}
                  onChange={handleChange}
                >
                  <option value="single">Разовое занятие (200 BYN)</option>
                  <option value="course">Базовый курс — 5 занятий (1000 BYN)</option>
                  <option value="vibe-master-pro">VibeMaster PRO — личное наставничество (3 000 BYN)</option>
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="comment">Комментарий</label>
                <textarea
                  id="comment"
                  name="comment"
                  className="cyber-input"
                  placeholder="Вопросы, пожелания по расписанию..."
                  value={form.comment}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {status === 'error' && <div className="form-error">{errorMessage}</div>}

              <button
                type="submit"
                className="cyber-button"
                disabled={status === 'loading'}
                style={{ width: '100%' }}
              >
                {status === 'loading' ? 'Отправка...' : 'Записаться'}
              </button>
            </form>
          )}
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-icon">📍</span>
            <a
              href="https://share.google/EDgmh1hNpyObSvgIc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-link"
            >
              ул. Краснопартизанская 55-2, каб.29, Гродно
            </a>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">📞</span>
            <a href="tel:+375292828878" className="contact-info-link">
              +375 (29) 282-88-78
            </a>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">✉️</span>
            <a href="mailto:info@vibecoding.by" className="contact-info-link">
              info@vibecoding.by
            </a>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">💬</span>
            <a
              href="https://t.me/vibecodingby"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-link"
            >
              Telegram: @vibecodingby
            </a>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">🌐</span>
            <a
              href="https://vibecoding.by"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-link"
            >
              vibecoding.by — основной сайт
            </a>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5!2d23.8258!3d53.6884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQxJzE4LjIiTiAyM8KwNDknMzMuMCJF!5e0!3m2!1sru!2sby!4v1"
              title="AI-лаборатория VibeCoding на карте Гродно"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
