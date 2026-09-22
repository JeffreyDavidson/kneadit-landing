export function getCostingError({ label, validity, min, max, step }) {
    if (validity.valueMissing || validity.badInput) {
        return `Enter a number for ${label.toLowerCase()}.`;
    }
    if (validity.rangeOverflow) return `${label} must be ${max} or less.`;
    if (validity.rangeUnderflow) return `${label} must be at least ${min}.`;
    if (validity.stepMismatch) {
        return step === '1'
            ? `${label} must be a whole number.`
            : `${label} must use no more than two decimal places.`;
    }
    return `Check the number entered for ${label.toLowerCase()}.`;
}

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

// Fictional orders for the landing-page demonstration, never application data.
const exampleWeek = {
    friday: {
        label: 'Friday',
        orders: [
            { product: 'Sourdough loaves', quantity: 4, unit: 'loaves', description: '4 sourdough loaves', customer: 'Avery Cole', time: '4:00 PM', paid: true },
            { product: 'Chocolate chip cookies', quantity: 12, unit: 'cookies', description: '1 dozen chocolate chip cookies', customer: 'Morgan Ellis', time: '5:00 PM', paid: false },
        ],
    },
    saturday: {
        label: 'Saturday',
        orders: [
            { product: 'Sourdough loaves', quantity: 2, unit: 'loaves', description: '2 sourdough loaves', customer: 'Leah Bennett', time: '9:00 AM', paid: true },
            { product: 'Cinnamon rolls', quantity: 12, unit: 'rolls', description: '1 dozen cinnamon rolls', customer: 'Mateo Rivera', time: '10:30 AM', paid: false },
            { product: 'Chocolate chip cookies', quantity: 24, unit: 'cookies', description: '2 dozen chocolate chip cookies', customer: 'Nina Brooks', time: '11:00 AM', paid: true },
        ],
    },
    sunday: { label: 'Sunday', orders: [] },
};

export function getExampleDay(day) {
    if (!Object.hasOwn(exampleWeek, day)) return null;
    const example = exampleWeek[day];
    const totals = new Map();
    for (const order of example.orders) {
        totals.set(order.unit, (totals.get(order.unit) ?? 0) + order.quantity);
    }
    return {
        ...example,
        preparation: [...totals].map(([unit, quantity]) => `${quantity} ${unit}`).join(', '),
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

    const dayButtons = [...document.querySelectorAll('[data-day]')];
    const dayContent = document.getElementById('day-content');
    const orderList = document.getElementById('order-list');

    function textElement(tag, text, className) {
        const element = document.createElement(tag);
        element.textContent = text;
        if (className) element.className = className;
        return element;
    }

    dayButtons.forEach((button) => button.addEventListener('click', () => {
        if (button.getAttribute('aria-pressed') === 'true') return;
        const example = getExampleDay(button.dataset.day);
        if (!example) return;
        dayButtons.forEach((dayButton) => dayButton.setAttribute('aria-pressed', String(dayButton === button)));
        document.getElementById('day-title').textContent = `${example.label}’s pickups`;
        document.getElementById('order-count').textContent = example.orders.length ? `${example.orders.length} orders to prepare` : 'A clear calendar';
        const rows = example.orders.map((order) => {
            const row = document.createElement('li');
            const details = document.createElement('div');
            details.append(textElement('strong', order.description), textElement('span', order.customer));
            const time = textElement('time', order.time);
            time.setAttribute('aria-label', `Pickup at ${order.time}`);
            row.append(details, time, textElement('span', order.paid ? 'Paid' : 'Due at pickup', order.paid ? 'payment paid' : 'payment'));
            return row;
        });
        if (!rows.length) {
            const empty = document.createElement('li');
            empty.className = 'empty-orders';
            empty.append(textElement('strong', 'A little breathing room.'), textElement('span', 'No pickups scheduled in this example.'));
            rows.push(empty);
        }
        orderList.replaceChildren(...rows);
        document.getElementById('prep-total').textContent = example.preparation || 'Nothing scheduled';
        dayContent.classList.remove('is-changing');
        requestAnimationFrame(() => dayContent.classList.add('is-changing'));
    }));
    dayContent.addEventListener('animationend', () => dayContent.classList.remove('is-changing'));

    const costingForm = document.getElementById('costingForm');
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const unitCost = document.getElementById('unitCost');
    const batchProfit = document.getElementById('batchProfit');
    const profitLabel = document.getElementById('profitLabel');
    const costingNote = document.getElementById('costingNote');

    costingForm.addEventListener('submit', (event) => event.preventDefault());
    function updateCosting() {
        const inputs = [...costingForm.querySelectorAll('input')];
        const values = Object.fromEntries(inputs.map((input) => [input.name, input.valueAsNumber]));
        const invalidInput = inputs.find((input) => !input.validity.valid);
        const result = invalidInput ? null : calculateBatch(values);

        if (!result) {
            profitLabel.textContent = 'Batch profit';
            unitCost.textContent = 'N/A';
            batchProfit.textContent = 'N/A';
            costingNote.textContent = invalidInput ? getCostingError({
                label: invalidInput.getAttribute('aria-label') || invalidInput.labels[0].textContent.trim(),
                validity: invalidInput.validity,
                min: invalidInput.min,
                max: invalidInput.max,
                step: invalidInput.step,
            }) : 'Check the costs and batch quantity.';
            return;
        }

        unitCost.textContent = currency.format(result.unitCost);
        profitLabel.textContent = result.profit < 0 ? 'Batch loss' : 'Batch profit';
        batchProfit.textContent = currency.format(Math.abs(result.profit));
        costingNote.textContent = `${currency.format(result.revenue)} in sales, less ${currency.format(result.totalCost)} in costs.`;
    }

    costingForm.addEventListener('input', updateCosting);
    document.getElementById('resetExample').addEventListener('click', () => {
        costingForm.reset();
        updateCosting();
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
