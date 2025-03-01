/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['images.prismic.io', 'images.unsplash.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgo: false, // Pour éviter l'optimisation SVG qui pourrait supprimer les IDs et classes
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
