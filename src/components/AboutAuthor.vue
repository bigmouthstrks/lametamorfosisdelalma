<template>
    <div class="author-section">
        <div class="container">
            <div class="author-card">
                <!-- Esquinas -->
                <span class="a-corner a-tl">✦</span>
                <span class="a-corner a-tr">✦</span>
                <span class="a-corner a-bl">✦</span>
                <span class="a-corner a-br">✦</span>

                <div class="author-ornament">⊱ ✦ ⊰</div>
                <p class="author-eyebrow">Acerca de la autora</p>

                <div class="author-inner">
                    <div class="author-avatar-wrap">
                        <img
                            class="author-avatar"
                            src="../assets/images/profile-img.jpg"
                            alt="Foto de la autora"
                        />
                        <div class="author-avatar-ring"></div>
                    </div>
                    <div class="author-bio">
                        <h5 class="author-name cinzel-heading text-wine-deep">
                            {{ authorData.name }}
                        </h5>
                        <div class="author-divider">
                            <span class="ad-line"></span>
                            <span class="ad-sym">✦</span>
                            <span class="ad-line"></span>
                        </div>
                        <p class="author-description">{{ authorData.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Author from '../store/Author/Author'
import { AuthorController } from '../store/Author/AuthorController'

export default {
    name: 'AboutAuthor',
    props: {
        authorName: {
            type: String,
            required: true
        }
    },
    computed: {
        authorData() {
            return AuthorController.getAuthor(this.authorName) as Author
        }
    }
}
</script>

<style scoped>
.author-section {
    padding: 30px 0 50px;
    background: linear-gradient(160deg, #1e0b2e 0%, #3a0d1e 100%);
}

.author-card {
    position: relative;
    background: linear-gradient(145deg, #f5e6c0 0%, #efe0b0 60%, #e2ce96 100%);
    border: 1px solid #8a6f28;
    border-radius: 3px;
    padding: 32px 28px 28px;
    box-shadow:
        0 6px 36px rgba(20, 5, 10, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    max-width: 740px;
    margin: 0 auto;
}

/* Esquinas */
.a-corner {
    position: absolute;
    font-size: 10px;
    color: #8a6f28;
    opacity: 0.6;
}
.a-tl { top: 8px; left: 8px; }
.a-tr { top: 8px; right: 8px; }
.a-bl { bottom: 8px; left: 8px; }
.a-br { bottom: 8px; right: 8px; }

.author-ornament {
    text-align: center;
    color: #8a6f28;
    font-size: 14px;
    letter-spacing: 6px;
    opacity: 0.6;
    margin-bottom: 6px;
}

.author-eyebrow {
    font-family: var(--font-heading);
    font-size: 0.75rem;      /* 12px */
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #5c1a2e;
    text-align: center;
    opacity: 0.7;
    margin-bottom: 20px;
}

.author-inner {
    display: flex;
    gap: 24px;
    align-items: flex-start;
    flex-wrap: wrap;
}

/* Avatar */
.author-avatar-wrap {
    position: relative;
    flex-shrink: 0;
    width: 90px;
    height: 90px;
    margin: 0 auto;
}

.author-avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #8a6f28;
    display: block;
}

.author-avatar-ring {
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 1px solid rgba(138, 111, 40, 0.35);
    pointer-events: none;
}

/* Bio */
.author-bio {
    flex: 1;
    min-width: 200px;
}

.author-name {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #3a0d1e;
    margin-bottom: 10px;
}

.text-wine-deep { color: #3a0d1e; }

.author-divider {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.ad-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #8a6f28, transparent);
    display: block;
}

.ad-sym {
    color: #8a6f28;
    font-size: 9px;
    opacity: 0.6;
}

.author-description {
    font-family: var(--font-body);
    font-size: clamp(0.9375rem, 1.5vw, 1.0625rem); /* 15–17px */
    color: #2e1018;
    line-height: 1.8;
    font-weight: 300;
    margin: 0;
    text-align: justify;
}
</style>
