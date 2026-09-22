export function calculateBatch({ ingredients, labor, packaging, quantity, price }) {
    const costs = [ingredients, labor, packaging, price];

    if (!costs.every((value) => Number.isFinite(value) && value >= 0 && value <= 100000)
        || !Number.isInteger(quantity) || quantity < 1 || quantity > 10000) {
        return null;
    }

    const costCents = [ingredients, labor, packaging].reduce((total, cost) => total + Math.round(cost * 100), 0);
    const revenueCents = Math.round(price * 100) * quantity;

    return {
        unitCost: costCents / quantity / 100,
        totalCost: costCents / 100,
        revenue: revenueCents / 100,
        profit: (revenueCents - costCents) / 100,
    };
}

if (typeof document !== 'undefined') {
    document.documentElement.classList.add('js');
    const appearance = document.getElementById('appearance');
    appearance.addEventListener('change', () => {
        document.documentElement.dataset.theme = appearance.value;
    });
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    function closeMenu() {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('open');
    }

    toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        links.classList.toggle('open', !open);
    });
    links.addEventListener('click', (event) => {
        if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            toggle.focus();
        }
    });
    matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);

    const costingForm = document.getElementById('costingForm');
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const unitCost = document.getElementById('unitCost');
    const batchProfit = document.getElementById('batchProfit');
    const costingNote = document.getElementById('costingNote');

    costingForm.addEventListener('submit', (event) => event.preventDefault());
    costingForm.addEventListener('input', () => {
        const inputs = [...costingForm.querySelectorAll('input')];
        const values = Object.fromEntries(inputs.map((input) => [input.name, input.valueAsNumber]));
        const result = inputs.every((input) => input.validity.valid) ? calculateBatch(values) : null;

        if (!result) {
            unitCost.textContent = 'N/A';
            batchProfit.textContent = 'N/A';
            costingNote.textContent = 'Enter non-negative costs and a whole batch quantity of at least 1.';
            return;
        }

        unitCost.textContent = currency.format(result.unitCost);
        batchProfit.textContent = currency.format(result.profit);
        costingNote.textContent = `${currency.format(result.revenue)} in sales, less ${currency.format(result.totalCost)} in costs.`;
    });

    const contactForm = document.getElementById('contactForm');
    const status = document.getElementById('contactStatus');
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const button = contactForm.querySelector('button');
        if (button.disabled) return;

        button.disabled = true;
        button.textContent = 'Sending…';
        status.textContent = '';

        try {
            const response = await fetch('https://app.getkneadit.app/contact-us', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
                signal: AbortSignal.timeout(15000),
            });
            if (!response.ok) throw new Error('Contact request failed');
            status.textContent = 'Thanks! Your message has been sent.';
            contactForm.reset();
        } catch {
            status.textContent = 'We could not confirm your message was sent. Please try again or email hello@getkneadit.app.';
        } finally {
            button.textContent = 'Send message';
            button.disabled = false;
        }
    });
}
