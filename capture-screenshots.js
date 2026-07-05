import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
}

const BASE_URL = 'http://localhost:5173';

const pages = [
    { name: '01-home', path: '/', description: 'Página principal - La Metamorfosis del Alma' },
    { name: '02-writings', path: '/writings', description: 'Escritos y publicaciones' },
    { name: '03-sessions', path: '/sessions', description: 'Sesiones de Tarot y Psicoterapia' },
    { name: '04-sessions-tarot', path: '/sessions#tarot', description: 'Sección Tarot' },
    { name: '05-sessions-therapy', path: '/sessions#terapia', description: 'Sección Psicoterapia' },
    { name: '06-about', path: '/about', description: 'Acerca de mí' },
    { name: '07-reading-club', path: '/club-de-lectura', description: 'Club de lectura' },
];

const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 },
];

async function captureScreenshots() {
    console.log('🚀 Iniciando captura de screenshots...\n');

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    for (const view of viewports) {
        console.log(`\n📱 Viewport: ${view.name} (${view.width}x${view.height})`);
        await page.setViewportSize({ width: view.width, height: view.height });

        for (const pageInfo of pages) {
            try {
                const url = `${BASE_URL}${pageInfo.path}`;
                console.log(`  📸 Capturando: ${pageInfo.description}`);
                
                await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
                await page.waitForTimeout(1000);

                const filename = `${pageInfo.name}-${view.name}.png`;
                const filepath = path.join(screenshotsDir, filename);
                
                await page.screenshot({ 
                    path: filepath, 
                    fullPage: true,
                    animations: 'disabled'
                });

                console.log(`     ✅ Guardado: ${filename}`);
            } catch (error) {
                console.error(`     ❌ Error capturando ${pageInfo.name}: ${error.message}`);
            }
        }
    }

    console.log('\n📸 Capturando screenshots adicionales de secciones específicas...\n');
    
    await page.setViewportSize({ width: 1440, height: 900 });

    const heroScreenshots = [
        { name: 'hero-home', path: '/', selector: '.home-hero', desc: 'Hero principal' },
        { name: 'hero-sessions', path: '/sessions', selector: '.s-hero', desc: 'Hero sesiones' },
        { name: 'section-tarot', path: '/sessions#tarot', selector: '#tarot', desc: 'Sección Tarot' },
        { name: 'section-therapy', path: '/sessions#terapia', selector: '#terapia', desc: 'Sección Psicoterapia' },
    ];

    for (const hero of heroScreenshots) {
        try {
            console.log(`  🎯 Capturando sección: ${hero.desc}`);
            await page.goto(`${BASE_URL}${hero.path}`, { waitUntil: 'networkidle', timeout: 30000 });
            await page.waitForTimeout(800);

            const element = page.locator(hero.selector);
            if (await element.count() > 0) {
                const filename = `${hero.name}-section.png`;
                await element.screenshot({ 
                    path: path.join(screenshotsDir, filename),
                    animations: 'disabled'
                });
                console.log(`     ✅ Guardado: ${filename}`);
            }
        } catch (error) {
            console.error(`     ❌ Error: ${error.message}`);
        }
    }

    await browser.close();
    
    console.log('\n✨ Captura de screenshots completada!');
    console.log(`📁 Screenshots guardados en: ${screenshotsDir}\n`);

    const files = fs.readdirSync(screenshotsDir);
    console.log('Archivos generados:');
    files.forEach(file => console.log(`  - ${file}`));
}

captureScreenshots().catch(console.error);
