import express from "express";
import cors from "cors";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Initialize bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

// Endpoint for sending messages
app.post("/api/send-message", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Format message for Telegram
    const telegramMessage = `
🆕 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message: ${message}
    `;

    // Send message to Telegram
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, telegramMessage, {
      parse_mode: "HTML",
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ success: false, message: "Error sending message" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
