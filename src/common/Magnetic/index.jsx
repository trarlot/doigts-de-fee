import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function index({ children, ratio = 0.55 }) {
    const magnetic = useRef(null);

    useEffect(() => {
        // Stocker les références aux fonctions quickTo
        const xTo = gsap.quickTo(magnetic.current, 'x', {
            duration: 1,
            ease: 'elastic.out(1, 0.3)',
            force3D: true,
            overwrite: 'auto',
        });
        const yTo = gsap.quickTo(magnetic.current, 'y', {
            duration: 1,
            ease: 'elastic.out(1, 0.3)',
            force3D: true,
            overwrite: 'auto',
        });

        // Créer des fonctions de gestionnaire d'événements réutilisables
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } =
                magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * ratio);
            yTo(y * ratio);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };
        // Ajouter les écouteurs d'événements
        magnetic.current.addEventListener('mousemove', handleMouseMove);
        magnetic.current.addEventListener('mouseleave', handleMouseLeave);

        // Nettoyer les écouteurs d'événements
        return () => {
            if (magnetic.current) {
                magnetic.current.removeEventListener(
                    'mousemove',
                    handleMouseMove,
                );
                magnetic.current.removeEventListener(
                    'mouseleave',
                    handleMouseLeave,
                );
            }
        };
    }, []);

    return React.cloneElement(children, {
        ref: magnetic,
        style: {
            ...children.props.style,
            transition: 'none',
            willChange: 'transform',
        },
    });
}
