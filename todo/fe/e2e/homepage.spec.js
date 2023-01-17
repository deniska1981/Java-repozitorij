// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("http://127.0.0.1:5500/fe/src/index.html");
  });

  test("Page should have title 'TODO'", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/TODO/);
  });

  test.describe("'Dodaj novi task' button", () => {
    let button;
    test.beforeEach(async ({ page }) => {
      button = await page.getByTestId("createNewTask");
    });

    test("should be visible", async ({ page }) => {
      await expect(button).toBeVisible();
    });

    test("on click form should be revealed", async ({ page }) => {
      await button.click();

      await expect(page.getByTestId("addTaskForm")).toBeVisible();
    });
  });

  test.describe("Form for entering new task", () => {
    let form;
    test.beforeEach(async ({ page }) => {
      form = await page.getByTestId("addTaskForm");
    });

    test("should be hidden", async ({ page }) => {
      await expect(form).toBeHidden();
    });

    test("should be visible on click to 'Dodaj novi task' button", async ({
      page,
    }) => {
      await page.getByTestId("createNewTask").click();

      await expect(form).toBeVisible();
    });
  });

  test("Predifined tasks from backend should be visible", async ({ page }) => {
    const todos = await page.getByTestId("myTasks");

    await expect(todos).not.toBeEmpty();
  });
});
