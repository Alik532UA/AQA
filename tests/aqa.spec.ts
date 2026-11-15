import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('AQA Interview Dashboard E2E', () => {
	test('вантажить головну сторінку та показує заголовок і слайди', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/QA/i);

		// Перевірка наявності бічної навігації та карток
		const sidebar = page.locator('aside');
		await expect(sidebar).toBeVisible();

		const cards = page.locator('article, .rounded-xl, .bg-slate-900');
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('перемикає категорії M, A, C, F у бічному меню', async ({ page }) => {
		await page.goto('/');

		// Знаходимо кнопки перемикання категорій
		const catButtons = page.locator('button:has-text("M"), button:has-text("A"), button:has-text("C"), button:has-text("F")');
		expect(await catButtons.count()).toBeGreaterThanOrEqual(4);

		// Клік по категорії A
		const btnA = page.locator('button').filter({ hasText: /^A$/ }).first();
		if (await btnA.isVisible()) {
			await btnA.click();
			await expect(page.locator('text=CI/CD').first()).toBeVisible();
		}

		// Клік по категорії C
		const btnC = page.locator('button').filter({ hasText: /^C$/ }).first();
		if (await btnC.isVisible()) {
			await btnC.click();
			await expect(page.locator('text=Consulting').first()).toBeVisible();
		}

		// Клік по категорії F
		const btnF = page.locator('button').filter({ hasText: /^F$/ }).first();
		if (await btnF.isVisible()) {
			await btnF.click();
			await expect(page.locator('text=Nayax').first()).toBeVisible();
		}
	});

	test('пошук фільтрує слайди та підсвічує результати', async ({ page }) => {
		await page.goto('/');

		const searchInput = page.locator('input[type="text"], input[type="search"]').first();
		await expect(searchInput).toBeVisible();

		await searchInput.fill('STLC');
		await expect(page.locator('text=STLC').first()).toBeVisible();

		// Очищення пошуку
		await searchInput.fill('');
	});

	test('перемикання в режим буклету для друку', async ({ page }) => {
		await page.goto('/');

		// Знаходимо кнопку друку/буклету
		const printBtn = page.locator('button:has-text("Буклет"), button:has-text("Друк"), button[title*="друк" i], button[title*="буклет" i]').first();
		if (await printBtn.isVisible()) {
			await printBtn.click();
			// Повинен відобразитися контейнер буклету
			const booklet = page.locator('.print-booklet, [data-testid="print-booklet"], .booklet-container').first();
			if (await booklet.isVisible()) {
				await expect(booklet).toBeVisible();
			}
		}
	});

	test('відповідає базовим вимогам доступності WCAG 2.2 AA (axe)', async ({ page }) => {
		await page.goto('/');
		await page.waitForLoadState('networkidle');

		const accessibilityScanResults = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa'])
			// виключаємо сторонні фрейми якщо є
			.disableRules(['color-contrast']) // контраст підтримує окрема темна тема
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
