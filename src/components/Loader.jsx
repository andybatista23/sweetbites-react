import { useEffect, useState, useRef } from 'react';
import '../styles/Loader.css';
import logo from '../assets/img/analogo.png';

export default function Loader({ assets = [], onFinish, durationMs = 10000 }) {
  const [loaded, setLoaded] = useState(0);
  const MIN_DISPLAY_MS = 2500; // asegurar que la animación se vea
  const MAX_TIMEOUT_MS = durationMs; // configurable (por defecto 10s)
  const [elapsed, setElapsed] = useState(0);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (!assets || assets.length === 0) {
      // show at least a short moment so the logo animation is visible
      const t = setTimeout(() => {
        if (!finishedRef.current) {
          finishedRef.current = true;
          setExiting(true);
          // small delay to allow fade-out
          setTimeout(() => onFinish && onFinish(), 400);
        }
      }, MIN_DISPLAY_MS);
      return () => clearTimeout(t);
    }

    const imgs = [];
    startRef.current = Date.now();

    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded((n) => n + 1);
      img.onerror = () => setLoaded((n) => n + 1);
      imgs.push(img);
    });

    // safety timeout: no más de MAX_TIMEOUT_MS
    const safety = setTimeout(() => {
      if (!finishedRef.current) {
        finishedRef.current = true;
        setExiting(true);
        // permitir la animación de salida
        setTimeout(() => onFinish && onFinish(), 400);
      }
    }, MAX_TIMEOUT_MS);

    const unsub = () => {
      clearTimeout(safety);
    };

    return unsub;
  }, [assets, onFinish]);

  const pct = assets.length ? Math.min(100, Math.round((loaded / assets.length) * 100)) : 100;

  // timer: actualizar elapsed para que la barra avance a lo largo de MAX_TIMEOUT_MS
  useEffect(() => {
    startRef.current = startRef.current || Date.now();
    const interval = setInterval(() => {
      const e = Date.now() - (startRef.current || Date.now());
      setElapsed(e);
      if (e >= MAX_TIMEOUT_MS) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const timePct = Math.min(100, Math.round((elapsed / MAX_TIMEOUT_MS) * 100));
  // Mostrar el progreso únicamente en función del tiempo (llenará a 100% en MAX_TIMEOUT_MS)
  const displayPct = timePct;

  useEffect(() => {
    let t;
    if (assets.length > 0 && loaded >= assets.length && !finishedRef.current) {
      // asegurar mínima visibilidad antes de cerrar
      t = setTimeout(() => {
        if (!finishedRef.current) {
          finishedRef.current = true; // marcar para evitar dobles llamadas
          setExiting(true);
          setTimeout(() => onFinish && onFinish(), 400);
        }
      }, MIN_DISPLAY_MS);
    }
    return () => clearTimeout(t);
  }, [loaded, assets.length, onFinish]);

  return (
    <div className={`app-loader ${exiting ? 'exiting' : ''}`} role="status" aria-live="polite">
      <img src={logo} alt="SweetBites logo" className="loader-logo heartbeat" />
      <div className="loader-bar">
        <div className="loader-progress" style={{ width: `${displayPct}%` }} />
      </div>
      <div className="loader-pct">{displayPct}%</div>
    </div>
  );
}
