# Architecture & Handover

> **Підтеми:** Структура репозиторію, ADR (Architecture Decision Records) та передача

**Категорія:** Senior AQA Consultant

---

## Структура репозиторію тестового фундаменту

Консультант створює єдину зрозумілу структуру, яку штатний інженер може миттєво підхопити:

```
/tests-automation
├── /src-electron-playwright     # Playwright + TS (UI тести)
│   ├── /fixtures               # Electron launch, Auth, IPC mock
│   ├── /pages                  # Page Object Model класи
│   └── /specs                  # Merchant regression, checkout
├── /src-native-windows-csharp   # C# .NET + FlaUI (Системні тести)
│   ├── /Installers             # Silent install, registry, signtool
│   ├── /Upgrades               # Version migration & state tests
│   └── /SystemTray             # Tray context menu & services
├── /shared-fixtures             # Тестові дані, сертифікати, еталонні фото
├── /ci-templates                # GitHub Actions / Azure Pipelines YAML
└── /docs-adr                    # Architecture Decision Records
```

Така структура розділяє швидкі UI-перевірки та глибокі системні тести Windows.

---

## Architecture Decision Records (ADR) для Project Lead

### Ключові ADR, які формує консультант:

**ADR-001: Playwright для Electron UI**
Обґрунтування відмови від застарілих Spectron/Puppeteer на користь Playwright (вбудована підтримка CDP, трасування, швидкість).

**ADR-002: FlaUI для нативного тестування Windows**
Обґрунтування вибору FlaUI над WinAppDriver (прямі UIA3 COM-виклики без необхідності окремого стороннього сервера).

**ADR-003: Стратегія мокування бекенду в CI**
Відокремлення UI регресу від нестабільних тестових середовищ мерчант-API через мок-сервер.

Результат Handover: Lead отримує впевненість у контролі якості релізів, а команда — чіткий шаблон для розширення.

---

---

[← Попередній: CI/CD on Windows Runners](./07_CICD_on_Windows_Runners.md) | [📑 До змісту](../README.md) | [Наступний: Senior Consultant Interview Q&A →](./09_Senior_Consultant_Interview_QandA.md)
