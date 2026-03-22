import { test, expect } from '@playwright/test';

// Define a locator for the todo input textbox
const TODO_INPUT = 'textbox';
const TODO_INPUT_NAME = 'What needs to be done?';

// Navigate to the app before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
});

test('should add a new todo item and verify UI updates', async ({ page }) => {
  // Get the textbox for entering todos
  const todoInput = page.getByRole(TODO_INPUT, { name: TODO_INPUT_NAME });

  // Click and fill the textbox
  await todoInput.click();
  await todoInput.fill('thanh vanho');

  // Assert the heading is visible
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();

  // Assert the textbox contains the entered value
  await expect(todoInput).toHaveValue('thanh vanho');
});