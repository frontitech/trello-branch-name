# Trello Power-Up: Branch Name

This Trello Power-Up adds a button to Trello cards that allows users to copy the suggested branch name. The text is generated dynamically based on the card details, board name, and card labels.

## Features

- Adds a custom button to Trello cards.
- Dynamically generates formatted text in the format:
  - `prefix/BOARD-<ID>-<slug>`
- Handles prefixes based on labels:
  - `feature/` if a label contains "Feature".
  - `bugfix/` if a label contains "Bugfix".
  - `hotfix/` if a label contains "Hotfix".
  - `release/` if a label contains "Release".
  - No prefix if neither label is present.
- Automatically determines board abbreviations:
  - Explicit abbreviation from the board name (e.g., `Example Board (EXB)` -> `EXB`).
  - Multi-word name generates abbreviation (e.g., `Example Board` -> `EB`).
  - Dash-separated names generate abbreviation (e.g., `example-board` -> `EB`).
  - Single names generate abbreviation (e.g., `Example` -> `EE`).

---

## Installation

### Local Development

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies:**

   ```bash
   yarn install
   ```

3. **Run the Server:**

   ```bash
   yarn dev
   ```

4. Access the Power-Up locally at `http://localhost:3000`.

### Deploy to Production

1. Deploy the server to a hosting platform like **Heroku**, **Vercel**, or **AWS**.
2. Register your Power-Up in Trello via the [Trello Power-Up Admin](https://trello.com/power-ups/admin).

---

## File Structure

```
project/
├── public/
│   ├── index.html       # Main HTML file for the Power-Up
│   ├── popup.html       # HTML file for the popup field
│   ├── client.js        # JavaScript logic for the Power-Up
│   ├── images/          # Icons and other assets
│       ├── icon.png
│       ├── icon@2x.png
├── server.js            # Express server to serve the Power-Up
├── package.json         # Project metadata and dependencies
├── README.md            # Documentation
├── LICENSE              # License
```

---

## Usage

1. **Add the Power-Up to Trello:**

   - Log in to Trello and navigate to the Power-Up Admin Console.
   - Add your Power-Up by providing the URL to your Power-Up `iframe`.

2. **Use the Button:**
   - Open any Trello card.
   - Click the "Branch name" button.
   - The branch name will be shown and ready for you to use.

---

## Development

### Dependencies

- [Express](https://expressjs.com/): Lightweight web server.
- [Nodemon](https://nodemon.io/): Development tool for live-reloading.
- [Dotenv](https://dotenvx.com/): Loads environment variables from .env for nodejs projects.

### Scripts

- **Start Server (Production):**
  ```bash
  yarn start
  ```
- **Start Server (Development):**
  ```bash
  yarn dev
  ```

---

## Example Output

### Board Name: `Example Board (EXB)`

- **Card Name:** Enable Onboarding
- **Card Labels:** Feature, Frontend
- **Generated Text:** `feature/EXB-12-enable-onboarding`

### Board Name: `example-board`

- **Card Name:** Fix Login Bug
- **Card Labels:** Bugfix, Backend
- **Generated Text:** `bugfix/EB-45-fix-login-bug`

### Board Name: `Example Board`

- **Card Name:** Refactor API
- **Card Labels:** Backend
- **Generated Text:** `EB-67-refactor-api`


![trello-branch-name](https://github.com/user-attachments/assets/4d7ee95e-2d3b-4c06-9997-b080781dd248)


---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Author

**Frontitech**  
For questions or support, contact: [contact@frontitech.com].
