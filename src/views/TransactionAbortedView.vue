<template>
    <div class="transaction-page">
        <div class="transaction-card">
            <span class="t-corner t-tl">✦</span>
            <span class="t-corner t-tr">✦</span>
            <span class="t-corner t-bl">✦</span>
            <span class="t-corner t-br">✦</span>

            <div class="t-ornament">⊱ ✦ ⊰</div>
            <p class="t-symbol">☽</p>
            <h2 class="t-heading cinzel-heading">Transacción cancelada</h2>
            <div class="t-divider">
                <span class="t-line"></span>
                <span class="t-star">⊱ ✦ ⊰</span>
                <span class="t-line"></span>
            </div>
            <p class="t-body">
                El proceso de pago fue cancelado.<br />
                Puedes intentarlo de nuevo cuando lo desees.
            </p>
            <router-link to="/" class="t-btn-link">
                <button class="purchase-button t-btn">Volver al inicio</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TransactionAbortedView'
}
</script>

<style scoped>
.transaction-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #120620 0%, #1e0b2e 50%, #3a0d1e 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
}

.transaction-card {
    position: relative;
    background: linear-gradient(145deg, #f5e6c0 0%, #efe0b0 55%, #e8d090 100%);
    border: 1px solid #8a6f28;
    border-radius: 3px;
    padding: 48px 40px 40px;
    text-align: center;
    max-width: 460px;
    width: 100%;
    box-shadow:
        0 8px 48px rgba(20, 5, 10, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.t-corner {
    position: absolute;
    font-size: 10px;
    color: #8a6f28;
    opacity: 0.6;
}
.t-tl { top: 8px;  left: 8px; }
.t-tr { top: 8px;  right: 8px; }
.t-bl { bottom: 8px; left: 8px; }
.t-br { bottom: 8px; right: 8px; }

.t-ornament {
    color: #8a6f28;
    font-size: 14px;
    letter-spacing: 6px;
    opacity: 0.6;
    margin-bottom: 16px;
}

.t-symbol {
    font-size: 36px;
    color: #5c1a2e;
    opacity: 0.35;
    margin-bottom: 10px;
    line-height: 1;
}

.t-heading {
    font-size: clamp(20px, 3vw, 28px);
    font-weight: 700;
    color: #3a0d1e;
    letter-spacing: 0.06em;
    margin-bottom: 16px;
}

.t-divider {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
}

.t-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #8a6f28, transparent);
    display: block;
}

.t-star {
    color: #8a6f28;
    font-size: 11px;
    letter-spacing: 4px;
    opacity: 0.6;
}

.t-body {
    font-family: var(--font-body);
    font-size: 1rem;         /* 16px */
    color: #2e1018;
    line-height: 1.75;
    margin-bottom: 28px;
    opacity: 0.85;
}

.t-btn-link {
    text-decoration: none;
}

.t-btn {
    font-size: 0.875rem;     /* 14px */
    padding: 12px 32px;
}
</style>
